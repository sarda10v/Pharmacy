import React, { useState } from "react";
import styles from "./Pharmacies.module.css";
import CardPharmacy from "../CardPharmacy/CardPharmacy";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { categories } from "../../features/pharmacysReducer";

const Pharmacies = () => {
  const pharmacy = useSelector((state) => state.pharmacysReducer.pharmacies);
  const sidebar = useSelector((state) => state.pharmacysReducer.sidebar);
  const [activeIndex, setActiveIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(pharmacy);


  // const filteredByCategory = sidebar.

  const onClickCategory = (id) => {
  setFiltered(
    pharmacy.filter((item, index, arr) => {
        if (item.categoriesID === id) {
          return item
        } else if (id === 0) {
          return arr
        }
        return null
      })
  )

    setActiveIndex(id);
  }

  const filtredSearchPharmacy = filtered.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className={styles.pharmacies}>
      <div className={styles.title_pharmacies}>Аптеки г. Грозный</div>
      <div className={styles.wrap_content_pharmacies}>
        <div>
          <div className={styles.title_category_pharmacies}>
            Фильтры по районам
          </div>
          <div className={styles.sideBar_pharmacies}>
            {sidebar.map((item) => {
              return (
                <NavLink
                  onClick={() => onClickCategory(item.id)}
                  className={`${
                    activeIndex === item.id ? styles.active : styles.ul_sidebare
                  }`}
                  key={item.id}
                >
                  {item.title}
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className={styles.content_pharmacies}>
          <div className={styles.search_pharmacies}>
            <div className={styles.search_box}>
              <form>
                <input
                  className={styles.search_txt}
                  type="text"
                  name=""
                  placeholder="название аптеки"
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
              {filtredSearchPharmacy.length ? (
                filtredSearchPharmacy.map((item) => {
                  return (
                    <CardPharmacy
                      key={item.id}
                      img={item.img}
                      name={item.name}
                      location={item.location}
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

export default Pharmacies;
