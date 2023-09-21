import React, { useState } from "react";
import moment from "moment";
import cn from "classnames";
import { Filter, Modal, Table } from "ui";
import { AdminLayout } from "./AdminLayout";
import { AppointmentApi, ServicesApi } from "api";
import { useMutation, useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import { ArrowDiagonal } from "icons";
import { IAppointment } from "interfaces";

import styles from "./AdminLayout.module.scss";
import { CONTACT_NETWORKS, debounce, usePlatform } from "helpers";

const PAGE_SIZE = 12;

export const AdminAppointmentPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterValue, setFilterValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowData, setRowData] = useState<IAppointment | null>(null);

  const { isMobile } = usePlatform();

  const { data, refetch } = useQuery(
    ["appointments", [currentPage, filterValue]],
    () =>
      AppointmentApi.getAppointmentRequests(PAGE_SIZE, currentPage, filterValue)
  );

  const { data: groups } = useQuery(
    ["getServiceGroupsOptions"],
    ServicesApi.getGroups
  );

  const updateMutation = useMutation(
    ["updateAppointment"],
    AppointmentApi.updateAppointmentRequest,
    {
      onSuccess: () => refetch(),
    }
  );

  const deleteMutation = useMutation(
    ["deleteAppointment"],
    AppointmentApi.deleteAppointmentRequest,
    {
      onSuccess: () => refetch(),
    }
  );

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRowClick = (data: IAppointment) => {
    setIsModalOpen(true);
    setRowData({
      _id: data._id,
      name: data.name,
      phone: data.phone,
      online: data.online,
      serviceGroup: data.serviceGroup,
      message: data.message,
    });
  };

  const onPageChange = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  const handleSearch = (value: string) => {
    setFilterValue(value);
  };

  const getContactNetwork = (key: string | undefined, isTable: boolean) => {
    const network = CONTACT_NETWORKS.find((net) => net.key === key);

    return network ? (
      <div className={cn({ [styles.tableIcon]: isTable })}>
        {network.icon()}
      </div>
    ) : (
      "Нет"
    );
  };

  const formatData = (data: IAppointment[]) => {
    return data?.map((item) => {
      return {
        ...item,
        online: getContactNetwork(item.online, true),
        isHandled: item.isHandled ? (
          <div className={styles.tableIcon}>✅︎</div>
        ) : (
          ""
        ),
        date: moment(item.createdAt).format("DD-MM-YYYY"),
        time: moment(item.createdAt).format("HH:MM:ss"),
      };
    });
  };

  const handleSendIsHandled = () => {
    updateMutation.mutate({
      _id: rowData!._id,
      name: rowData!.name,
      phone: rowData!.phone,
      online: rowData!.online,
      serviceGroupId: rowData!.serviceGroup.value,
      message: rowData!.message,
      isHandled: true,
    });
  };

  const debouncedSearch = debounce((value: string) => {
    handleSearch(value);
  }, 500);

  const getColumnsConfig = () => [
    {
      title: " ",
      dataIndex: "isHandled",
      key: "isHandled",
      width: 40,
    },
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
      width: isMobile ? 100 : 300,
    },
    {
      title: "Телефон",
      dataIndex: "phone",
      key: "phone",
      width: isMobile ? 100 : 300,
    },
    {
      title: "Дата",
      dataIndex: "date",
      key: "date",
      width: isMobile ? 100 : 150,
    },
    {
      title: "Время",
      dataIndex: "time",
      key: "time",
      width: isMobile ? 100 : 150,
    },
    {
      title: "Онлайн",
      dataIndex: "online",
      key: "online",
      width: 80,
    },
  ];

  return (
    <AdminLayout>
      <div className={styles.actions}>
        <Filter onSearch={debouncedSearch} placeholder="Поиск" />
      </div>
      <Table
        columns={getColumnsConfig()}
        data={data?.data}
        formatter={formatData}
        onRowClick={handleRowClick}
      />
      <div className="pagination">
        <ReactPaginate
          breakLabel={<div className="paginationItem">...</div>}
          nextLabel={
            <div className="paginationItem">
              <ArrowDiagonal />
            </div>
          }
          onPageChange={onPageChange}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={parseInt(data?.totalCount as string)}
          previousLabel={
            <div className="paginationItem">
              <ArrowDiagonal />
            </div>
          }
          pageClassName="paginationItem"
          renderOnZeroPageCount={null}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <form>
          <div className={styles.modalInfo}>
            <div className={styles.modalInfoItem}>
              <span>Имя:</span>
              <p className={styles.modalInfoValue}>{rowData?.name}</p>
            </div>
            <div className={styles.modalInfoItem}>
              <span>Телефон:</span>
              <p className={styles.modalInfoValue}>{rowData?.phone}</p>
            </div>
            <div className={styles.modalInfoItem}>
              <span>Услуга:</span>
              <p className={styles.modalInfoValue}>
                {
                  groups?.find((group) => {
                    return rowData?.serviceGroup === group._id;
                  })?.name
                }
              </p>
            </div>
            <div className={styles.modalInfoItem}>
              <span>Онлайн:</span>
              <p className={styles.modalInfoValue}>
                {getContactNetwork(rowData?.online, false)}
              </p>
            </div>
            <div className={styles.modalInfoItem}>
              <span>Сообщение:</span>
              <p className={styles.modalInfoValue}>{rowData?.message}</p>
            </div>
          </div>

          <div className={styles.buttonGroup}>
            {!rowData?.isHandled && (
              <button
                className={styles.sendButton}
                onClick={(e) => {
                  e.preventDefault();
                  handleSendIsHandled();
                  handleCloseModal();
                }}
              >
                Заявка обработана
              </button>
            )}
            {rowData?._id && (
              <button
                className={styles.deleteButton}
                onClick={(e) => {
                  e.preventDefault();
                  deleteMutation.mutate(rowData!._id!);
                  handleCloseModal();
                }}
              >
                Удалить
              </button>
            )}
          </div>
        </form>
      </Modal>
    </AdminLayout>
  );
};
