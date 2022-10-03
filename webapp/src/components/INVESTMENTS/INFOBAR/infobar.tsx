import { React, useState } from 'react';
import styles from './index.module.css';
import axios from 'axios';

 var currentPrice;
export default function Component() {
    let json = {data:[{"id":1, "quote": {"USD": {price:"21490.00"}}}]};
    let response = null;
    let obj = "";
const [price,setPrice] = useState("")
var xhr2 = new XMLHttpRequest();
  xhr2.onreadystatechange=function(){
 if(xhr2.readyState==XMLHttpRequest.DONE){
 setPrice(xhr2.responseText)
}
}

  xhr2.open('GET', "https://price.api.xade.finance/btc")
  xhr2.send()
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
                        <p className = {styles.amount}>${price}</p>
                    </div> 
            </div>
            </div>  


    </>
        )

}
