import React, { useState } from "react";
import { Filter, Input, Modal, Table } from "ui";
import { AdminLayout } from "./AdminLayout";
import { TeamApi } from "api";
import { useMutation, useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import cn from "classnames";
import { ArrowDiagonal } from "icons";
import { IDoctor } from "interfaces";

import styles from "./AdminLayout.module.scss";
import { debounce, usePlatform } from "helpers";
import { FileLoader, MultipleInput } from "../components";

const PAGE_SIZE = 12;

export const AdminTeamPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterValue, setFilterValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowData, setRowData] = useState<IDoctor | null>(null);
  const { isMobile } = usePlatform();

  const { data, refetch } = useQuery(
    ["getPaginatedDoctors", [currentPage, filterValue]],
    () => TeamApi.getPaginatedTeam(PAGE_SIZE, currentPage, filterValue)
  );

  const deleteMutation = useMutation(["deleteDoctor"], TeamApi.deleteDoctor, {
    onSuccess: () => refetch(),
  });

  const createMutation = useMutation(["createDoctor"], TeamApi.createDoctor, {
    onSuccess: () => refetch(),
  });

  const updateMutation = useMutation(["updateDoctor"], TeamApi.updateDoctor, {
    onSuccess: () => refetch(),
  });

  const handleOpenCreateModal = () => {
    setRowData({
      _id: "",
      fullName: "",
      position: "",
      experience: 0,
      experienceDetails: [],
      image: "",
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRowClick = (data: IDoctor) => {
    setIsModalOpen(true);
    setRowData({
      _id: data._id,
      fullName: data.fullName,
      position: data.position,
      experience: data.experience,
      experienceDetails: data.experienceDetails,
      image: data.image,
    });
  };

  const checkIsEmpty = () => {
    return (
      !rowData?.fullName ||
      !rowData?.position ||
      !rowData?.experience ||
      !rowData?.image
    );
  };

  const handleChangeState = <T extends keyof IDoctor>(
    fieldName: T,
    value: IDoctor[T]
  ) => {
    setRowData((prev) => {
      return {
        ...prev,
        [fieldName]: value,
      } as IDoctor;
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
        _id: rowData._id,
        fullName: rowData.fullName,
        position: rowData.position,
        experience: rowData.experience,
        experienceDetails: rowData.experienceDetails,
        image: rowData.image,
      });
    } else {
      createMutation.mutate({
        fullName: rowData!.fullName,
        position: rowData!.position,
        experience: rowData!.experience,
        experienceDetails: rowData!.experienceDetails,
        image: rowData!.image,
      });
    }
    handleCloseModal();
  };

  const debouncedSearch = debounce((value: string) => {
    handleSearch(value);
  }, 500);

  const getColumnsConfig = () => [
    {
      title: "Имя",
      dataIndex: "fullName",
      key: "fullName",
      width: isMobile ? 250 : 400,
    },
    {
      title: "Должность",
      dataIndex: "position",
      key: "position",
      width: isMobile ? 200 : 300,
    },
    {
      title: "Стаж",
      dataIndex: "experience",
      key: "experience",
      width: isMobile ? 70 : 100,
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
              label="ФИО"
              value={rowData?.fullName || ""}
              onChange={(e) => {
                handleChangeState("fullName", e.target.value);
              }}
            />
          </div>
          <div className={styles.formInput}>
            <Input
              label="Должность"
              value={rowData?.position || ""}
              onChange={(e) => {
                handleChangeState("position", e.target.value);
              }}
            />
          </div>
          <div className={styles.formInput}>
            <Input
              label="Стаж"
              type="number"
              value={String(rowData?.experience)}
              onChange={(e) => {
                handleChangeState("experience", Number(e.target.value));
              }}
            />
          </div>
          <div className={styles.formInput}>
            <MultipleInput
              label="Стаж"
              placeholder="Добавьте стаж"
              onAddNew={() => {}}
              values={rowData?.experienceDetails.map((detail) =>
                detail.year && detail.description
                  ? `${detail.year} — ${detail.description.trim()}`
                  : ""
              )}
              onChange={(expDetails) => {
                const result = expDetails.map((elem) => {
                  const splitted = elem.replace(/-|—/, "\x01").split("\x01");
                  return {
                    year: parseInt(splitted[0]),
                    description: splitted[1],
                  };
                });
                handleChangeState("experienceDetails", result);
              }}
            />
          </div>
          <FileLoader
            onImageUpload={(img) => {
              handleChangeState("image", img);
            }}
            defaultImage={rowData?.image as string}
            resetOnClose={!isModalOpen}
          />
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
