import React from "react";
import { Container, Input, Modal } from "ui";
import { IAppointment } from "interfaces";

import styles from "./Contacts.module.scss";

import { Link } from "react-router-dom";

export const AppointmentModal: React.FC<IAppointment> = () => {
    const

    const handleChangeState = <T extends keyof RowSerivce>(
        fieldName: T,
        value: RowSerivce[T]
      ) => {
        setRowData((prev) => {
          return {
            ...prev,
            [fieldName]: value,
          } as RowSerivce;
        });
      };

  return (
    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
      <form>
        <div className={styles.formInput}>
          <Input
            label="Название"
            value={rowData?.name || ""}
            onChange={(e) => {
              handleChangeState("name", e.target.value);
            }}
          />
        </div>
        <div className={styles.formInput}>
          <Input
            label="Цена"
            type="number"
            value={String(rowData?.price)}
            onChange={(e) => {
              handleChangeState("price", Number(e.target.value));
            }}
          />
        </div>
        <div className={styles.formInput}>
          <Select
            label="Группа"
            defaultSelected={rowData?.serviceGroup}
            options={formatGroupsOptions(serviceGroups.data)}
            onSelect={(val) => {
              handleChangeState("serviceGroup", val);
            }}
          />
        </div>
        <div className={styles.buttonGroup}>
          <button
            className={cn(styles.sendButton, {
              [styles.disabled]: checkIsEmpty(),
            })}
            onClick={(e) => {
              e.preventDefault();
              handleSendData();
            }}
          >
            {rowData?._id ? "Обновить" : "Создать"}
          </button>
          {rowData?._id && (
            <button
              className={styles.deleteButton}
              onClick={(e) => {
                e.preventDefault();
                deleteMutation.mutate(rowData!._id);
                handleCloseModal();
              }}
            >
              Удалить
            </button>
          )}
        </div>
      </form>
    </Modal>
  );
};
