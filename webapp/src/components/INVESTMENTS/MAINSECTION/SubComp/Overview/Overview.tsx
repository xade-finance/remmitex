import React from "react";
import { AdvancedRealTimeChart, ColorTheme } from "react-ts-tradingview-widgets";

import styles from './Overview.module.css'





export default function Overview() {

    return (
        <>

        <div  className={styles.setChart}>
        <div  className={styles.Chart}>
        <AdvancedRealTimeChart

            symbol="BTC1!"
            theme={'dark'}
            // eslint-disable-next-line 
            style = "3"
            // locale="fr"
            autosize
            height = '200px'

         />
        </div>

        <div className={styles.center}>
            <div className={styles.aboutCoin}></div>
        </div>
        </div>
        </>
    )
}