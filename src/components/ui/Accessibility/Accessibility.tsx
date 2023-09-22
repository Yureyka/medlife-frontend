import React, { useState } from "react";
import cn from "classnames";
import styles from "./Accessibility.module.scss";
import { Cross, Eye } from "icons";
import { Button } from "ui";

interface AccessibilityOptionsProps {
  //   onToggleFlash: () => void;
  //   onToggleHeaderHighlight: () => void;
  //   onZoomIn: () => void;
  //   onZoomOut: () => void;
  //   onIncreaseFont: () => void;
  //   onDecreaseFont: () => void;
  //   onToggleHighContrast: () => void;
  //   onToggleDarkMode: () => void;
  //   onUnderlineLinks: () => void;
  //   onHighlightLinks: () => void;
}

export const Accessibility: React.FC<AccessibilityOptionsProps> = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [headerHighlightEnabled, setHeaderHighlightEnabled] = useState(false);
  const [isZoomIn, setIsZoomIn] = useState(false);
  const [isZoomOut, setIsZoomOut] = useState(false);
  const [isIncreasedText, setIsIncreasedText] = useState(false);
  const [isDecreasedText, setIsDecreasedText] = useState(false);
  const [isUnderlinedLinks, setIsUnderlinedLinks] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isGray, setIsGray] = useState(false);
  const body = document.body;

  const handleHeadingsUnderline = () => {
    !headerHighlightEnabled
      ? body.classList.add("headingsUnderline")
      : body.classList.remove("headingsUnderline");
    setHeaderHighlightEnabled((prev) => !prev);
  };

  const handleLinksUnderline = () => {
    !isUnderlinedLinks
      ? body.classList.add("linksUnderline")
      : body.classList.remove("linksUnderline");
    setIsUnderlinedLinks((prev) => !prev);
  };

  const handleZoomIn = () => {
    !isZoomIn ? (body.style.zoom = "120%") : (body.style.zoom = "");
    setIsZoomIn((prev) => !prev);
  };

  const handleZoomOut = () => {
    !isZoomOut ? (body.style.zoom = "80%") : (body.style.zoom = "");
    setIsZoomOut((prev) => !prev);
  };

  const handleIncreaseText = () => {
    !isIncreasedText
      ? (body.style.fontSize = "26px")
      : (body.style.fontSize = "");
    setIsIncreasedText((prev) => !prev);
  };

  const handleDecreaseText = () => {
    !isDecreasedText
      ? (body.style.fontSize = "14px")
      : (body.style.fontSize = "");
    setIsDecreasedText((prev) => !prev);
  };

  const handleHighContrast = () => {
    !isHighContrast
      ? body.classList.add("lightContrast")
      : body.classList.remove("lightContrast");
    setIsHighContrast((prev) => !prev);
  };

  const handleGrayMode = () => {
    !isGray ? (body.style.filter = "grayscale(1)") : (body.style.filter = "");
    setIsGray((prev) => !prev);
  };

  return (
    <>
      <Button
        onlyIcon
        icon={<Eye />}
        aria-label="Открыть меню функционала доступности"
        className={styles.accessibilityButton}
        onClick={() => {
          setIsOpened(true);
        }}
      />
      <div
        className={cn(styles.accessibilityOptions, {
          [styles.isOpened]: isOpened,
        })}
      >
        <div
          className={styles.closeButton}
          onClick={() => {
            setIsOpened(false);
          }}
        >
          <Cross />
        </div>
        <h3>Настройки доступности</h3>
        <ul>
          <li>
            <button
              className={cn(styles.button, {
                [styles.pressed]: isIncreasedText,
              })}
              onClick={handleIncreaseText}
            >
              Увеличить шрифт
            </button>
            <button
              className={cn(styles.button, {
                [styles.pressed]: isDecreasedText,
              })}
              onClick={handleDecreaseText}
            >
              Уменьшить шрифт
            </button>
          </li>
          <li>
            <button
              className={cn(styles.button, {
                [styles.pressed]: isZoomIn,
              })}
              onClick={handleZoomIn}
            >
              Приблизить
            </button>
            <button
              className={cn(styles.button, {
                [styles.pressed]: isZoomOut,
              })}
              onClick={handleZoomOut}
            >
              Отдалить
            </button>
          </li>
          <li>
            <label
              htmlFor="higlightHeadings"
              className={cn(styles.label, {
                [styles.pressed]: headerHighlightEnabled,
              })}
            >
              <input
                id="higlightHeadings"
                type="checkbox"
                checked={headerHighlightEnabled}
                onChange={handleHeadingsUnderline}
              />
              Подчеркнуть заголовки
            </label>
          </li>
          <li>
            <label
              htmlFor="underlineLinks"
              className={cn(styles.label, {
                [styles.pressed]: isUnderlinedLinks,
              })}
            >
              <input
                id="underlineLinks"
                type="checkbox"
                checked={isUnderlinedLinks}
                onChange={handleLinksUnderline}
              />
              Подчеркнуть ссылки
            </label>
          </li>
          <li>
            <label
              htmlFor="highContrast"
              className={cn(styles.label, {
                [styles.pressed]: isHighContrast,
              })}
            >
              <input
                id="highContrast"
                type="checkbox"
                checked={isHighContrast}
                onChange={handleHighContrast}
              />
              Яркий контраст
            </label>
          </li>
          <li>
            <label
              htmlFor="darkContrast"
              className={cn(styles.label, {
                [styles.pressed]: isGray,
              })}
            >
              <input
                id="darkContrast"
                type="checkbox"
                checked={isGray}
                onChange={handleGrayMode}
              />
              Отключить цвет
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};
