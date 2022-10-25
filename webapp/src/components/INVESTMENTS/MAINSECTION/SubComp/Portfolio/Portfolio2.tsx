import React from 'react'
import styles from './Portfolio.module.css'

export default function Portfolio()
{
    let [amt, setAmt] = React.useState({i: 0.0, c:0.0});
    return (
        <>
        <br /> 
        <div className = {styles.green}></div>
        <div className = {styles.head + " " +  styles.g}>Holdings</div>
        <div className={styles.center}>
            <div className = {styles.container}>
                <div className = {styles.element}>
                        <p className = {styles.p}>Invested</p>
                        <p className = {styles.p}>${(amt.i).toFixed(2)}</p>
                </div>
                 <div className = {styles.element}>
                        <p className = {styles.p}>Current</p>
                        <p className = {styles.p}>${(amt.c).toFixed(2)}</p>
                </div>
                <div className = {styles.element}>
                        <p className = {styles.p}>Returns</p>
                        <p className = {styles.p}>${(amt.c - amt.i).toFixed(2)}</p>
                </div>
               
            </div>
        </div>

        <div className = {styles.center}>
            <p>Your holdings will appear here</p>
        </div>
        
        <br /> <br />
        <hr style = {{
            "border": "1px solid #222",
            "margin": "1rem",
            "borderRadius": "1rem"
        }}></hr>
        <br /> <br />
        <div className = {styles.red}></div>
        <div className = {styles.head + " " +  styles.r}>Activity</div>
        <div className = {styles.center}>
            <p>Your activities will appear here</p>
        </div>
                
        <br /> <br /> <br /> <br />
        </>
    );
}