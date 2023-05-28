import React, { useState } from "react";
import styles from "./Search.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CardMedicines from "../CardMedicines/CardMedicines";

const Search = () => {
  const medicines = useSelector((state) => state.pharmacysReducer.medicines);
  const [search, setSearch] = useState(localStorage.getItem("drugsName"));

  const filtredSearchPharmacy = medicines.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className={styles.pharmacies}>
      <div className={styles.title_pharmacies}>Каталог</div>
      <NavLink to="/" className={styles.hfree}>
        « Вернуться
      </NavLink>
      <div className={styles.wrap_content_pharmacies}>
        <div className={styles.content_pharmacies}>
          <div className={styles.search_pharmacies}>
            <div className={styles.search_box}>
              <form>
                <input
                  className={styles.search_txt}
                  type="text"
                  value={search}
                  name=""
                  placeholder="название лекарств"
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
                    <CardMedicines
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

export default Search;
