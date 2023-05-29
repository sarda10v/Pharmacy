import React from "react";
import styles from "./CardPharmacy.module.css";
import { NavLink } from "react-router-dom";

const CardPharmacy = ({ img, name, street, location }) => {
  return (
    <div className={styles.flexDiv}>
      <div className={styles.cinemaWrapperShadow}>
        <div
          className={styles.cinemaWrapperPosition}
          style={{ background: `url(${img})` }}
        >
          <div className={styles.cinemaWrapperInformation}>
            <div>
              <div className={styles.cinemaWrapperTitle}>{name}</div>
            </div>
            <div className={styles.cinemaWrapperAdress}>{street}, {location}</div>
            <NavLink to="/moreAboutPharmacies">
            <button>Подробнее</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPharmacy;
