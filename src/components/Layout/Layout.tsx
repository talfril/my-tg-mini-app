import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import NavMenu from "../NavigationMenu/NavMenu";

export const Layout = () => {
  return (
    <main className={styles.page}>
      <Outlet />
      <NavMenu />
    </main>
  );
};

export default Layout;
