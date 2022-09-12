import React from 'react';
import styles from './index.module.css';
import axios from 'axios';

 var currentPrice;
export default function Component() {
    let json = {data:[{"id":1, "quote": {"USD": {price:"21490.00"}}}]};
    let response = null;
    let obj = "";
        

    const baseURL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=a7df6582-7a00-4861-a5dc-392c2ce54b79&start=1&limit=1'
    //  React.useEffect(() => {
    //     axios.get(baseURL).then((response:any) => {
    //     alert(response.data);
    //     }).catch((error:any) => {console.log(error)});
    // }, []);
    var xhttp = new XMLHttpRequest();

     xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
        obj = JSON.parse(xhttp.responseText);
       // alert(JSON.stringify(obj["quote"]["USD"]["price"]));
        console.log(JSON.stringify(obj["quote"]["USD"]["price"]));  
             }
};
xhttp.open("GET", "/api", true);
xhttp.send();

     // alert(JSON.stringify(json));
    
    return (
    <>
        <div className={styles.horicenter}>
            <div className = {styles.infobar}>
                    <div className = {styles.details}>
                        <img alt = 'btc' className = {styles.logo} src = {process.env.PUBLIC_URL + "/images/ticker/bitcoin.png  "}  />
                        <p className = {styles.name}>BTC</p>
                    </div>  

                    <div className = {styles.price}>
                        <p className = {styles.amount}>$19,186.10</p>
                    </div> 
            </div>
            </div>  


    </>
        )

}