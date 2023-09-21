import React, { ChangeEvent, useState } from "react";
import cn from "classnames";
import styles from "./FileLoader.module.scss";
import { IFileLoader } from "interfaces";
import { BACKEND_URL } from "helpers";

export const FileLoader: React.FC<IFileLoader> = ({
  onImageUpload,
  defaultImage,
}) => {
  const [selectedImage, setSelectedImage] = useState<File | undefined>();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedImage(file);

      onImageUpload(file);
    }
  };

  return (
    <div className={styles.imageUploader}>
      {selectedImage || defaultImage ? (
        <>
          <div className={styles.previewImage}>
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage!)
                  : `${BACKEND_URL}/${defaultImage}`
              }
              alt="Selected"
              className={styles.previewImage}
            />
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
        className={cn(styles.fileInput, {
          [styles.isSelected]: !!selectedImage,
        })}
      />
      <div className={styles.selectedLabel}>Выбрать другое</div>
    </div>
  );
};
