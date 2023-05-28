import React, { useState } from "react";
import styles from "./Home.module.css";
import image from "../png.com.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [value, setValue] = useState("");

  const handleLink = (e) => {
    setValue((prev) => e.target.value);
  };
  localStorage.setItem("drugsName", value);

  return (
    <div className={styles.home_page}>
      <div className={styles.text_column}>
        <div className={styles.text_home}>
          <div className={styles.text_home_title}>
            ИНФОРМАЦИОННО-СПРАВОЧНАЯ СИСТЕМА
          </div>
          <div className={styles.text_home_description}>
            для поиска лекарственных препаратов в аптеках г.Грозный
          </div>
        </div>
        <div className={styles.search_home}>
          <div className={styles.search_box}>
            <form>
              <input
                className={styles.search_txt}
                value={value}
                type="text"
                name=""
                onChange={(e) => handleLink(e)}
                placeholder="название лекарственного препарата"
              />
              <Link className={styles.search_btn} to="/search">
                <i className="fas fa-search"></i>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.home_page_img}>
        <img src={image} alt="ph" className={styles.img} />
      </div>
    </div>
  );
};

export default Home;
