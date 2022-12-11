import React from 'react'
import styles from './Main.module.css'
import { style } from '@mui/system'
import Slider from '@mui/material/Slider';


export default function Main() {
    return (
        <>
        <div>
            <div className={styles.heading}>Your Savings</div>

            <div className = {styles.boxWrap}>
                <div className = {styles.firstWrap}>
                <div className = {styles.boxA}>
                    <div className  = {styles.topSection}>
                        Total amount deposited
                    </div>

                    <div className = {styles.amountDep}>
                        $1000.0
                    </div>

                    <button style = {{'color': '#5566FF'}}className = {styles.rightBottom}>
                        Coming soon
                    </button>
                </div>
                <div className = {styles.boxB}>
                    <div className  = {styles.topSection}>
                        Total Interest earned
                    </div>

                    <div className = {styles.amountInterest}>
                        $100.0
                    </div>

                    {/* <button style = {{'color': '#E24949'}} className = {styles.rightBottom}>
                        Coming soon
                    </button> */}
                </div>
                </div>
                <div className = {styles.boxC}>
                    <div className  = {styles.topSection}>
                        Annual Percentage Yield
                    </div>

                    <div className = {styles.yieldAmount}>
                        <p className = {styles.first}>9.1%</p>
                        <p className = {styles.second}>November 30th 2022</p>
                    </div>  

                    <div className = {styles.savingsRate}>
                    <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}