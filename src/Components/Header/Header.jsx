import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import React from "react";
import image from "../pngwing.com.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink to="/" className={styles.header_img}>
        <img src={image} alt="ph" className={styles.img} />
      </NavLink>
      <div className={styles.header_menu}>
        <div className={styles.pharmacy_title}>
          <Link to="/">
            <h2>Search for medicines</h2>
          </Link>
        </div>
        <div className={styles.list_conteiner}>
          <ul className={styles.list}>
            <li>
              <NavLink to="/pharmacy" className={styles.list_item}>
                Аптеки
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={styles.list_item}>
                Лекарства
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
    </div>
  );
};

export default Header;
