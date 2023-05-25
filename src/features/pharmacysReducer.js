import { createReducer } from "@reduxjs/toolkit";


const initialState = {
    pharmacies: [
        {
            id: 0,
            img: 'https://lh3.googleusercontent.com/p/AF1QipNAzm9J0sKgFF8r36jW6Ktr1PW8a7cxiRY2Np5t=s1360-w1360-h1020',
            name: 'Аптека GrozFarm',
            location: 'ул. Г Н Трошева, 56, Ахматовский район, Грозный',
        },
        {
            id: 1,
            img: 'https://avatars.mds.yandex.net/get-altay/5098556/2a00000182104c3806340d3930e466097a14/XXXL',
            name: 'Аптека "Здоровье"',
            location: 'Путина, 17А, Байсангуровский район, Грозный',
        },
        {
            id: 2,
            img: 'https://avatars.mds.yandex.net/get-altay/1938323/2a000001794b0ebf5d95b2d36d5518d8a72b/XXL_height',
            name: '7 Аптека',
            location: 'ул. Г Н Трошева, 8, Ахматовский район, Грозный',
        },
        {
            id: 3,
            img: 'https://avatars.mds.yandex.net/get-altay/3932123/2a00000175fa7337cc75477252af78997b12/XXL_height',
            name: 'Аптека Авиценна',
            location: 'Моздокская ул., 15, Байсангуровский район, Грозный'
        },
        {
            id: 4,
            img: 'https://avatars.mds.yandex.net/get-altay/1666174/2a0000016df2bd065f5cbb913d58bd396ad5/XXL_height',
            name: 'Московские аптеки',
            location: 'ул. Мира, 42, Ахматовский район, Грозный'
        },
        {
            id: 5,
            img: 'https://avatars.mds.yandex.net/get-altay/474904/2a000001865b723ad2877edf6be63860e8d3/XXL_height',
            name: 'Аптека Zara',
            location: 'ул. Жуковского, 16А, Висаитовский район, Грозный'
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
    ]
}

export const pharmacysReducer = createReducer(initialState, (builder) => {
    builder.addCase("", () => {

    })
});