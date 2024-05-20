import React, { useState, useEffect, useRef, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./MenuItem.module.css";

interface MenuItemProps {
  title: string;
  hasSubmenu?: boolean;
  children?: ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  hasSubmenu = false,
  children,
}) => {
  /* Optimize user's mouse movement trajectory */
  const [showSubmenu, setShowSubmenu] = useState(false);
  // const submenuRef = useRef<HTMLDivElement>(null);
  const submenuTimer = useRef<number | null>(null);

  const handleMouseEnter = () => {
    setShowSubmenu(false); // Hide submenu initially
    if (submenuTimer.current !== null) {
      clearTimeout(submenuTimer.current); // Clear any existing timeout
    }
    submenuTimer.current = window.setTimeout(() => {
      setShowSubmenu(true); // Show submenu after delay
    }, 300);
  };

  const handleMouseLeave = () => {
    if (submenuTimer.current !== null) {
      clearTimeout(submenuTimer.current); // Clear any existing timeout
    }
    setShowSubmenu(false); // Hide submenu
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setShowSubmenu((prev) => !prev);
    } else if (e.key === "Escape") {
      setShowSubmenu(false);
    }
  };

  useEffect(() => {
    return () => {
      if (submenuTimer.current !== null) {
        clearTimeout(submenuTimer.current);
      }
    };
  }, []);

  return (
    <div
      className={styles.menuitem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={styles.menuButton} onKeyDown={handleKeyDown}>
        {title}
        {hasSubmenu && (
          <FontAwesomeIcon icon={faChevronDown} className={styles.cusIcon} />
        )}
      </button>

      {hasSubmenu && showSubmenu && (
        <div className={styles.submenu}>{children}</div>
      )}
    </div>
  );
};

export default MenuItem;
