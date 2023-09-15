import React, { useState } from "react";
import { Input, Modal } from "ui";
import { AdminLayout } from "./AdminLayout";
import { GalleryApi } from "api";
import { useMutation, useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import cn from "classnames";
import { ArrowDiagonal } from "icons";
import { IGalleryItem } from "interfaces";

import styles from "./AdminLayout.module.scss";
import { FileLoader } from "../components";
import { BACKEND_URL } from "helpers";

const PAGE_SIZE = 6;

export const AdminGalleryPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowData, setRowData] = useState<IGalleryItem | null>(null);

  const { data, refetch } = useQuery(
    ["getPaginatedGallery", [currentPage]],
    () => GalleryApi.getGalleryImages(PAGE_SIZE, currentPage)
  );

  const deleteMutation = useMutation(
    ["deleteGalleryItem"],
    GalleryApi.deleteGalleryImage,
    {
      onSuccess: () => refetch(),
    }
  );

  const createMutation = useMutation(
    ["createGalleryItem"],
    GalleryApi.createGalleryImage,
    {
      onSuccess: () => refetch(),
    }
  );

  const handleOpenCreateModal = () => {
    setRowData({
      _id: "",
      name: "",
      image: "",
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const checkIsEmpty = () => {
    return !rowData?.name || !rowData?.image;
  };

  const onPageChange = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  const handleSendData = () => {
    createMutation.mutate({
      name: rowData!.name,
      image: rowData!.image,
    });

    handleCloseModal();
  };

  const handleChangeState = <T extends keyof IGalleryItem>(
    fieldName: T,
    value: IGalleryItem[T]
  ) => {
    setRowData((prev) => {
      return {
        ...prev,
        [fieldName]: value,
      } as IGalleryItem;
    });
  };

  return (
    <AdminLayout>
      <div className={styles.actions}>
        <button className={styles.addButton} onClick={handleOpenCreateModal}>
          Добавить
        </button>
      </div>
      <div className={styles.gallery}>
        {data?.data.map((item, index) => {
          return (
            <div
              key={index + item.name}
              className={styles.galleryItem}
              onClick={() => {
                setRowData(item);
                setIsModalOpen(true);
              }}
            >
              <div className={styles.galleryImgWrapper}>
                <img src={`${BACKEND_URL}/${item.image}`} alt={item.name} />
              </div>
              <h5 className={styles.galleryItemName}>{item.name}</h5>
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
          {!rowData?._id ? (
            <>
              <div className={styles.formInput}>
                <Input
                  label="Название"
                  type="text"
                  value={String(rowData?.name)}
                  onChange={(e) => {
                    handleChangeState("name", e.target.value);
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
            </>
          ) : (
            <div className={styles.galleryModalImgWrapper}>
              <img src={`${BACKEND_URL}/${rowData.image}`} alt={rowData.name} />
            </div>
          )}
          <div className={styles.buttonGroup}>
            {rowData?._id ? (
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
            ) : (
              <button
                className={cn(styles.sendButton, {
                  [styles.disabled]: checkIsEmpty(),
                })}
                onClick={(e) => {
                  e.preventDefault();
                  handleSendData();
                }}
              >
                {"Добавить"}
              </button>
            )}
          </div>
        </form>
      </Modal>
    </AdminLayout>
  );
};
