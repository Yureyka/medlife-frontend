import React, { useState } from "react";
import { Filter, Input, Modal, Table } from "ui";
import { AdminLayout } from "./AdminLayout";
import { ServicesApi } from "api";
import { useMutation, useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import cn from "classnames";
import { ArrowDiagonal } from "icons";
import { IServiceGroup } from "interfaces";

import styles from "./AdminLayout.module.scss";
import { debounce, transliterate } from "helpers";

const PAGE_SIZE = 12;

export const AdminServiceGroupsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterValue, setFilterValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowData, setRowData] = useState<IServiceGroup | null>(null);

  const { data, refetch } = useQuery(
    ["getServiceGroups", [currentPage, filterValue]],
    () => ServicesApi.getGroupsPaginated(PAGE_SIZE, currentPage, filterValue)
  );

  const deleteMutation = useMutation(
    ["deleteServiceGroup"],
    ServicesApi.deleteServiceGroup,
    {
      onSuccess: () => refetch(),
    }
  );

  const createMutation = useMutation(
    ["createServiceGroup"],
    ServicesApi.createServiceGroup,
    {
      onSuccess: () => refetch(),
    }
  );

  const updateMutation = useMutation(
    ["updateServiceGroup"],
    ServicesApi.updateServiceGroup,
    {
      onSuccess: () => refetch(),
    }
  );

  const handleOpenCreateModal = () => {
    setRowData({
      _id: "",
      name: "",
      key: "",
      services: [],
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRowClick = (data: IServiceGroup) => {
    setIsModalOpen(true);
    setRowData({
      _id: data._id,
      name: data.name,
      key: data.key,
      services: data.services,
    });
  };

  const checkIsEmpty = () => {
    return !rowData?.name;
  };

  const handleChangeState = <T extends keyof IServiceGroup>(
    fieldName: T,
    value: IServiceGroup[T]
  ) => {
    setRowData((prev) => {
      return {
        ...prev,
        [fieldName]: value,
      } as IServiceGroup;
    });
  };

  const onPageChange = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  const handleSearch = (value: string) => {
    setFilterValue(value);
  };

  const handleSendData = () => {
    if (rowData?._id) {
      updateMutation.mutate({
        _id: rowData!._id,
        name: rowData!.name,
        key: rowData!.key || transliterate(rowData!.name),
        services: rowData!.services,
      });
    } else {
      createMutation.mutate({
        name: rowData!.name,
        key: transliterate(rowData!.name),
        services: [],
      });
    }
    handleCloseModal();
  };

  const debouncedSearch = debounce((value: string) => {
    handleSearch(value);
  }, 500);

  const getColumnsConfig = () => [
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
    },
  ];

  return (
    <AdminLayout>
      <div className={styles.actions}>
        <Filter onSearch={debouncedSearch} placeholder="Поиск" />
        <button className={styles.addButton} onClick={handleOpenCreateModal}>
          Добавить
        </button>
      </div>
      <Table
        columns={getColumnsConfig()}
        data={data?.data}
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
          <div className={styles.formInput}>
            <Input
              label="Название"
              value={rowData?.name || ""}
              onChange={(e) => {
                handleChangeState("name", e.target.value);
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
    </AdminLayout>
  );
};
