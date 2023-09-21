import React, { useState } from "react";
import cn from "classnames";
import styles from "./Accessibility.module.scss";
import { Cross, Eye } from "icons";

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

export const Accessibility: React.FC<AccessibilityOptionsProps> = ({
  onToggleHeaderHighlight,
  onZoomIn,
  onZoomOut,
  onIncreaseFont,
  onDecreaseFont,
  onToggleHighContrast,
  onToggleDarkMode,
  onUnderlineLinks,
  onHighlightLinks,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [headerHighlightEnabled, setHeaderHighlightEnabled] = useState(false);
  const [isZoomIn, setIsZoomIn] = useState(false);
  const [isZoomOut, setIsZoomOut] = useState(false);
  const [isIncreasedText, setIsIncreasedText] = useState(false);
  const [isDecreasedText, setIsDecreasedText] = useState(false);
  const [highContrastEnabled, setHighContrastEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [isUnderlinedLinks, setIsUnderlinedLinks] = useState(false);
  const [isHighlightedLinks, setIsHighlightedLinks] = useState(false);
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

  const handleLinksHighlight = () => {
    !isHighlightedLinks
      ? body.classList.add("linksHighlight")
      : body.classList.remove("linksHighlight");
    setIsHighlightedLinks((prev) => !prev);
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

  const handleHighContrast = () => {};

  return (
    <>
      <button
        aria-label="Открыть меню функционала доступности"
        className={styles.accessibilityButton}
        onClick={() => {
          setIsOpened(true);
        }}
      >
        <Eye />
      </button>
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
            <label htmlFor="higlightHeadings">
              <input
                id="higlightHeadings"
                type="checkbox"
                checked={headerHighlightEnabled}
                onChange={handleHeadingsUnderline}
              />
              Выделить заголовки
            </label>
          </li>
          <li>
            <button onClick={handleZoomIn}>Увеличить</button>
            <button onClick={handleZoomOut}>Уменьшить</button>
          </li>
          <li>
            <button onClick={handleIncreaseText}>Увеличить шрифт</button>
            <button onClick={handleDecreaseText}>Уменьшить шрифт</button>
          </li>
          <li>
            <label htmlFor="highContrast">
              <input
                id="highContrast"
                type="checkbox"
                checked={highContrastEnabled}
                onChange={() => {
                  setHighContrastEnabled(!highContrastEnabled);
                  onToggleHighContrast();
                }}
              />
              Яркий контраст
            </label>
          </li>
          <li>
            <label htmlFor="darkContrast">
              <input
                id="darkContrast"
                type="checkbox"
                checked={darkModeEnabled}
                onChange={() => {
                  setDarkModeEnabled(!darkModeEnabled);
                  onToggleDarkMode();
                }}
              />
              Темный контраст
            </label>
          </li>
          <li>
            <label htmlFor="underlineLinks">
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
            <label htmlFor="highlightLinks">
              <input
                id="highlightLinks"
                type="checkbox"
                checked={isHighlightedLinks}
                onChange={handleLinksHighlight}
              />
              Выделить ссылки
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};
