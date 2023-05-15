import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.pharmacy_title}>
        <Link to="/">
            <h2>Поисковик лекарственных препаратов</h2>
        </Link>
      </div>
      <div className={styles.list_conteiner}>
        <ul className={styles.list}>
          <li>
            <NavLink to="/" className={styles.list_item}>
              Аптеки
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={styles.list_item}>
              Таблетки
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={styles.list_item}>
              О нас
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
