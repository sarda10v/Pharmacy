import React, { useState } from 'react';
import styles from "./Search.module.css"
import { useSelector } from 'react-redux';
import CardPharmacy from '../CardPharmacy/CardPharmacy';
import { NavLink } from 'react-router-dom';

const Search = () => {
    const pharmacy = useSelector((state) => state.pharmacysReducer.pharmacies);
  const [search, setSearch] = useState('');

  const filtredSearchPharmacy = pharmacy.filter(item => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className={styles.pharmacies}>
      <div className={styles.title_pharmacies}>Каталог</div>
        <NavLink to="/" className={styles.hfree}>« Вернуться</NavLink>
      <div className={styles.wrap_content_pharmacies}>
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
              {filtredSearchPharmacy.length ? filtredSearchPharmacy.map((item) => {
                return (
                  <CardPharmacy
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    location={item.location}
                  />
                );
              }) : <h1>Clear</h1>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;