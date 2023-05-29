import { createAction, createReducer } from "@reduxjs/toolkit";


const initialState = {
    pharmacies: [
        {
            id: 0,
            img: 'https://lh3.googleusercontent.com/p/AF1QipNAzm9J0sKgFF8r36jW6Ktr1PW8a7cxiRY2Np5t=s1360-w1360-h1020',
            name: 'Аптека GrozFarm',
            location: 'ул. Г Н Трошева, 56, Ахматовский район, Грозный',
            categoriesID: 1
        },
        {
            id: 1,
            img: 'https://avatars.mds.yandex.net/get-altay/5098556/2a00000182104c3806340d3930e466097a14/XXXL',
            name: 'Аптека "Здоровье"',
            location: 'Путина, 17А, Байсангуровский район, Грозный',
            categoriesID: 2
        },
        {
            id: 2,
            img: 'https://avatars.mds.yandex.net/get-altay/1938323/2a000001794b0ebf5d95b2d36d5518d8a72b/XXL_height',
            name: '7 Аптека',
            location: 'ул. Г Н Трошева, 8, Ахматовский район, Грозный',
            categoriesID: 1
        },
        {
            id: 3,
            img: 'https://avatars.mds.yandex.net/get-altay/3932123/2a00000175fa7337cc75477252af78997b12/XXL_height',
            name: 'Аптека Авиценна',
            location: 'Моздокская ул., 15, Байсангуровский район, Грозный',
            categoriesID: 2
        },
        {
            id: 4,
            img: 'https://avatars.mds.yandex.net/get-altay/1666174/2a0000016df2bd065f5cbb913d58bd396ad5/XXL_height',
            name: 'Московские аптеки',
            location: 'улица Мира, 42, Ахматовский район, Грозный',
            categoriesID: 1
        },
        {
            id: 5,
            img: 'https://avatars.mds.yandex.net/get-altay/474904/2a000001865b723ad2877edf6be63860e8d3/XXL_height',
            name: 'Аптека Zara',
            location: 'ул. Жуковского, 16А, Висаитовский район, Грозный',
            categoriesID: 3
        },
    ],
    sidebar: [
        {
            id: 0,
            title: "Все"
        },
        {
            id: 1,
            title: "Ахматовский"
        },
        {
            id: 2,
            title: "Байсангуровский"
        },
        {
            id: 3,
            title: "Висаитовский"
        },
        {
            id: 4,
            title: "Шейх-Мансуровский"
        },
    ],
    medicines: [
        {
            id: 0,
            img: "https://cdn.eapteka.ru/upload/offer_photo/105/234/1_97040e36acdf6a8fe66ceb2030ba296d.png?t=1646914516&_cvc=1685092389",
            name: "Амоксициллин, капсулы 500 мг 16 шт",
            
        },
        {
            id: 1,
            img: "https://cdn.eapteka.ru/upload/offer_photo/206/896/1_c5d303342885b5d1b356ed661c340210.png?t=1682687043&_cvc=1685092389",
            name: "Дексалгин 25, таблетки покрыт.плен.об. 25 мг 10 шт" 
        },
        {
            id: 2,
            img: "https://cdn.eapteka.ru/upload/offer_photo/216/234/1_4ea16a1b569e00fb253d41658906d0cd.png?t=1667384727&_cvc=1685092389",
            name: "Пенталгин, таблетки покрыт.плен.об. 24 шт"
        },
        {
            id: 3,
            img: "https://cdn.eapteka.ru/upload/offer_photo/246/247/1_467b891ba4512c0a7c43b4d36025f5f1.jpeg?t=1638453252&_cvc=1685092389",
            name: "Апилак Гриндекс, таблетки 10 мг 50 шт" 
        },
        {
            id: 4,
            img: "https://cdn.eapteka.ru/upload/offer_photo/666/96/1_9f0a6273bb42d94daf841d6299fe53b3.png?t=1634199130&_cvc=1685092389",
            name: "Ротокан, раствор для местного применения 25 мл 1 шт"
        },
        {
            id: 5,
            img: "https://cdn.eapteka.ru/upload/offer_photo/125/921/1.jpeg?t=1557155497&_cvc=1685092389",
            name: "Шалфея листья, пачка 50 г 1 шт"
        },
        {
            id: 6,
            img: "https://cdn.eapteka.ru/upload/offer_photo/502/761/1_874a60c5f82f3252e00d76cc3d086b5c.png?t=1680618686&_cvc=1685092389",
            name: "Респеро Миртол форте, капсулы кишечнорастворимые 300 мг 20 шт" 
        },
        {
            id: 7,
            img: "https://cdn.eapteka.ru/upload/offer_photo/515/386/1_2cd3de182cb884f83040a17df6e201d3.png?t=1679305288&_cvc=1685092389",
            name: "Ринонорм, спрей назальный дозированный 140 мкг/доза 20 мл 1 шт" 
        },
        {
            id: 8,
            img: "https://cdn.eapteka.ru/upload/offer_photo/274/004/1_15eb50ea1c68fe4c7eee8159f74b9732.png?t=1637838593&_cvc=1685092389",
            name: "Мигрениум, таблетки покрыт.плен.об. 65 мг+500 мг 20 шт"
        },
        {
            id: 9,
            img: "https://cdn.eapteka.ru/upload/offer_photo/203/682/1_6ef1eeee8e0e30237fdebd4ac35031ed.png?t=1657697303&_cvc=1685092389",
            name: "Милдронат, капсулы 500 мг 60 шт"
        },
    ],
    sidebarMedicines: [
        {
            id: 0,
            title: "Антибиотики"
        },
        {
            id: 1,
            title: "Противовирусные препараты "
        },
        {
            id: 2,
            title: "Противогрибковые средства "
        },
        {
            id: 3,
            title: "Противоаллергические препараты "
        },
        {
            id: 4,
            title: "Антигипертензивные средства "
        },
        {
            id: 5,
            title: "Противовоспалительные препараты "
        },
        {
            id: 6,
            title: "Анальгетики "
        },
        {
            id: 7,
            title: "Препараты для желудочно-кишечного тракта "
        },
        {
            id: 8,
            title: "Препараты для сердечно-сосудистой системы "
        },
        {
            id: 9,
            title: "Препараты для нервной системы "
        },
        {
            id: 10,
            title: "Витамины и пищевые добавки "
        },
        {
            id: 11,
            title: "Другие категории  "
        },
    ]
}


export const categories = createAction("categories")

export const pharmacysReducer = createReducer(initialState, (builder) => {
    builder.addCase(categories, (state) => {
        // state.pharmacies = state.pharmacies.filter((item) => {
        //     if (state.sidebar.id === item.categoriesID) {
                
        //         console.log(state.sidebar.id)
        //         console.log(item.categoriesID)
        //     } 
        // })
    })
});