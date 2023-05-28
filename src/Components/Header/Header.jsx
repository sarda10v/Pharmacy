import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import image from "../pngwing.com.png";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);


  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className={styles.header}>
      <NavLink to="/" className={styles.header_img}>
        <img src={image} alt="ph" className={styles.img} />
      </NavLink>
      <div className={styles.header_menu}>
        <div className={styles.pharmacy_title}>
          <Link to="/" onClick={() => onClickCategory(0)}>
            <h2>Search for medicines</h2>
          </Link>
        </div>
        <div className={styles.list_conteiner}>
          <ul className={styles.list}>
            <li>
              <NavLink to="/pharmacy" onClick={() => onClickCategory(1)}
                className={`${activeIndex === 1 ? styles.active : styles.list_item}`}
              >
                Аптеки
              </NavLink>
            </li>
            <li>
              <NavLink to="/medicines" onClick={() => onClickCategory(2)}
                className={`${activeIndex === 2 ? styles.active : styles.list_item}`}
              >
                Лекарства
              </NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={() => onClickCategory(3)}
                className={`${activeIndex === 3 ? styles.active : styles.list_item}`}
              >
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
