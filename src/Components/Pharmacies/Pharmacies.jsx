import React from 'react';
import styles from './Pharmacies.module.css'

const Pharmacies = () => {
    return (
        <div className={styles.pharmacies}>
            <div className={styles.title_pharmacies}>
                Каталог
            </div>
            <div className={styles.wrap_content_pharmacies}>
                <div className={styles.sideBar_pharmacies}></div>
                <div className={styles.content_pharmacies}>
                    <div className={styles.search_pharmacies}></div>
                    <div className={styles.wrap_card}></div>
                </div>
            </div>
        </div>
    );
};

export default Pharmacies;