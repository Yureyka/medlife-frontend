import React, { useState } from "react";
import { Checkbox, Input, Modal, Textarea } from "ui";
import { AdminLayout } from "./AdminLayout";
import { NewsApi } from "api";
import { useMutation, useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import cn from "classnames";
import { ArrowDiagonal } from "icons";

import styles from "./AdminLayout.module.scss";
import { FileLoader } from "../components";
import { BACKEND_URL } from "helpers";
import { INews } from "interfaces";

const PAGE_SIZE = 6;

export const AdminNewsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowData, setRowData] = useState<INews | null>(null);

  const { data, refetch } = useQuery(["getPaginatedNews", [currentPage]], () =>
    NewsApi.getNewsPaginated(PAGE_SIZE, currentPage)
  );

  const deleteMutation = useMutation(["deleteNews"], NewsApi.deleteNews, {
    onSuccess: () => refetch(),
  });

  const createMutation = useMutation(["createNews"], NewsApi.createNews, {
    onSuccess: () => refetch(),
  });

  const updateMutation = useMutation(["createNews"], NewsApi.updateNews, {
    onSuccess: () => refetch(),
  });

  const handleOpenCreateModal = () => {
    setRowData({
      _id: "",
      title: "",
      description: "",
      image: "",
      isShowing: false,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const checkIsEmpty = () => {
    return !rowData?.title || !rowData?.description || !rowData?.image;
  };

  const onPageChange = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  const handleSendData = () => {
    if (rowData?._id) {
      updateMutation.mutate({
        _id: rowData!._id,
        title: rowData!.title,
        description: rowData!.description,
        isShowing: rowData!.isShowing,
        image: rowData!.image,
      });
    } else {
      createMutation.mutate({
        title: rowData!.title,
        description: rowData!.description,
        isShowing: rowData!.isShowing,
        image: rowData!.image,
      });
    }
    handleCloseModal();
  };

  const handleChangeState = <T extends keyof INews>(
    fieldName: T,
    value: INews[T]
  ) => {
    setRowData((prev) => {
      return {
        ...prev,
        [fieldName]: value,
      } as INews;
    });
  };

  return (
    <AdminLayout>
      <div className={styles.actions}>
        <button className={styles.addButton} onClick={handleOpenCreateModal}>
          Добавить
        </button>
      </div>
      <div className={styles.news}>
        {data?.data.map((item, index) => {
          return (
            <div
              key={index + item.title}
              className={styles.galleryItem}
              onClick={() => {
                setRowData(item);
                setIsModalOpen(true);
              }}
            >
              <div className={styles.galleryImgWrapper}>
                <img src={`${BACKEND_URL}/${item.image}`} alt={item.title} />
              </div>
              <h5 className={styles.galleryItemName}>{item.title}</h5>
            </div>
          );
        })}
      </div>
      {parseInt(data?.totalCount as string) === 1 ? null : (
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
      )}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <form>
          <>
            <div className={styles.formInput}>
              <Input
                label="Название"
                type="text"
                value={String(rowData?.title)}
                onChange={(e) => {
                  handleChangeState("title", e.target.value);
                }}
              />
            </div>
            <div className={styles.formInput}>
              <Textarea
                label="Описание"
                value={rowData?.description || ""}
                maxLength={1000}
                onChange={(e) => {
                  handleChangeState("description", e.target.value);
                }}
              />
            </div>
            <div className={styles.formInput}>
              <Checkbox
                checked={rowData?.isShowing}
                label="Показывать на главной"
                onChange={(val) => {
                  handleChangeState("isShowing", val);
                }}
              ></Checkbox>
            </div>
            <FileLoader
              onImageUpload={(img) => {
                handleChangeState("image", img);
              }}
              defaultImage={rowData?.image as string}
              resetOnClose={!isModalOpen}
            />
          </>
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
