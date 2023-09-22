import React, { useState } from "react";
import cn from "classnames";
import * as yup from "yup";
import { Button, Checkbox, Input, Modal, Select, Textarea } from "ui";
import { IAppointment, IAppointmentModal, IServiceGroup } from "interfaces";

import styles from "./AppointmentModal.module.scss";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AppointmentApi, ServicesApi } from "api";
import { CONTACT_NETWORKS } from "helpers";

import privacyPolicy from "assets/privacy_policy.pdf";

const PHONE_REGEXP = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;

const validationSchema = yup.object().shape({
  name: yup.string().required("Поле 'Имя' обязательно для заполнения"),
  phone: yup
    .string()
    .matches(PHONE_REGEXP, "Номер телефона недействителен")
    .required("Поле 'Телефон' обязательно для заполнения"),
});

export const AppointmentModal: React.FC<IAppointmentModal> = ({
  isOpen,
  onClose,
}) => {
  const [appointment, setAppointment] = useState<IAppointment>({
    name: "",
    phone: "+7",
    serviceGroup: { label: "", value: "" },
    online: "",
    message: "",
  });
  const [isOnlineChecked, setIsOnlineChecked] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [errors, setErrors] = useState({ name: "", phone: "" });

  const { data: groups } = useQuery(
    ["getServiceGroups"],
    ServicesApi.getGroups
  );

  const createMutation = useMutation(
    ["createAppointmentRequest"],
    AppointmentApi.createAppointmentRequest
  );

  const handleChangeState = <T extends keyof IAppointment>(
    fieldName: T,
    value: IAppointment[T]
  ) => {
    setAppointment((prev) => {
      return {
        ...prev,
        [fieldName]: value,
      } as IAppointment;
    });
  };

  const formatGroupsOptions = (groups?: IServiceGroup[]) => {
    return groups
      ? groups.map((group) => {
          return {
            label: group.name,
            value: group._id,
          };
        })
      : [];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await validationSchema.validate(
        { name: appointment.name, phone: appointment.phone },
        { abortEarly: false }
      );
      createMutation.mutate({
        name: appointment!.name,
        phone: appointment!.phone,
        serviceGroupId: appointment!.serviceGroup.value,
        online: appointment!.online,
        message: appointment!.message,
      });
      setAppointment({
        name: "",
        phone: "+7",
        serviceGroup: { label: "", value: "" },
        online: "",
        message: "",
      });
      onClose();
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        error.inner.forEach((e) => {
          if (e.path === "name") {
            setErrors((prev) => {
              return {
                ...prev,
                name: e.message,
              };
            });
          } else if (e.path === "phone") {
            setErrors((prev) => {
              return {
                ...prev,
                phone: e.message,
              };
            });
          }
        });
      }
    }
  };

  const getPrivacyPolicyLabel = () => {
    return (
      <div className={styles.privacyLabel}>
        Я даю свое согласие на обработку моих персональных данных, в
        соответствии с Федеральным Законом от 27.07.2006г. №152-ФЗ "О
        персональных данных", на условиях и для целей, определенных{" "}
        <a target="_blank" href={privacyPolicy}>
          Политикой конфеденциальности
        </a>
      </div>
    );
  };

  return (
    <div className={styles.modal}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <form>
          <h2 className={styles.title}>Онлайн запись</h2>
          <h6 className={styles.subtitle}>
            Заполните форму и мы свяжемся с вами для подтверждения записи
          </h6>
          <div className={styles.formInput}>
            <Input
              label="Имя"
              value={appointment!.name || ""}
              invalidMessage={errors.name}
              onChange={(e) => {
                handleChangeState("name", e.target.value);
              }}
            />
          </div>
          <div className={styles.formInput}>
            <Input
              label="Телефон"
              type="tel"
              value={appointment!.phone}
              invalidMessage={errors.phone}
              onChange={(e) => {
                handleChangeState("phone", e.target.value);
              }}
            />
          </div>
          <div className={styles.formInput}>
            <Select
              label="Услуга"
              defaultSelected={appointment?.serviceGroup}
              options={formatGroupsOptions(groups)}
              onSelect={(val) => {
                handleChangeState("serviceGroup", val);
              }}
            />
          </div>
          <div className={styles.formInput}>
            <Checkbox
              checked={isOnlineChecked}
              label="Онлайн прием"
              onChange={(val) => {
                setIsOnlineChecked(val);
                if (!val) {
                  handleChangeState("online", "");
                }
              }}
            ></Checkbox>
          </div>
          {isOnlineChecked && (
            <div className={styles.onlineNetworks}>
              {CONTACT_NETWORKS.map(({ key, icon }) => (
                <div
                  key={key}
                  className={cn(styles.network, {
                    [styles.activeNetwork]: appointment.online === key,
                  })}
                  onClick={() => {
                    handleChangeState("online", key);
                  }}
                >
                  {icon()}
                </div>
              ))}
            </div>
          )}
          <div className={styles.formInput}>
            <Textarea
              label="Сообщение"
              value={appointment!.message || ""}
              onChange={(e) => {
                handleChangeState("message", e.target.value);
              }}
            />
          </div>
          <div className={styles.formInput}>
            <Checkbox
              checked={isPrivacyChecked}
              label={getPrivacyPolicyLabel()}
              onChange={(val) => {
                setIsPrivacyChecked(val);
              }}
            ></Checkbox>
          </div>
          <div className={styles.buttonGroup}>
            <Button
              disabled={!isPrivacyChecked}
              ariaLabel="Записаться на прием"
              fullWidth
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              записаться
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
