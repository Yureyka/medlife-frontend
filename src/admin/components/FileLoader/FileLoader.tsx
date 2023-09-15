import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./FileLoader.module.scss";
import { IFileLoader } from "interfaces";
import { BACKEND_URL } from "helpers";

export const FileLoader: React.FC<IFileLoader> = ({
  onImageUpload,
  defaultImage,
  resetOnClose,
}) => {
  const [selectedImage, setSelectedImage] = useState<File | undefined>();
  const [defaultImg, setDefaultImg] = useState<string | undefined>();

  useEffect(() => {
    if (resetOnClose) {
      handleImageReset();
    }
  }, [resetOnClose]);

  useEffect(() => {
    !selectedImage && setDefaultImg(defaultImage);
  }, [defaultImage]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedImage(file);

      onImageUpload(file);
    }
  };

  const handleImageReset = () => {
    setSelectedImage(undefined);
    setDefaultImg(undefined);
  };

  console.log(selectedImage, defaultImg);

  return (
    <div className={styles.imageUploader}>
      {selectedImage || defaultImg ? (
        <>
          <div className={styles.previewImage}>
            <img
              src={
                defaultImg
                  ? `${BACKEND_URL}/${defaultImg}`
                  : URL.createObjectURL(selectedImage!)
              }
              alt="Selected"
              className={styles.previewImage}
            />
            <button
              type="button"
              onClick={handleImageReset}
              className={styles.resetButton}
            >
              Сбросить
            </button>
          </div>
        </>
      ) : (
        <label htmlFor="fileLoader" className={styles.placeholder}>
          <span>Выберите изображение</span>
        </label>
      )}
      <input
        id="fileLoader"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className={styles.fileInput}
      />
    </div>
  );
};
