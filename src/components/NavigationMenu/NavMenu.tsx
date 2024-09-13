import type { FC } from "react";
import styles from "./NavMenu.module.css";
import { Link } from "@/components/Link/Link.tsx";
import { useLocation } from "react-router-dom";

export const NavMenu: FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={styles.navMenu}>
      <Link
        to='/'
        className={`${styles.navItem} ${
          currentPath === "/" ? styles.active : ""
        }`}
      >
        🗣
      </Link>
      <Link
        to='/weather'
        className={`${styles.navItem} ${
          currentPath === "/weather" ? styles.active : ""
        }`}
      >
        ☀️
      </Link>
      <Link
        to='/photo'
        className={`${styles.navItem} ${
          currentPath === "/photo" ? styles.active : ""
        }`}
      >
        🐈
      </Link>
    </div>
  );
};

export default NavMenu;
