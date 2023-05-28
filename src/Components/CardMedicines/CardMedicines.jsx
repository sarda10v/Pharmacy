import React from "react";
import styles from "./CardMedicines.module.css";

const CardMedicines = ({ img, name }) => {
  return (
    <div className={styles.cardMedicines}>
      <div className={styles.wrap_img_cardMedicines}>
        <img src={img} alt="medicines" />
      </div>
      <div className={styles.wrapper_content}>
        <div className={styles.name_medicines}>{name}</div>
        <div className={styles.wrapper_button}>
          <button>Подробнее »</button>
        </div>
      </div>
    </div>
  );
};

export default CardMedicines;
