import React, { useEffect, useState } from "react";
import moment from "moment";
import { Filter, Modal, Table } from "ui";
import { AdminLayout } from "./AdminLayout";
import { CallRequestApi } from "api";
import { useMutation, useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import { ArrowDiagonal } from "icons";
import { ICallRequest } from "interfaces";

import styles from "./AdminLayout.module.scss";
import { debounce, usePlatform } from "helpers";

const PAGE_SIZE = 12;

export const AdminAppointmentPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterValue, setFilterValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowData, setRowData] = useState<ICallRequest | null>(null);

  const { isMobile } = usePlatform();

  const { data, refetch } = useQuery(
    ["callRequests", [currentPage, filterValue]],
    () => CallRequestApi.getCallRequests(PAGE_SIZE, currentPage, filterValue)
  );

  const updateMutation = useMutation(
    ["updateRequest"],
    CallRequestApi.updateCallRequest,
    {
      onSuccess: () => refetch(),
    }
  );

  const deleteMutation = useMutation(
    ["deleteRequest"],
    CallRequestApi.deleteCallRequest,
    {
      onSuccess: () => refetch(),
    }
  );

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRowClick = (data: ICallRequest) => {
    setIsModalOpen(true);
    setRowData({
      _id: data._id,
      name: data.name,
      phone: data.phone,
      isHandled: data.isHandled,
    });
  };

  const onPageChange = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  const handleSearch = (value: string) => {
    setFilterValue(value);
  };

  const formatData = (data: ICallRequest[]) => {
    return data?.map((item) => {
      return {
        ...item,
        isHandled: item.isHandled ? "✅︎" : "",
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
      isHandled: true,
    });
  };

  const debouncedSearch = debounce((value: string) => {
    handleSearch(value);
  }, 500);

  const getColumnsConfig = () => [
    {
      title: "☑",
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
          <p className={styles.modalInfo}>{rowData?.name}</p>
          <p className={styles.modalInfo}>{rowData?.phone}</p>

          <div className={styles.buttonGroup}>
            {!rowData?.isHandled && (
              <button
                className={styles.sendButton}
                onClick={(e) => {
                  e.preventDefault();
                  handleSendIsHandled();
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
    </AdminLayout>
  );
};
