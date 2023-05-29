import React, { useState } from "react";
import styles from "./MoreAboutPharmacies.module.css";
import { useSelector } from "react-redux";
import CardMedicines from "../CardMedicines/CardMedicines";

const MoreAboutPharmacies = () => {
  const [content, setContent] = useState(false);
  const medicines = useSelector((state) => state.pharmacysReducer.medicines);
  console.log(medicines, "med");
  const handelChangeContact = () => {
    setContent(true);
  };

  const handelChangePharmacies = () => {
    setContent(false);
  };

  return (
    <div className={styles.moreAboutPharmacies}>
      <h1>Мосаптека</h1>
      
      {/* КНОПКИ */}
      <div className={styles.content_wrapper_click}>
        <button
          onClick={handelChangeContact}
          className={styles.point_on_change}
        >
          Контакты
        </button>
        <button
          onClick={handelChangePharmacies}
          className={styles.point_on_change}
        >
          Лекарства
        </button>
      </div>

      {content ? (
        <div className={styles.content_inform_wrapper}>
          <div className={styles.inform_wrapper}>
            <div>
              <h4 className={styles.h4_margin_top}>
                <ion-icon name="location-outline"></ion-icon> Адресс
              </h4>
              <span>ул. Г Н Трошева, 56, Ахматовский район, Грозный</span>
            </div>
            <div>
              <h4 className={styles.h4_margin_top}>
                <ion-icon name="call-outline"></ion-icon> Контакты
              </h4>
              <span>+7(800)505-35-35</span>
              <br />
              <span>+7(800)505-35-35</span>
            </div>
            <div>
              <h4 className={styles.h4_margin_top}>
                <ion-icon name="alarm-outline"></ion-icon> График работы
              </h4>
              <span>- понедельник: 08:00–20:00 </span>
              <br />
              <span>- вторник: 08:00–20:00</span>
              <br />
              <span>- среда: 08:00–20:00</span>
              <br />
              <span>- четверг: 08:00–20:00</span>
              <br />
              <span>- пятница: 08:00–20:00</span>
              <br />
              <span>- суббота: 08:00–20:00</span>
              <br />
              <span>- воскресенье: 08:00–20:00</span>
            </div>
            <div>
              <h4 className={styles.h4_margin_top}>
                <ion-icon name="globe-outline"></ion-icon> Сайт
              </h4>
              <a href="https://mosapteki.ru/">https://mosapteki.ru</a>
            </div>
          </div>
          <div className={styles.map_wrapper}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A9e5d1b69e0393d7064c3290c7b24f0b9340354582274aa0e354538d5197d0720&amp;source=constructor"
              title="map"
              width="730"
              height="530"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      ) : (
        <div className={styles.renderCardsMedicine}>
          {medicines.map((item) => {
            return (
              <CardMedicines
                key={item.id}
                img={item.img}
                name={item.name}
                location={item.location}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MoreAboutPharmacies;
