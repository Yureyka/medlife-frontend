import React, { useEffect, useState } from "react";
import moment from "moment";
import { Filter, Modal, Table } from "ui";
import { AdminLayout } from "./AdminLayout";
import { CallRequestApi, ReviewApi } from "api";
import { useMutation, useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import { ICallRequest, IReview } from "interfaces";

import styles from "./AdminLayout.module.scss";
import { debounce, usePlatform } from "helpers";
import { ArrowDiagonal } from "icons";

const PAGE_SIZE = 12;

export const AdminCommentsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterValue, setFilterValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowData, setRowData] = useState<IReview | null>(null);

  const { isMobile } = usePlatform();

  const { data, refetch } = useQuery(
    ["getPaginatedComments", [currentPage, filterValue]],
    () => ReviewApi.getReviewsPaginated(PAGE_SIZE, currentPage, filterValue)
  );

  const updateMutation = useMutation(
    ["updateComment"],
    ReviewApi.updateReview,
    {
      onSuccess: () => refetch(),
    }
  );

  const deleteMutation = useMutation(
    ["deleteComment"],
    ReviewApi.deleteReview,
    {
      onSuccess: () => refetch(),
    }
  );

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRowClick = (data: IReview) => {
    setIsModalOpen(true);
    setRowData({
      _id: data._id,
      name: data.name,
      comment: data.comment,
      isShowing: data.isShowing,
    });
  };

  const onPageChange = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  const handleSearch = (value: string) => {
    setFilterValue(value);
  };

  const formatData = (data: IReview[]) => {
    return data?.map((item) => {
      return {
        ...item,
        isShowing: item.isShowing ? (
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
      comment: rowData!.comment,
      isShowing: !rowData!.isShowing,
    });
  };

  const debouncedSearch = debounce((value: string) => {
    handleSearch(value);
  }, 500);

  const getColumnsConfig = () => [
    {
      title: " ",
      dataIndex: "isShowing",
      key: "isShowing",
      width: 40,
    },
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
      width: isMobile ? 100 : 300,
    },
    {
      title: "Отзыв",
      dataIndex: "comment",
      key: "comment",
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
          <p className={styles.modalInfoText}>{rowData?.comment}</p>

          <div className={styles.buttonGroup}>
            {
              <button
                className={styles.sendButton}
                onClick={(e) => {
                  e.preventDefault();
                  handleSendIsHandled();
                  handleCloseModal();
                }}
              >
                {rowData?.isShowing ? "Скрыть отзыв" : "Показать отзыв"}
              </button>
            }
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
