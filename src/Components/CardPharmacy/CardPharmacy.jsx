import React from "react";
import styles from "./CardPharmacy.module.css";

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
            <button>Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPharmacy;
