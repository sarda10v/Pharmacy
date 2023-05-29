import React, { useState } from "react";
import styles from "./Medicines.module.css";
import CardMedicines from "../CardMedicines/CardMedicines";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Medicines = () => {
  const medicines = useSelector((state) => state.pharmacysReducer.medicines);
  const sidebarMedicines = useSelector(
    (state) => state.pharmacysReducer.sidebarMedicines
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [search, setSearch] = useState("");

  const onClickCategory = (id) => {
    setActiveIndex(id);
  };

  const filtredSearchMedicines = medicines.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className={styles.medicines}>
      <div className={styles.title_medicines}>Лекарственные препараты</div>
      <div className={styles.wrap_content_medicines}>
        <div>
          <div className={styles.title_category}>Фильтр по:</div>
          <div className={styles.sideBar_medicines}>
            <ul className={styles.menu}>
              <ul className={styles.menu_list}>
                <a>категориям</a>
                <ul className={styles.menu_drop}>
                  {sidebarMedicines.map((item) => {
                    return (
                      <li>
                        <NavLink
                          onClick={() => onClickCategory(item.id)}
                          className={styles.ul_sidebare}
                          key={item.id}
                        >
                          {item.title}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </ul>
              <ul className={styles.menu_list}>
                <a>типу препарата</a>
                <ul className={styles.menu_drop}>
                  <li><a>Рецептурные препараты</a></li>
                  <li><a>Безрецептурные препараты</a></li>
                </ul>
              </ul>
            </ul>
          </div>
        </div>
        <div className={styles.content_medicines}>
          <div className={styles.search_medicines}>
            <div className={styles.search_box}>
              <form>
                <input
                  className={styles.search_txt}
                  type="text"
                  name=""
                  placeholder="поиск лекарств"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className={styles.search_btn}>
                  <i className="fas fa-search"></i>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.wrap_card}>
            <div className={styles.content}>
              {filtredSearchMedicines.length ? (
                filtredSearchMedicines.map((item) => {
                  return (
                    <CardMedicines
                      key={item.id}
                      img={item.img}
                      name={item.name}
                    />
                  );
                })
              ) : (
                <h1>Clear</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicines;
