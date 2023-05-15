import React from 'react';
import styles from './Home.module.css'
import image from '../Pharmacy.jpg'

const Home = () => {
    return (
        <div className={styles.home_page}>
            <img src={image} alt='ph' className={styles.img}/>
        </div>
    );
};

export default Home;