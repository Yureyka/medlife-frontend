import React, { useState } from "react";
import { Button, Input, Modal, Select } from "ui";
import { IAppointment, IAppointmentModal, IServiceGroup } from "interfaces";

import styles from "./AppointmentModal.module.scss";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AppointmentApi, ServicesApi } from "api";

export const AppointmentModal: React.FC<IAppointmentModal> = ({
  isOpen,
  onClose,
}) => {
  const [appointment, setAppointment] = useState<IAppointment>({
    name: "",
    phone: "+7",
    service: { label: "", value: "" },
    online: "",
    message: "",
  });

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

  const handleSendData = () => {
    createMutation.mutate({
      name: appointment!.name,
      phone: appointment!.phone,
      service: appointment!.service.value,
      // serviceGroupId: rowData!.serviceGroup.value,
    });

    onClose();
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
            onChange={(e) => {
              handleChangeState("phone", e.target.value);
            }}
          />
        </div>
        <div className={styles.formInput}>
          <Select
            label="Услуга"
            defaultSelected={appointment?.service}
            options={formatGroupsOptions(groups)}
            onSelect={(val) => {
              handleChangeState("service", val);
            }}
          />
        </div>
        <div className={styles.buttonGroup}>
          <Button fullWidth onClick={handleSendData}>
            записаться
          </Button>
        </div>
      </form>
    </Modal>
    </div>
  );
};
