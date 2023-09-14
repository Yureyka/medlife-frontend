import React, { useState } from "react";
import { Filter, Input, Modal, Select, Table } from "ui";
import { AdminLayout } from "./AdminLayout";
import { ServicesApi } from "api";
import { useMutation, useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import cn from "classnames";
import { ArrowDiagonal } from "icons";
import { IOption, IServiceGroup, IService } from "interfaces";

import styles from "./AdminLayout.module.scss";
import { debounce } from "helpers";

type RowSerivce = Omit<IService, "serviceGroup"> & {
  serviceGroup: IOption;
};

const COLUMNS = [
  {
    title: "Название",
    dataIndex: "name",
    key: "name",
    width: 400,
  },
  {
    title: "Цена",
    dataIndex: "price",
    key: "price",
    width: 100,
  },
  {
    title: "Группа",
    dataIndex: "serviceGroup",
    key: "serviceGroup",
    width: 200,
  },
];

const PAGE_SIZE = 12;

export const AdminServicesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterValue, setFilterValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowData, setRowData] = useState<RowSerivce | null>(null);

  const { data, refetch } = useQuery(
    ["services", [currentPage, filterValue]],
    () => ServicesApi.getServices(PAGE_SIZE, currentPage, filterValue)
  );

  const serviceGroups = useQuery(["serviceGroups"], ServicesApi.getGroups, {
    enabled: isModalOpen,
  });

  const deleteMutation = useMutation(
    ["deleteService"],
    ServicesApi.deleteService,
    {
      onSuccess: () => refetch(),
    }
  );

  const createMutation = useMutation(
    ["createService"],
    ServicesApi.createService,
    {
      onSuccess: () => refetch(),
    }
  );

  const updateMutation = useMutation(
    ["updateService"],
    ServicesApi.updateService,
    {
      onSuccess: () => refetch(),
    }
  );

  const handleOpenCreateModal = () => {
    setRowData({
      _id: "",
      name: "",
      price: 1000,
      serviceGroup: { label: "Не выбрано", value: "" },
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRowClick = (data: IService) => {
    setIsModalOpen(true);
    setRowData({
      _id: data._id,
      name: data.name,
      price: data.price,
      serviceGroup: {
        label: data.serviceGroup.name,
        value: data.serviceGroup._id,
      },
    });
  };

  const checkIsEmpty = () => {
    return !rowData?.name || !rowData?.price || !rowData?.serviceGroup.value;
  };

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

  const onPageChange = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  const formatData = (data?: IService[]) => {
    return data?.map((elem) => {
      return {
        ...elem,
        serviceGroup: elem.serviceGroup.name,
      };
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

  const handleSearch = (value: string) => {
    setFilterValue(value);
  };

  const handleSendData = () => {
    if (rowData?._id) {
      updateMutation.mutate({
        _id: rowData!._id,
        name: rowData!.name,
        price: rowData!.price,
        serviceGroupId: rowData!.serviceGroup.value,
      });
    } else {
      createMutation.mutate({
        name: rowData!.name,
        price: rowData!.price,
        serviceGroupId: rowData!.serviceGroup.value,
      });
    }
    handleCloseModal();
  };

  const debouncedSearch = debounce((value: string) => {
    handleSearch(value);
  }, 500);

  return (
    <AdminLayout>
      <div className={styles.actions}>
        <Filter onSearch={debouncedSearch} placeholder="Поиск" />
        <button className={styles.addButton} onClick={handleOpenCreateModal}>
          Добавить
        </button>
      </div>
      <Table
        columns={COLUMNS}
        data={data?.data}
        onRowClick={handleRowClick}
        formatter={formatData}
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
          pageRangeDisplayed={3}
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
    </AdminLayout>
  );
};
