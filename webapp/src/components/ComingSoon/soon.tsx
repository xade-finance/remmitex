import React from 'react'
import styles from './index.module.css'
import transakSDK from '@transak/transak-sdk'
// function launchTransak() {

//       };

export default function Component() 
{
    // return (
    //     // <div className = {styles.center}>
    //     //     <div className = {styles.container}>
    //     //         <div className = {styles.element} >Coming soon...<br /><br /> Stay tuned for updates</div> 
    //     //         <div className = {styles.element}><img style = {{"width": "90%"}}src = {process.env.PUBLIC_URL + `/images/XADE_COMING_SOON.png`}   /></div> 
    //     //     </div>

    //     // </div>
    //     <launchTransak />




    // )
            let transak = new transakSDK({
          apiKey: "71d9cc91-826d-41b6-b6ba-7d8962a9c3e0", // Your API Key
          environment: "STAGING", // STAGING/PRODUCTION
          hostURL: window.location.origin,
          widgetHeight: "625px",
          widgetWidth: "500px",
          defaultCryptoCurrency: "CUSD", // Example 'ETH'
          walletAddress: "", // Your customer's wallet address
          themeColor: "000", // App theme color
          redirectURL: "https://app.xade.finance",
          exchangeScreenTitle:
            "Xade Uses Transak As Its Fiat Ramp For Payments, Investing and Savings", // Exchange screen title
        });
        transak.init();
        // To get all the events
        transak.on(transak.ALL_EVENTS, (data) => {
          console.log(data);
        });
        // This will trigger when the user marks payment is made.
        transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
          console.log(orderData);
          //transak.close();
        });
      }
      window.onload = function () {
        launchTransak();
}
