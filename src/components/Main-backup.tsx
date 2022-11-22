//import L2oginBox from './Login/Login';
//import "./countdown.css";
import count from './CountDown.module.css'
import countries from './allCountries';
import { Country, PhoneNumber } from './allCountries';
import "./NewLogin.css";
import Popup from 'reactjs-popup';
import OnramperWidget from "@onramper/widget";
import 'reactjs-popup/dist/index.css';
import Web3 from "web3";
import { FaCopy, FaExternalLinkAlt } from 'react-icons/fa'
import { getNormalTransactionsByAddress } from "../services/celoScan";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import React from 'react'
import styles from "../styles/Home.module.css";
import Loader from "./Loader";
import styles2 from './Payments.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'reactjs-popup/dist/index.css';
import { FormEvent, useEffect, useState } from "react";
import Investments from './INVESTMENTS'
//import ComingSoon from './ComingSoon'
import styles3 from './send.module.css'
import { WALLET_ADAPTERS } from "@web3auth/base";
import { useWeb3Auth } from "../services/web3auth";
import Saving from '../Savings'
import tickStyles from './tickStyles.module.css'
import RegisterBox from './register'
import "./QrPage.css";
import { ImCross } from "react-icons/im";
import { FiShare } from "react-icons/fi";
import { Link, useParams } from 'react-router-dom'
// import { Avatar } from 'web3uikit'
import QRCode from "react-qr-code";
import "./qrscan.css";
import { Html5QrcodeScanner } from "html5-qrcode";
import CarouselCard1 from './CarouselCard/CarouselCard1';
import CarouselCard3 from './CarouselCard/CarouselCard3';
import CarouselCard4 from './CarouselCard/CarouselCard4'
import CarouselCard2 from './CarouselCard/CarouselCard2';
//import Popup from 'reactjs-popup'
import { Layout } from './Layout'
import './HomePage.css'
import { TbQrcode } from "react-icons/tb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Send from './Send.tsx'
import { alertTitleClasses } from '@mui/material';

var cc;
var num; 

window.alert = function() {};

type Props = {}

const settings = {
dots: true,
infinite: true,
  autoplay: true,
      autoplaySpeed: 2000,
speed: 500,
slidesToShow: 2,
slidesToScroll: 1,
initialSlide: 0,
arrows:false,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
infinite: true,
dots: true
}
},
{
breakpoint: 768,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
initialSlide: 1
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
};

const DepositWithdraw = () => {                          
                                                    
return (                                            
<div className="container">                         
<div                                                
      style={{                                      
        width: "460px",                             
        height: "660px",                            
      }}                                            
    >                                               
      <OnramperWidget                               
        API_KEY="pk_test_63xw5VXNG2SXKi4Xo49L3NpUGoNfTA95rhVkNn07x4Y0"                                  
        color="#000000"                             
        fontFamily="Arial"                          
        defaultCrypto="USDC"                        
        defaultFiat="USD"                           
        filters={{                                  
          onlyCryptos: ["USDC"],                    
onlyPaymentMethods: ["creditCard", "bankTransfer", "applePay", "googlePay", "paynow", "fps", "alipay-hk"
, "prompt-pay", "instapay", "upi", "gojek-id", "viettel-pay", "duit-now", "ideal", "bancontact", "giropay", "sofort", "sepaBankTransfer"]                  
}}                                                  
        darkMode={true}                             
        redirectURL="https://app.xade.finance/"     
      />                                            
    </div>                                          
</div>                                              
  );                                                
}


var secret= '';
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for ( var i = 0; i < 50; i++ ) {
secret += characters.charAt(Math.floor(Math.random() * charactersLength));
}

function storenum(c,n){
var phone = c.replace("+","")+""+n;
var data = `{"phone":"${phone}","id":"${secret}"}`;
var s = new XMLHttpRequest();
s.open("POST","https://mongo.api.xade.finance");
s.send(data);
}

const Main=() => {
const { provider, login, logout,loginWithWalletConnect, getUserInfo, getAccounts, readAddress,userData, getBalance,isLoading,signAndSendTransaction, userPic, } = useWeb3Auth();
const [transactionHistory, setTransactionHistory] = useState<any[]>([]);


const[username, setUsername] = useState("");

useEffect(() => {
const handleGetUser = async () => {
const user = await userData();
setUsername(user);
}
if (provider) {
handleGetUser();
}
}, [provider, username]);

const[img, setImg] = useState("");

useEffect(() => {
const handleGetImg = async () => {
const pic = await userPic();
setImg(pic);
}
if (provider) {
handleGetImg();
}
}, [provider, img]);

const [mainAccount, setMainAccount] = useState("");

const handleGetNormalTransactionByAddress = async () => {
let transactions = await getNormalTransactionsByAddress(mainAccount);
setTransactionHistory(transactions.result);
}

useEffect(() => {
const handleGetAccount = async () => {
const account = await provider?.readAddress();
setMainAccount(account);
}
if (provider) {
handleGetAccount();
}
}, [provider, mainAccount]);

const isReady = () => {
return (
mainAccount !== "" 
);
}

useEffect(() => {
if(isReady()) {
handleGetNormalTransactionByAddress();
}
}, [mainAccount]);


const handleLoginWithEmail=(e: FormEvent<HTMLFormElement>) => {
//     var error = document.getElementById("error");
// cc = document.getElementById("cc").value;
// num = document.getElementById("num").value;
// var re = /\S+@\S+\.\S+/;

// if(cc == 0)
// {
//               error.textContent = "Please select a valid country code";
//           error.style.color = "red";
//           return;

// }
// else if (num.length != 10){
//      error.textContent = "Please enter a valid phone number";
//           error.style.color = "red";
//           return;

// }

// // else {
// //   error.textContent = "";
// //   error.style.color="#020202";
// //   e.preventDefault();
e.preventDefault();
const email=(e.target as any)[0].value
login(WALLET_ADAPTERS.OPENLOGIN, "email_passwordless", email);
// }

}

const TxHistory = () => {

useEffect(() => {
for(var i = 0; i < transactionHistory.length; i++)
{

var currentTransac = transactionHistory[i].to.toString().toLowerCase() === mainAccount.toString().toLowerCase()? transactionHistory[i].from : transactionHistory[i].to;
//var currentTransac = "0xa13414fa08c8ae49a9cceabdae4ff8d2d82ec139";
var finalVal = currentTransac.substring(0,6)+"..."+currentTransac.substring(currentTransac.length - 3);
//console.log(finalVal);
if (transactionHistory[i].to.toString().toLowerCase() === mainAccount.toString().toLowerCase())
{
transactionHistory[i].from = finalVal;
}
else{
transactionHistory[i].to = finalVal;
}
}
},[]);


    const addressShortner = (transaction: any) => {
      const address = transaction.to.toString().toLowerCase() === mainAccount.toString().toLowerCase() ? transaction.from : transaction.to;
      const addressShortened = address.substring(0, 6) + "..." + address.substring(address.length - 3);
      return addressShortened;
    }

const [price,setPrice] = useState("")
var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange=function(){
if(xhr2.readyState==XMLHttpRequest.DONE){
setPrice(xhr2.responseText)
}
}

xhr2.open('GET', "https://price.api.xade.finance/celo")
xhr2.send()
return (
<div>
<br />
            <div className='topBar'>
                <Link to='/'>
                    <div className='goBack'><ImCross /></div>
                </Link>
                <div className='buttonHolderQrPage'>
                   <div className='qrButtonLeftinActive' style = {{'color': '#fff', 'textDecoration': 'none' }}><h2>Transaction</h2></div>
                    <div className='qrButtonRightActive'style = {{'color': '#fff', 'textDecoration': 'none' }} ><h2>&nbsp;History</h2></div>
                </div>

                <div className='share'><FiShare /></div>

            </div>
<div className='activityContent'>
<br />
<br />
<br />
<br />
<br />
<br />
            {transactionHistory.map((transaction, index) => (
              <div key={index} className='transactionHistory-pills'>
                <div className='rightHalf-pill'>
                <div className='transactionIndicator-arrows'>
                      <svg stroke="currentColor" fill={transaction.to.toString().toLowerCase() === mainAccount.toString().toLowerCase() ? "green" : "red"} stroke-width="0" viewBox="0 
0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d={transaction.to.toString().toLowerCase() === mainAccount.toString().toLowerCase() ? "M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z" : "M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"}></path></svg>
                </div>
                </div>
                <div className='leftHalf-pill'>
                  <div className='transaction-history-line1'>

                    &nbsp;&nbsp;
                    <div className="address-styling">
                      {addressShortner(transaction)}
                    </div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href={`https://alfajores-blockscout.celo-testnet.org/tx/${transaction.hash}`} target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a>
                    </div>
                  </div>
                  <div className='transaction-history-line2'>



                    &nbsp;&nbsp;
                    <div className="amount-time-stlying">
                    {(parseFloat(transaction.value) / Math.pow(10,18)).toFixed(2)}

                    </div >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="amount-time-stlying">
                      {(new Date(transaction.timeStamp * 1000).toString()).substring(4, 21)}
                    </div>
                    &nbsp;&nbsp;

                  </div>
                </div>
              </div>
            ))}
   </div>
</div>
);

}

const HomePage = (props: Props) => {

    const addressShortner = (transaction: any) => {
      const address = transaction.to.toString().toLowerCase() === mainAccount.toString().toLowerCase() ? transaction.from : transaction.to;
      const addressShortened = address.substring(0, 6) + "..." + address.substring(address.length - 3);
      return addressShortened;
    }

type Props = {}

const settings = {
dots: true,
infinite: true,
  autoplay: true,
      autoplaySpeed: 2000,
speed: 500,
slidesToShow: 2,
slidesToScroll: 1,
initialSlide: 0,
arrows:false,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
infinite: true,
dots: true
}
},
{
breakpoint: 768,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
initialSlide: 1
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
};
let symbol = 'CELO';
let value = '0.00';

const [amount, setAmt] = useState(0);

useEffect(() => {
const handleGetBalance = async () => {
const bal = await provider?.getBalance();
setAmt(bal);
}
if (provider) {
handleGetBalance();
}
}, [provider, amount]);
const amountStr = amount.toString();
//const [price,setPrice] = useState(0);
//var donezo = false;
/* useEffect(() => {
const handleGetCelo = async () => {
var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange=function(){
if(xhr2.readyState==XMLHttpRequest.DONE){
if(xhr2.status == 200){
setPrice(xhr2.responseText);
}
}
}
}

}, [price]);
*/
const [price,setPrice] = useState(0);
var donezo = false;
var xhr2 = new XMLHttpRequest();

//while(donezo=== false){

xhr2.onreadystatechange=function(){
if(xhr2.readyState==XMLHttpRequest.DONE){
if(xhr2.status == 200){
const usdJson = JSON.parse(xhr2.responseText);
const balCUSD = usdJson["result"];
setPrice(balCUSD);
donezo = true;
}
}
}
xhr2.open('GET', `https://explorer.celo.org/alfajores/api?module=account&action=tokenbalance&contractaddress=0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1&address=${mainAccount}`);
xhr2.send() 

//const usdBal = (parseFloat(price)*parseFloat(Web3.utils.toWei(amountStr,'ether'))).toString();
//const usdBal = parseInt(price)*parseInt(Web3.utils.toWei(amountStr,'ether'));
const usdBal = (parseFloat(price)/Math.pow(10,18)).toFixed(2);
//alert(price);

function returnUser(walletAddr:any){
var finalVal = "";
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){

if (xhr.status == 200){
finalVal = xhr.responseText;
}
else{
finalVal = walletAddr;
}
}

xhr.open("GET",`https://user.api.xade.finance?address=${walletAddr}`);
xhr.send(null);

return finalVal;

}

useEffect(() => {
for(var i = 0; i < transactionHistory.length; i++)
{

var currentTransac = transactionHistory[i].to.toString().toLowerCase() === mainAccount.toString().toLowerCase()? transactionHistory[i].from : transactionHistory[i].to;
//var currentTransac = "0xa13414fa08c8ae49a9cceabdae4ff8d2d82ec139";
//var xhr = new XMLHttpRequest();
var finalVal;
//xhr.onreadystatechange = function(){

//if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
//finalVal = xhr.responseText;
//}
//else if(xhr.status != 200){
finalVal = currentTransac.substring(0,6)+"..."+currentTransac.substring(currentTransac.length - 3);
//console.log(xhr.status);
//}
//}

//xhr.open("GET",`https://user.api.xade.finance?address=${currentTransac}`);
//xhr.send(null);
//console.log(finalVal);
if (transactionHistory[i].to.toString().toLowerCase() === mainAccount.toString().toLowerCase())
{
transactionHistory[i].from = finalVal;
}
else{
transactionHistory[i].to = finalVal;
}
}
},[]);


return (

<div className='container'>
<div className='carouselHolder'>
<Slider {...settings}>
<CarouselCard1/>

                      <CarouselCard2/>

               

 <CarouselCard3/>

 <CarouselCard4/>
                </Slider>
      
      </div>

<br />
<br />
<br />
<br />
<br />
           
<br />
<br />
<div  className='myActivity'>
        <div className='totalBalance'>
<br />
<br />
<br />     
<br />
<br />
       <p className='label'>Checking Account</p>
            <p className='value'>${usdBal}</p>
          </div>
<br />
<br />
<br />
<br />
<br />

<button className="txBtn"><a href="/history" style = {{'color': '#fff', 'textDecoration': 'none' }}>View Transaction History</a></button>
<br />
<br />
</div>
<br />
<br />
{/*<div className='activityContent'>
            {transactionHistory.map((transaction, index) => (
              <div key={index} className='transactionHistory-pills'>
                <div className='rightHalf-pill'>
                <div className='transactionIndicator-arrows'>
                      <svg stroke="currentColor" fill={transaction.to.toString().toLowerCase() === mainAccount.toString().toLowerCase() ? "green" : "red"} stroke-width="0" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d={transaction.to.toString().toLowerCase() === mainAccount.toString().toLowerCase() ? "M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z" : "M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"}></path></svg>
                </div>
                </div>
                <div className='leftHalf-pill'>
                  <div className='transaction-history-line1'>
                    
                    &nbsp;&nbsp;
                    <div className="address-styling">
                      {addressShortner(transaction)}
                    </div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href={`https://explorer.celo.org/alfajores/tx/${transaction.hash}/token-transfers`} target="_blank" rel="noopener noreferrer"> <FaExternalLinkAlt /></a>
                    </div>
                  </div>
                  <div className='transaction-history-line2'>



                    &nbsp;&nbsp;
                    <div className="amount-time-stlying">
                    {transaction.value}
                      
                    </div >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="amount-time-stlying">
                      {(new Date(transaction.timeStamp * 1000).toString()).substring(4, 21)}
                    </div>
                    &nbsp;&nbsp;
                   
                  </div>
                </div>
              </div>
            ))}
   </div> 
  </div>
   */}
<br />  
          <div className='utilityButtons'>
                <div className='buttonHolder'>
                    <div className='paymentsButton'>
                        <Link to = '/send'><a style = {{'color': '#fff', 'textDecoration': 'none' }}>Send</a></Link>
                    </div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className='paymentsButton'>
                       <Link to = '/qr'><a style = {{'color': '#fff', 'textDecoration': 'none' }}>Request</a></Link>
                    </div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link
                      to='/qr'
                    >
                    <div className='scanner'>
                        <TbQrcode />
                    </div>
                    </Link>
                </div>
    
        </div>
     <br /> 
 {/*<br />
 <br />
 <br />
 <br />
 <br /> 
 <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />     
    */}    </div>
    
  )
}
  
  

    const handleLoginWithEmail2=(e: FormEvent<HTMLFormElement>) => {
    /*  var error = document.getElementById("error");
  cc = document.getElementById("cc").value;
  num = document.getElementById("num").value;

  if(cc == 0)
  {
    e.preventDefault();
                error.textContent = "Please select a valid country code";
            error.style.color = "red";
            return;
      
  }
  else if (num.length != 10){
    e.preventDefault();
       error.textContent = "Please enter a valid phone number";
            error.style.color = "red";
            return;
        
  }

   else {
     error.textContent = "";
     error.style.color="#020202";
     e.preventDefault();
  else {
*/  
e.preventDefault();
    const email=(e.target as any)[0].value
    login(WALLET_ADAPTERS.OPENLOGIN, "email_passwordless", email);
  //        storenum(cc,num);

        // }

  
}

    /*const [username, setUser] = useState("");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
    if (xhr.status == 200)
{
        setUser(xhr.responseText);
    
}
else{
    setUser("User");
}
}
    }
xhr.open('GET', `https://user.api.xade.finance?address=${mainAccount}`, true);
xhr.send(null);
*/
    // const [phoneNum, setPhone] = useState("");

//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == XMLHttpRequest.DONE) {
//     if (xhr.status == 200)
// {
//         setPhone(xhr.responseText);
    
// }
// else{
//     setPhone("Phone Number");
// }
// }

//     }
// xhr.open('GET', `https://mobile.api.xade.finance?address=0x6f994FcccBd601D164E3743714F5D0D315Eda41b`, true);
// xhr.send(null);

const SendQR = () => {
  const params = useParams();
  let [current, setCurrent] = React.useState(0); // Phone number accept

  let [amount, setAmount] = React.useState(0);
  let [error, setError] = React.useState({'message': '', 'style': {'color':'rgba(251, 251, 251, 0.6)'}, 'error': false})
  const handleSendAmountToAddress = async (e:any) => {
    e.preventDefault();
    const addr = params.address;

  if(amount <= 0) 
  {
    setError({...error, 'message': 'Please enter a valid amount', 'style': {'color': 'red'}, 'error': true})
    return 
  }
  alert(`Address: ${addr} | Amt: ${amount}`);
  setCurrent(1);
await signAndSendTransaction(addr, amount.toString()); 
}
 return(
  
<div>
{(current == 0)?
<>
  <br />
  <br />
  <br />
  <br />
<h1 className = {styles3.element}>Enter amount</h1>
<p id="error" style = {error.style}className={styles.error}>{error.message}</p>

<form onSubmit = {(e) => {
// Some web3auth function
handleSendAmountToAddress(e);
}}>
<section className={styles.phoneNumber}>
       <div className={styles.flexContainerCountry}>
          <section className={styles.callingCodeTitle}>
              Amount <a className={styles.red}>*</a>
          </section>    

          <section>
              <input id='num' onChange = {(e) => setAmount(parseInt(e.target.value))} value = {amount} className={styles.inputForm} type='number' autoFocus/>
          </section>
      </div>
  </section>
    <br />
    <br />
    <br />

             <div className = {styles3.submitSection}>
  <button type = "submit" className = {styles3.submitButton2}>Confirm transaction</button>

</div>
</form>
</>
:
<>
<div className={tickStyles.wrapper}> <svg className={tickStyles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className ={tickStyles.checkmark__circle} cx="26" cy="26" r="25" fill="none"/> <path className={tickStyles.checkmark__check} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
            </div>  

            <div className = {tickStyles.and}>Transaction successful! </div>
</>
}
</div>
  );
};

const QRCodeValue = `${username}@${mainAccount}`;

const QRScanner = () => {
  const [scannedCodes, setScannedCodes] = useState([]);
var error = "";
  function activateLasers() {
    var decodedText = "asdf";
    var decodedResult = "asdfasdfasdf";
    console.log(scannedCodes);

    setScannedCodes(scannedCodes.concat([{ decodedText, decodedResult }]));
  }

  useEffect(() => {
    function onScanSuccess(decodedText, decodedResult) {
window.stop();     
 // handle the scanned code as you like, for example:
      console.log(`Code matched = ${decodedText}`, decodedResult);
   // setScannedCodes(scannedCodes.concat([{ decodedText, decodedResult }]));
const walletAddr = decodedText.split("@")[1]
window.location.href="/sendQR/"+walletAddr;
}

    function onScanFailure(error) {
      // handle scan failure, usually better to ignore and keep scanning.
      // for example:
      console.warn(`Code scan error = ${error}`);
    }

    let html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false
    );
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  });
//alert(scannedCodes);
  return (
    <div>
    <br />
     <br />
      <br />
          <br />
     <br />
      <br />
          <br />
     <br />
      <br />
      <div id="reader" width="600px"></div>
   <a>{error}</a>
    </div>
  );
};


const QrCodePage = (props: Props) => {

    const [isActive, setActive] = useState(false);

function displayAddr() {
alert(mainAccount);
}

    const showReader = () => {
        if (isActive)
            return (
                <div className={'mainContent' + 'active'}>
                    <div className={"contentWrapper"}>
                        <QRScanner />
                    </div>
                </div>
            )

    }

function copyAddr(){
navigator.clipboard.writeText(mainAccount);
alert("Address copied");
}
    return (
        <div className='containerQrPage'>
            <div className='topBar'>
                <Link to='/'>
                    <div className='goBack'><ImCross /></div>
                </Link>
                <div className='buttonHolderQrPage'>
                    <div className={'qrButtonLeft ' + (isActive ? 'active' : 'inActive')} onClick={() => setActive(!isActive)} >My Code</div>
                    <div className={'qrButtonRight ' + (isActive ? 'inActive' : 'active')} onClick={() => setActive(!isActive)} >Scan</div>
                </div>

                <div className='share'><FiShare /></div>

            </div>
<br />
<br />
            <div className={'mainContent ' + (isActive ? 'myInfoInActive' : 'myInfoActive')}>
                <div className='contentWrapper'>
                    <div className='infoHolder'>
<div><img className="pfp" src={img} /></div>
<br />
<br />
                                  <div><h2>{username}</h2></div>
                        <div><button className="blackBtn" onClick={displayAddr}><h4>{mainAccount.substring(0,6)}...{mainAccount.substring(mainAccount.length - 3)}</h4></button><button className="blackBtn"><FaCopy onClick={copyAddr}/></button></div>
<br />      
                  <div><button className="pillBtn">🟢 Celo Alfajores Testnet</button></div>



                    </div>
                    <div className='QrHolder'>
                        <div className='QrWrapper'>
                            <QRCode value={QRCodeValue} />
                        </div>
                    </div>


                </div>
            </div>
            {showReader()}

        </div>
    )
}

  const handleSendAmountToAddress = async () => {

    var toAddr = document.getElementById("toAddr").value;
    var amt = document.getElementById("amount").value;
    console.log("trying");
  await signAndSendTransaction(toAddr, amt); 
  }



const balance = getBalance();


const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  let difference = +new Date(`11/30/2022`) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
}


const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
  const timer = setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return () => clearTimeout(timer);
});

const timerComponents = [];

Object.keys(timeLeft).forEach((interval) => {
  if (!timeLeft[interval]) {
    return;
  }

  timerComponents.push(
    <span>
      {timeLeft[interval]} {interval}{" "}
    </span>
  );
});
/*const [hoursLeft, setHours] = useState(timeLeft["hours"]);
if(timeLeft["hours"] < 10){
setHours("0"+timeLeft["hours"]);
}*/

/*const CountDown = () => {
return (
<div className="text-center main-countdown">
    <div className="countdown-div">
      <div className="the-countdown-has-already-begu">
        <div className="take-part-in-private-beta">
          <b className="take-part-in-private-beta1"><a style = {{'color':'white','textDecoration': 'none'}} href="https://discord.com/channels/1023970802099572847/1039229895781404692">Take part in private beta</a></b>

        </div>
        <div className="the-countdown-has-already-begu1">
          The countdown has already begun.
        </div>
      </div>
      <div className="countdown-div1">
        <div className="days-div">
          <img className="ellipse-icon" alt="" src="https://app.xade.finance/images/ellipse-123.svg" />
          <div className="div">{timeLeft["days"]}</div>
          <div className="days-div1">days</div>
        </div>
        <div className="div1">{timeLeft["hours"]}</div>
        <div className="hours-div">hours</div>
        <div className="div2">{timeLeft["minutes"]}</div>
        <div className="minutes-div">minutes</div>
        <div className="div3">{timeLeft["seconds"]}</div>
        <div className="seconds-div">seconds</div>
      </div>
      <b className="xade-mainnet-v1-is-launching-o"
        >Xade Mainnet V1 is launching on 30th November 2022</b
      >
    </div>
</div>
);
}*/

/*const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
  const timer = setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return () => clearTimeout(timer);
});

const timerComponents = [];

Object.keys(timeLeft).forEach((interval) => {
  if (!timeLeft[interval]) {
    return;
  }

  timerComponents.push(
    <span>
      {timeLeft[interval]} {interval}{" "}
    </span>
  );
});

useEffect(() => {
console.log(timeLeft);
});

   function addZero(a:number)
    {
        if(a.toString().length == 1)
            return '0' + (a.toString());
        return a.toString();
    }

    const endDate = new Date('November 30, 2022 00:00:00');

    const [brokenUp, setBrokenUp] = React.useState({
        days: 19, 
        hours: 0, 
        minutes: 0,
        seconds: 0
    })

   useEffect(() => {
        const interval = setInterval(() => {
            console.log('This will run every second!');
            const now = new Date();
            const days = Math.floor(Math.abs(endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
            const hours = Math.floor(Math.abs(endDate.getTime() - now.getTime()) / (1000 * 60 * 60) % 24);
            const minutes = Math.floor(Math.abs(endDate.getTime() - now.getTime()) / (1000 * 60) % 60);
            const seconds = Math.floor(Math.abs(endDate.getTime() - now.getTime()) / (1000) % 60);
            setBrokenUp({...brokenUp, days: days, hours: hours, minutes: minutes, seconds: seconds})
        }, 1000);
        return () => clearInterval(interval);
        }, []);
*/
const CountDown = () => {
   function addZero(a:number)
    {
        if(a.toString().length == 1)
            return '0' + (a.toString());
        return a.toString();
    }

    const endDate = new Date('November 30, 2022 00:00:00');

    const [brokenUp, setBrokenUp] = React.useState({
        days: 19,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

   useEffect(() => {
        const interval = setInterval(() => {
            console.log('This will run every second!');
            const now = new Date();
            const days = Math.floor(Math.abs(endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
            const hours = Math.floor(Math.abs(endDate.getTime() - now.getTime()) / (1000 * 60 * 60) % 24);
            const minutes = Math.floor(Math.abs(endDate.getTime() - now.getTime()) / (1000 * 60) % 60);
            const seconds = Math.floor(Math.abs(endDate.getTime() - now.getTime()) / (1000) % 60);
            setBrokenUp({...brokenUp, days: days, hours: hours, minutes: minutes, seconds: seconds})
        }, 1000);
        return () => clearInterval(interval);
        }, []);

return (
        <>
        <div className = {count.center}>
            <div className = {count.heading}>     
           Xade Mainnet V1 is launching on 30th November 2022
 <br />
<br />           
</div>
            <div className={count.wrapper}>
                <div className = {count.elWrapper + " " + count.daysWrapper}>
                    <div className = {count.elA}>
                        <div className={count.daysDiv}>{addZero(brokenUp.days)}
</div>                    
</div>
                    <div className = {count.elB}>days</div>
                </div>
                <div className = {count.elWrapper + " " + count.hoursWrapper}>
                    <div className = {count.elA}>
                        {addZero(brokenUp.hours)}
                    </div>
                    <div className = {count.elB}>hours</div>
                </div>
                <div className = {count.elWrapper + " " + count.minsWrapper}>
                <div className = {count.elA}>
                        {addZero(brokenUp.minutes)}
                    </div>
                <div className = {count.elB}>minutes</div>
                </div>
                <div className = {count.elWrapper + " " + count.secondsWrapper}>
                <div className = {count.elA}>
                        {addZero(brokenUp.seconds)}
                    </div>
                <div className = {count.elB}>seconds</div>
                </div>


            </div>
             <div className = {count.footer}>
             <br />

                The countdown has already begun
<br />
<br />
<br />
                <button className={count.takePart}><a className={count.btnTxt} href="https://discord.com/channels/1023970802099572847/1039229895781404692">Take part in the private beta</a></button>
<br />
<br />
<br />            
</div>
        </div>
        </>
    );
}

  const loggedInView=(

     getUserInfo(secret),
         <>

              <div className="App" >
  
     <BrowserRouter>
       
       <Routes>
          
         <Route path="/" element={<CountDown/>} />
  <Route path="/login" element={<CountDown/>} />
               <Route path="/register" element={<CountDown/>} />

  {/*}       <Route path = '/investments' element = {<Layout><Investments /></Layout>} />

        <Route path="/payments" element={<></>} />
         <Route path="/deposit-withdraw" element={<Layout><DepositWithdraw /></Layout>} />
         <Route path="/qr" element={<QrCodePage />} />
<Route path="/savings" element={<Layout><Saving /></Layout>} />
                 <Route path="/send" element={<Send />} />
           <Route path="/sendQR/:address" element={<SendQR />} />
<Route path="/history" element={<TxHistory />} />
{*/}
       </Routes>
       
   </BrowserRouter>
{/*}
  <div>
    {timerComponents.length ? timerComponents : <span>Time's up!</span>}
  </div>     

    <div class="countdown-div">
      <div class="the-countdown-has-already-begu">
        <div class="take-part-in-private-beta">
          <b class="take-part-in-private-beta1">Take part in private beta</b>
        </div>
        <div class="the-countdown-has-already-begu1">
          The countdown has already begun.
        </div>
      </div>
      <div class="countdown-div1">
        <div class="days-div">
          <img class="ellipse-icon" alt="" src="public/ellipse-123.svg" />
          <div class="div">{timeLeft["days"]}</div>
          <div class="days-div1">days</div>
        </div>
        <div class="div1">{timeLeft["hours"]}</div>
        <div class="hours-div">hours</div>
        <div class="div2">{timeLeft["minutes"]}</div>
        <div class="minutes-div">minutes</div>
        <div class="div3">{timeLeft["seconds"]}</div>
        <div class="seconds-div">seconds</div>
      </div>
      <b class="xade-mainnet-v1-is-launching-o"
        >Xade Mainnet V1 is launching on 30th November 2022</b
      >
    </div>
    <div className="countdown-div">
      <div className="the-countdown-has-already-begu">
        <div className="take-part-in-private-beta">
          <b className="take-part-in-private-beta1">Take part in private beta</b>
        </div>
        <div className="the-countdown-has-already-begu1">
          The countdown has already begun.
        </div>
      </div>
      <div className="countdown-div1">
        <div className="days-div">
          <img className="ellipse-icon" alt="" src="public/ellipse-123.svg" />
          <div className="div">{timeLeft["days"]}</div>
          <div className="days-div1">days</div>
        </div>
        <div className="div1">{timeLeft["hours"]}</div>
        <div className="hours-div">hours</div>
        <div className="div2">{timeLeft["minutes"]}</div>
        <div className="minutes-div">minutes</div>
        <div className="div3">{timeLeft["seconds"]}</div>
        <div className="seconds-div">seconds</div>
      </div>
      <b className="xade-mainnet-v1-is-launching-o"
        >Xade Mainnet V1 is launching on 30th November 2022</b
      >
    </div>

<div className="countdown">
i
          >{timeLeft["days"]}</div>
          <div className="days-div1">days</div>
        <div className="div1">{timeLeft["hours"]}</div>
        <div className="hours-div">hours</div>
        <div className="div2">{timeLeft["minutes"]}</div>
        <div className="minutes-div">minutes</div>
        <div className="div3">{timeLeft["seconds"]}</div>
        <div className="seconds-div">seconds</div>
</div>

    <div className="main">


        <div className="clock"></div>
        <div className="display">
            <span>{timeLeft["days"]} Days</span>
            <span>{timeLeft["hours"]} Hours</span>
            <span>{timeLeft["minutes"]} Minutes</span>            
<span>{timeLeft["seconds"]} Seconds</span>
        </div>
    </div>

</div>


<div className="text-center main-countdown">
    <div className="countdown-div">
      <div className="the-countdown-has-already-begu">
        <div className="take-part-in-private-beta">
          <b className="take-part-in-private-beta1">Take part in private beta</b>
        </div>
        <div className="the-countdown-has-already-begu1">
          The countdown has already begun.
        </div>
      </div>
      <div className="countdown-div1">
        <div className="days-div">
          <img className="ellipse-icon" alt="" src="https://app.xade.finance/images/ellipse-123.svg" />
          <div className="div">19</div>
          <div className="days-div1">days</div>
        </div>
        <div className="div1">21</div>
        <div className="hours-div">hours</div>
        <div className="div2">35</div>
        <div className="minutes-div">minutes</div>
        <div className="div3">42</div>
        <div className="seconds-div">seconds</div>
      </div>
      <b className="xade-mainnet-v1-is-launching-o"
        >Xade Mainnet V1 is launching on 25th November 2022</b
      >
    </div>
</div>
{*/}
</div>
     </>
);

function registerSocial(social:string){
/*  var error = document.getElementById("error");
cc = document.getElementById("cc").value;
num = document.getElementById("num").value;

if(parseInt(cc) == 0)
{
        error.textContent = "Please select a valid country code";
    error.style.color = "red";

}
else if (num.length != 10){
error.textContent = "Please enter a valid phone number";
    error.style.color = "red";

}

else{
error.textContent = "";
error.style.color="rgba(251, 251, 251, 0.6)";
*/    
login(WALLET_ADAPTERS.OPENLOGIN,social);
//storenum(cc,num);


}





//     <>
//     <script>
//     alert("hello");
//     </script> 
//       <head>
//       <title>Xade | Dashboard</title>
//       </head>
// {/*      <body onLoad={getUserInfo}>
// */}{/*      {{getUserInfo()}}
// */}      <div className={styles.logindone}>
// {/*<script> 
// window.onload=function() {
//   {getUserInfo()}
// }*/}
// {/*</script>*/}
//       <h1 className={styles.dash}>Dashboard</h1>
//       <div className={styles.logindone2}>
//       <div className={styles.console} id="console">
//         <p className={styles.code}></p>
//       </div>
//       <script src="details.js"></script>
//       <button id="mybtn" onClick={getUserInfo} className={styles.loggedIn}>
//         <b>Get User Info</b>
//       </button>
//       <div>
//       </div>

//       {/*<br/>
//       <br/>
//       <button onClick={getAccounts} className={styles.loggedIn}>
//         <b>Get Accounts</b>
//       </button>
//       <br/>
//       <br/>
//       <button onClick={getBalance} className={styles.loggedIn}>
//         <b>Get Balance</b>
//       </button>*/}
//       <br/>
//       <br/>
//       <button onClick={logout} className={styles.loggedIn}>
//         <b>Log Out</b>

//       </button>
//       </div>

//       </div>
//           </>
//   );


function loginSocial(social:string){
login(WALLET_ADAPTERS.OPENLOGIN,social);

}


function Box2(){
return (
 <div>
    <div className="sign-in-div">
      <img
        className="pexels-mikhail-nilov-7672255-1-icon"
        alt=""
        src="https://www.xade.finance/media/pexelsmikhailnilov7672255-1@2x.png"
      />
      {/*}<div className="web3aunth-div">
        <div className="secured-by-div">Secured by</div>
        <img
          className="logo-for-dark-navbar-2-1"
          alt=""
          src="https://www.xade.finance/media/logofordarknavbar-2-1.svg"
        />
      </div>{*/}
      <div className="sign-in-form">
             <div className="socialsDiv2" >

            <button className="socials2"  onClick={() => loginSocial("google")}>       <img className="socialsImg" src="https://dashboard.web3auth.io/img/login-google.2a082e2a.svg"/>
         </button> &nbsp;      <button className="socials2"  onClick={() => loginSocial("linkedin")}>
       <img className="socialsImg"  src="https://dashboard.web3auth.io/img/login-linkedin.a1413fd9.svg"/>
            </button>&nbsp;&nbsp;
      <button className="socials2"  onClick={() => loginSocial("facebook")}>
        <img src="https://dashboard.web3auth.io/img/login-facebook.01f67d62.svg" className="socialsImg"/>
      </button>&nbsp;&nbsp;
      <button className="socials2"  onClick={() => loginSocial("twitter")}>    <img className="socialsImg"  src="https://dashboard.web3auth.io/img/login-twitter.d24e7883.svg"/>
      </button>
<br/>
<br/>
<br />
      <div className="web3aunth-div">
        <div className="secured-by-div">Secured by</div>
        <img
          className="logo-for-dark-navbar-2-1"
          alt=""
          src="https://www.xade.finance/media/logofordarknavbar-2-1.svg"
        />
      </div>
    </div>
        <button onClick={loginWithWalletConnect} className="connect-wallet-button">
          <b className="connect-your-wallet">Connect Wallet</b>
        </button>
&nbsp;
<form onSubmit={(e)=>handleLoginWithEmail2(e)}>

  <div className="email-field-div">
<br />
<br />
<br />                
    <input type={'email'} placeholder={'Enter your email'} className="your-email-div"/>          <div className="rectangle-div"></div>
        </div>    
    <button type="submit" className="sign-in-button">
         <b className="sign-in-text">Sign in</b>
        </button>

{/*}        <div className="email-field-div">
<br />
<br />      
    <input type={'email'} placeholder={'Enter your email'} className="your-email-div"/>          <div className="rectangle-div"></div>
        </div>
{*/}
</form>
        <div className="or-create-account">
<br />       
   <span>or </span
          ><span className="create-account-span"><a style = {{'textDecoration': 'none','color':'#ff537c' }} href="/mobileVerify">create account</a></span>
            </div>
        <b className="sign-in-b1">Sign in</b>
<br />
      </div>
      <b className="were-all-explorers-and-now-y"
        ></b
      >{/*}<img className="xade-icon" alt="" src="https://www.xade.finance/media/xade.svg" />{*/}</div>
</div>
);
}

function Box(){

const [state, setState] = React.useState(0);
const [cc, setCC] = React.useState('');
const [pnum, setPnum] = React.useState('');

const numberValidation = (e:FormEvent<HTMLFormElement>) => {
var error = document.getElementById("error");
setCC(document.getElementById("cc").value);
setPnum(document.getElementById("num").value);

let cc = document.getElementById("cc").value;
let num = document.getElementById("num").value;

if(cc == 0)
{
e.preventDefault();
        error.textContent = "Please select a valid country code";
    error.style.color = "red";
    return;

}
else if (num.length != 10){
e.preventDefault();
error.textContent = "Please enter a valid phone number";
    error.style.color = "red";
    return;

}

// else {
//   error.textContent = "";
//   error.style.color="#020202";
//   e.preventDefault();
else {
e.preventDefault();
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){

alert(xhr.responseText);

setState(1);

}
xhr.open("GET",`https://otp.api.xade.finance/login?phonenumber=${cc + num}=&channel=sms`);

xhr.send(null);


// }

}
}

const otpValidation= (e:any) => {
e.preventDefault();
alert('function called')

let otpEntered:string = document.getElementById('numberinput1').value.toString() + document.getElementById('numberinput2').value.toString() + document.getElementById('numberinput3').value.toString() + document.getElementById('numberinput4').value.toString() + document.getElementById('numberinput5').value.toString() + document.getElementById('numberinput6').value.toString();
// Call verify API
alert(otpEntered)
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
let jsonObj = JSON.parse(xhr.responseText)
if (jsonObj.status == 'approved') {
storenum(cc,pnum);
prompt("verified");
window.location.href=`/register/${secret}`
}
else 
{
alert("Incorrect code");
setState(0);
}
}

xhr.open("GET",`https://otp.api.xade.finance/verify?phonenumber=${(cc + pnum)}=&code=${otpEntered}`);
xhr.send(null);


}




const handleLoginWithEmail2=(e: FormEvent<HTMLFormElement>) => {
var error = document.getElementById("error");
/* cc = document.getElementById("cc").value;
num = document.getElementById("num").value;

if(cc == 0)
{
e.preventDefault();
        error.textContent = "Please select a valid country code";
    error.style.color = "red";
    return;

}
else if (num.length != 10){
e.preventDefault();
error.textContent = "Please enter a valid phone number";
    error.style.color = "red";
    return;

}

else {
error.textContent = "";
error.style.color="#020202";
e.preventDefault();
else { */
e.preventDefault();
const email=(e.target as any)[0].value
login(WALLET_ADAPTERS.OPENLOGIN, "email_passwordless", email);
  storenum(cc,num);

// }


}


return (
<div>
<div className={"container"+styles.login} >
<div className={styles.loginTitleText}><h1 className="text-center text-white" id="loginTitle">{(state == 0)?"Register":(state == 1)?"Enter OTP":"Register"}</h1></div>
      <br/>
     {(state == 0)?
     <>
     <section className={styles.mobile}>
            <div className={styles.box}>
        
                <p className={styles.subheading}>
                    Step 1: Enter your registered mobile number
                </p>
                <p id="error" className={styles.error}></p>

            <div className={styles.number_input}  id="phonenums">
                <div className={styles.number_form}>
                    <div className={styles.flexContainer}>
                        <section className={styles.countryCode}>
                                    <div className={styles.flexContainerCountry}>
                                <section className={styles.callingCodeTitle}>
                                    Country Code <a className={styles.red}>*</a> 
                                </section>    

                                <section>
                                    <select id='cc' className={styles.selectForm}>
                                    {/*}<option value="0">Select your country code</option>
                                        <option value="1">United States of America/Canada</option>
                                 <option value="44">United Kingdom</option>
                                <option value="91">India</option>
                                <option value="61">Australia</option>                                    
                                <option value="971">United Arab Emirates</option>
                                <option value="852">Hong Kong</option>
                                <option value="49">Germany</option>
                                <option value="33">France</option>
                                <option value="81">Japan</option>
                                <option value="234">Nigeria</option>
                                    {*/}
                                   { countries.map((countryName) => <option value = {countryName['code']}>{`${countryName['name']}`}</option>) }

</select>
                                </section>
                            </div>
                        </section>      
                        <section className={styles.phoneNumber}>
                             <div className={styles.flexContainerCountry}>
                                <section className={styles.callingCodeTitle}>
                                    Mobile Number <a className={styles.red}>*</a>
                                </section>    

                                <section>
                                    <input id='num' className={styles.inputForm} type='number' autoFocus/>
                                </section>
                            </div>
                        </section>

                          {/*  <section className={styles.submitSection}>
                        <button className={styles.submitButton} onClick={test} id="cont">Continue</button>
                    </section>*/}

                    </div>

                   
                </div>
                </div>
 <form onSubmit={(e)=>numberValidation(e)}  className={"container"+styles.login2}>
      <div className="text-center">
<br />
<a href="/register">Skip for Now</a> 
<br />
<br />      
 <button type="submit" className={styles.continue}>Continue</button>
        </div>
      </form>
                    
        </div>
        </section>

     </>
     :
     (state == 1)? 
     <>
      <form onSubmit = {(e) => {otpValidation(e)}}>
                <input id = "numberinput1" className = {styles3.numberInput} type="number" min = "0" max = "9"  onChange = {(e) => {
                  e.target.value = e.target.value[0];
                  document.getElementById('numberinput2').focus()}} />
                <input id = "numberinput2" className = {styles3.numberInput} type="number" min = "0" max = "9" onChange = {(e) => {
                  e.target.value = e.target.value[0];
                  document.getElementById('numberinput3').focus()}} />
                <input id = "numberinput3" className = {styles3.numberInput} type="number" min = "0" max = "9" onChange = {(e) => {
                  e.target.value = e.target.value[0];
                  document.getElementById('numberinput4').focus()}}/>
                <input id = "numberinput4" className = {styles3.numberInput} type="number" min = "0" max = "9" onChange = {(e) => {
                  e.target.value = e.target.value[0];
                  document.getElementById('numberinput5').focus()}}/>
                <input id = "numberinput5" className = {styles3.numberInput} type="number" min = "0" max = "9" onChange = {(e) => {
                  e.target.value = e.target.value[0];
                  document.getElementById('numberinput6').focus()}}/>
                <input id = "numberinput6" className = {styles3.numberInput} type="number" min = "0" max = "9" onChange = {(e) => {

                  e.target.value = e.target.value[0]}}/>
<br />
<br />
                  <div className="text-center">
      
        <button type="submit" className={styles.continue}>Continue</button>
                  </div>
            </form> 
     </>
     :
      <>
        <p className={styles.subheading}>
                    Step 2: Log in via your social media account/email
                </p>
      <div className={styles.socialsDiv} >

         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={() => registerSocial("google")} className={styles.socials}> &nbsp;
        <img src="https://dashboard.web3auth.io/img/login-google.2a082e2a.svg"/>
      </button>
            <button onClick={() => registerSocial("linkedin")} className={styles.socials}> &nbsp;
        <img src="https://dashboard.web3auth.io/img/login-linkedin.a1413fd9.svg"/>
      </button>
       <button onClick={() => registerSocial("discord")}  className={styles.socials}> &nbsp;
        <img src="https://dashboard.web3auth.io/img/login-discord.0321a3e0.svg" />
      </button>
      <button onClick={() => registerSocial("facebook")} className={styles.socials}> &nbsp;
        <img src="https://dashboard.web3auth.io/img/login-facebook.01f67d62.svg" />
      </button> &nbsp;
      <button onClick={() => registerSocial("twitter")} className={styles.socials}> &nbsp;
        <img src="https://dashboard.web3auth.io/img/login-twitter.d24e7883.svg"/>
      </button>
      </div>

        <form onSubmit={(e)=>handleLoginWithEmail2(e)}  className={"container"+styles.login2}>
      <div className="text-center">
        <input type={'email'} placeholder={'Enter your email'} className={styles.input} />
        <button type="submit" className={styles.continue}>Continue</button>
        </div>
      </form>
        <div className={styles.web3authIMG}>
          <b className={styles.secure}>Secured by</b> <a href="https://web3auth.io"><svg _ngcontent-ttf-c96="" xmlns="http://www.w3.org/2000/svg" width="110" height="16" viewBox="0 0 110 16" fill="none"><path _ngcontent-ttf-c96="" fill-rule="evenodd" clip-rule="evenodd" d="M9.46429 14.2075C9.42621 14.3399 9.53332 14.4697 9.68049 14.4697H11.1251C11.2722 14.4697 11.3794 14.3397 11.3413 14.2075L10.619 11.6993C10.5597 11.4935 10.2459 11.4935 10.1866 11.6993L9.46429 14.2075Z" fill="#0364FF"></path><path _ngcontent-ttf-c96="" fill-rule="evenodd" clip-rule="evenodd" d="M7.88902 15.389C7.79309 15.7495 7.46861 16 7.09792 16H5.12024C4.58172 16 4.18976 15.4858 4.32914 14.9623L8.13487 0.6682C8.23981 0.274067 8.59471 0 9.00014 0H11.3003C11.7058 0 12.0607 0.274067 12.1656 0.6682L15.9714 14.9623C16.1108 15.4858 15.7188 16 15.1803 16H13.2026C12.8319 16 12.5074 15.7495 12.4115 15.389L10.5334 8.33527C10.4284 7.94072 9.87211 7.94072 9.76706 8.33527L7.88902 15.389Z" fill="#0364FF"></path><path _ngcontent-ttf-c96="" fill-rule="evenodd" clip-rule="evenodd" d="M16.9884 12.7703C16.8804 13.1768 16.3081 13.1768 16.1999 12.7703L14.8006 7.50745C14.7762 7.41592 14.7762 7.31953 14.8006 7.22798L16.5552 0.6288C16.6539 0.2579 16.9874 0 17.3684 0H19.2868C19.8403 0 20.2431 0.529133 20.0999 1.06797L16.9884 12.7703ZM5.3261 7.4989C5.35043 7.40735 5.35043 7.31097 5.3261 7.21943L3.57378 0.6288C3.47517 0.2579 3.14167 0 2.76065 0H0.842283C0.288766 0 -0.114117 0.529133 0.0291492 1.06797L3.1383 12.7618C3.24637 13.1683 3.81872 13.1683 3.9268 12.7618L5.3261 7.4989Z" fill="#0364FF"></path><path _ngcontent-ttf-c96="" fill-rule="evenodd" clip-rule="evenodd" d="M53.5514 14.3308C54.1564 14.6407 54.8217 14.7957 55.5476 14.7957C56.8514 14.7957 57.9537 14.2837 58.8542 13.2597C59.7817 12.2355 60.2455 10.9891 60.2455 9.52043C60.2455 8.0652 59.7817 6.8188 58.8542 5.78127C57.9537 4.75722 56.8514 4.24518 55.5476 4.24518C54.8217 4.24518 54.1564 4.40013 53.5514 4.71005C53.2097 4.88915 52.9107 5.102 52.6569 5.3486C52.4974 5.50368 52.1742 5.3975 52.1742 5.17472V0.2736C52.1742 0.1225 52.0521 0 51.9012 0H50.5982C50.4475 0 50.3254 0.1225 50.3254 0.2736V14.1987C50.3254 14.3498 50.4475 14.4723 50.5982 14.4723H51.9074C52.0582 14.4723 52.1804 14.3498 52.1804 14.1987V13.8662C52.1804 13.6433 52.5027 13.5378 52.6619 13.6933C52.9135 13.9395 53.2102 14.152 53.5514 14.3308ZM57.4832 12.0873C56.8784 12.761 56.1322 13.0978 55.245 13.0978C54.3445 13.0978 53.5917 12.7678 52.9869 12.1075C52.3954 11.4338 52.0997 10.5714 52.0997 9.52043C52.0997 8.4829 52.3954 7.62726 52.9869 6.95355C53.5917 6.27982 54.3445 5.94297 55.245 5.94297C56.1322 5.94297 56.8784 6.27982 57.4832 6.95355C58.0881 7.62726 58.3906 8.4829 58.3906 9.52043C58.3906 10.5714 58.0881 11.4271 57.4832 12.0873ZM40.3622 13.3C41.3032 14.2972 42.4995 14.7957 43.9512 14.7957C44.9459 14.7957 45.833 14.5598 46.6127 14.0883C47.3159 13.6702 47.8817 13.109 48.3102 12.4047C48.4007 12.256 48.3381 12.0643 48.1819 11.9879L47.0736 11.446C46.9279 11.3748 46.7529 11.4302 46.6649 11.5667C46.0071 12.5875 45.1294 13.0978 44.0319 13.0978C43.1716 13.0978 42.4322 12.8015 41.8139 12.2086C41.268 11.6852 40.9527 11.0148 40.8677 10.1974C40.8489 10.0154 40.9969 9.86403 41.1794 9.86403H48.3001C48.4754 9.86403 48.6232 9.73095 48.6307 9.55541C48.6887 8.18631 48.2456 6.68105 47.3184 5.6802C46.4581 4.72352 45.2954 4.24517 43.8302 4.24517C42.4054 4.24517 41.2359 4.75047 40.3219 5.76105C39.4079 6.75817 38.9507 8.0113 38.9507 9.52043C38.9507 11.043 39.4212 12.3029 40.3622 13.3ZM41.3912 8.32795C41.1839 8.32795 41.0291 8.13482 41.0946 7.93765C41.2767 7.3901 41.5704 6.94078 41.9752 6.58973C42.4861 6.15855 43.0909 5.94297 43.7899 5.94297C44.6367 5.94297 45.3089 6.17202 45.8062 6.63015C46.2281 6.99743 46.494 7.44743 46.6042 7.98017C46.6425 8.16568 46.4916 8.32795 46.3025 8.32795H41.3912ZM38.1061 4.56857C38.3029 4.56857 38.4426 4.76077 38.3821 4.94847L35.3834 14.2708C35.3447 14.3908 35.2332 14.4723 35.1074 14.4723H33.6341C33.5084 14.4723 33.3971 14.3912 33.3582 14.2713L31.2241 7.67805C31.1424 7.42552 30.7857 7.42595 30.7047 7.67867L28.5884 14.2707C28.5499 14.3908 28.4382 14.4723 28.3124 14.4723H26.8597C26.7339 14.4723 26.6224 14.3908 26.5837 14.2708L23.5851 4.94847C23.5246 4.76077 23.6642 4.56857 23.8611 4.56857H25.1816C25.3101 4.56857 25.4234 4.65345 25.4597 4.77712L27.3491 11.2059C27.4247 11.4633 27.7862 11.4691 27.8701 11.2143L29.9904 4.76823C30.0296 4.64907 30.1406 4.56857 30.2657 4.56857H31.7612C31.8867 4.56857 31.9979 4.6494 32.0369 4.7689L34.1382 11.21C34.2216 11.4654 34.5837 11.46 34.6594 11.2023L36.5477 4.77712C36.5841 4.65345 36.6972 4.56857 36.8259 4.56857H38.1061ZM97.8709 14.634C97.0644 14.634 96.3922 14.3847 95.8545 13.8862C95.3304 13.3877 95.0615 12.6937 95.048 11.8044V6.53995C95.048 6.38885 94.9259 6.26635 94.7752 6.26635H93.587C93.4362 6.26635 93.314 6.14387 93.314 5.99275V4.84217C93.314 4.69107 93.4362 4.56857 93.587 4.56857H94.7752C94.9259 4.56857 95.048 4.44607 95.048 4.29497V0.2736C95.048 0.1225 95.1702 0 95.321 0H96.6302C96.7809 0 96.903 0.1225 96.903 0.2736V4.29497C96.903 4.44607 97.0252 4.56857 97.176 4.56857H99.0497C99.2004 4.56857 99.3225 4.69107 99.3225 4.84217V5.99275C99.3225 6.14387 99.2004 6.26635 99.0497 6.26635H97.176C97.0252 6.26635 96.903 6.38885 96.903 6.53995V11.198C96.903 11.8583 97.0307 12.3096 97.2862 12.5522C97.5415 12.7813 97.8305 12.8958 98.1532 12.8958C98.301 12.8958 98.4422 12.8823 98.5765 12.8553C98.62 12.8435 98.6625 12.831 98.7037 12.818C98.8554 12.7698 99.0252 12.8425 99.0782 12.9928L99.4742 14.115C99.5242 14.2568 99.4509 14.4133 99.3065 14.4542C98.8832 14.574 98.4045 14.634 97.8709 14.634ZM70.7135 10.5512C70.7135 11.7639 70.2634 12.7745 69.3627 13.583C68.4755 14.3915 67.3732 14.7957 66.056 14.7957C65.0209 14.7957 64.0867 14.4858 63.2534 13.866C62.4787 13.2743 61.9347 12.5193 61.6212 11.6008C61.5707 11.4531 61.6479 11.2942 61.7917 11.2341L62.9132 10.7657C63.0832 10.6947 63.276 10.7893 63.338 10.9633C63.5552 11.5727 63.8697 12.0552 64.2817 12.4107C64.779 12.815 65.3704 13.017 66.056 13.017C66.8087 13.017 67.4607 12.7813 68.0117 12.3096C68.5494 11.8246 68.8184 11.2384 68.8184 10.5512C68.8184 9.86403 68.536 9.28463 67.9714 8.81303C67.4204 8.34141 66.7549 8.10562 65.9754 8.10562H65.0927C64.9232 8.10562 64.7857 7.96782 64.7857 7.79782V6.6752C64.7857 6.50522 64.9232 6.36742 65.0927 6.36742H65.8342C66.5735 6.36742 67.1784 6.1653 67.6489 5.76105C68.1194 5.34335 68.3545 4.80437 68.3545 4.14412C68.3545 3.53777 68.1327 3.04595 67.6892 2.66867C67.2455 2.29138 66.6609 2.10273 65.9351 2.10273C64.868 2.10273 64.1089 2.60178 63.6574 3.59985C63.5845 3.76078 63.3991 3.8436 63.2367 3.7747L62.0905 3.28807C61.9399 3.22413 61.8647 3.05253 61.9302 2.9023C62.2462 2.17727 62.7275 1.58062 63.3744 1.11237C64.1002 0.58685 64.9537 0.3241 65.9351 0.3241C67.1582 0.3241 68.1865 0.687916 69.0199 1.41553C69.8399 2.11622 70.2499 3.02573 70.2499 4.14412C70.2499 5.32362 69.7664 6.3293 68.7995 6.9935C68.6382 7.10442 68.6425 7.36002 68.8134 7.45597C69.6214 7.91007 69.8969 8.26836 70.0885 8.55028C70.5052 9.14315 70.7135 9.81013 70.7135 10.5512ZM74.7512 10.0864C74.2539 10.4502 74.0052 10.9016 74.0052 11.4405C74.0052 11.9256 74.2069 12.3299 74.61 12.6532C75.0269 12.9767 75.5107 13.1383 76.0619 13.1383C76.8415 13.1383 77.5337 12.8487 78.1385 12.2692C78.7174 11.7269 79.0252 11.0961 79.0624 10.3768C79.0672 10.2828 79.0239 10.1929 78.9469 10.1389C78.379 9.74007 77.6122 9.54065 76.6465 9.54065C75.8939 9.54065 75.262 9.72255 74.7512 10.0864ZM76.4045 4.24518C77.7757 4.24518 78.8577 4.61573 79.6509 5.35682C80.4439 6.08445 80.8404 7.0883 80.8404 8.36837V14.1987C80.8404 14.3498 80.7182 14.4723 80.5675 14.4723H79.2584C79.1077 14.4723 78.9854 14.3498 78.9854 14.1987V13.0978C78.2192 14.2298 77.1977 14.7957 75.9207 14.7957C74.8319 14.7957 73.9179 14.4723 73.1785 13.8255C72.4527 13.1788 72.0897 12.3703 72.0897 11.4001C72.0897 10.3761 72.4729 9.56086 73.239 8.95451C74.0187 8.34816 75.0537 8.04498 76.344 8.04498C77.24 8.04498 78.0072 8.17853 78.6457 8.44563C78.8385 8.52635 79.066 8.39132 79.048 8.18252C78.9959 7.57505 78.814 7.03723 78.2999 6.58973C77.789 6.1316 77.1909 5.90253 76.5054 5.90253C75.5569 5.90253 74.7889 6.27038 74.2015 7.00608C74.1102 7.12045 73.948 7.15478 73.8244 7.07675L72.6545 6.33835C72.5227 6.25513 72.4864 6.07775 72.5827 5.95502C73.4777 4.81512 74.7515 4.24518 76.4045 4.24518ZM91.3127 14.4723C91.4729 14.4723 91.6027 14.3422 91.6027 14.1817V4.85927C91.6027 4.69872 91.4729 4.56857 91.3127 4.56857H90.0377C89.8775 4.56857 89.7477 4.69872 89.7477 4.85927V10.0459C89.7477 10.8814 89.499 11.6022 89.0017 12.2086C88.5044 12.8015 87.886 13.0978 87.1467 13.0978C85.5605 13.0978 84.7474 12.2894 84.707 10.6725V4.85927C84.707 4.69872 84.5772 4.56857 84.417 4.56857H83.142C82.9819 4.56857 82.8521 4.69872 82.8521 4.85927V10.7938C82.8521 12.0738 83.1745 13.0642 83.8199 13.7648C84.4785 14.4522 85.4127 14.7957 86.6225 14.7957C87.2542 14.7957 87.8592 14.634 88.4372 14.3107C88.767 14.1302 89.0489 13.9247 89.2825 13.694C89.4315 13.547 89.7477 13.6475 89.7477 13.8568V14.1817C89.7477 14.3422 89.8775 14.4723 90.0377 14.4723H91.3127ZM101.459 0C101.308 0 101.186 0.1225 101.186 0.2736V14.1987C101.186 14.3498 101.308 14.4723 101.459 14.4723H102.768C102.918 14.4723 103.041 14.3498 103.041 14.1987V9.07578C103.041 8.24037 103.296 7.51273 103.807 6.89292C104.331 6.25962 104.97 5.94297 105.722 5.94297C107.295 5.94297 108.081 6.83228 108.081 8.61092V14.1987C108.081 14.3498 108.204 14.4723 108.354 14.4723H109.663C109.814 14.4723 109.936 14.3498 109.936 14.1987V8.2471C109.936 6.96701 109.607 5.98338 108.948 5.29618C108.303 4.59552 107.376 4.24518 106.166 4.24518C105.534 4.24518 104.923 4.40687 104.331 4.73027C104.01 4.91018 103.734 5.11513 103.504 5.3451C103.356 5.493 103.041 5.39342 103.041 5.18397V0.2736C103.041 0.1225 102.918 0 102.768 0H101.459Z" fill="#fff"></path></svg></a>
</div>
      </>

     }
    
    <br/>


  
      </div>
      </div>
   );
}


function Box3() {

  return (
 <div>
    <div className="sign-in-div">
      <img
        className="pexels-mikhail-nilov-7672255-1-icon"
        alt=""
        src="https://www.xade.finance/media/pexelsmikhailnilov7672255-1@2x.png"
      />
      <div className="sign-in-form">
              <div className="socialsDiv2" >

            <button className="socials2"  onClick={() => loginSocial("google")}>       <img className="socialsImg" src="https://dashboard.web3auth.io/img/login-google.2a082e2a.svg"/>
         </button> &nbsp;      <button className="socials2"  onClick={() => loginSocial("linkedin")}>
       <img className="socialsImg"  src="https://dashboard.web3auth.io/img/login-linkedin.a1413fd9.svg"/>
            </button>&nbsp;&nbsp;
      <button className="socials2"  onClick={() => loginSocial("facebook")}>
        <img src="https://dashboard.web3auth.io/img/login-facebook.01f67d62.svg" className="socialsImg"/>
      </button>&nbsp;&nbsp;
      <button className="socials2"  onClick={() => loginSocial("twitter")}>    <img className="socialsImg"  src="https://dashboard.web3auth.io/img/login-twitter.d24e7883.svg"/>
      </button>
<br/>
<br/>
<br />
      <div className="web3aunth-div">
        <div className="secured-by-div">Secured by</div>
        <img
          className="logo-for-dark-navbar-2-1"
          alt=""
          src="https://www.xade.finance/media/logofordarknavbar-2-1.svg"
        />
      </div>
    </div>
        <button onClick={loginWithWalletConnect} className="connect-wallet-button">
          <b className="connect-your-wallet">Connect Wallet</b>
        </button>
&nbsp;
<form onSubmit={(e)=>handleLoginWithEmail2(e)}>
        <div className="email-field-div">
<br />
<br />
<br />                
    <input type={'email'} placeholder={'Enter your email'} className="your-email-div"/>          <div className="rectangle-div"></div>
        </div>    
    <button type="submit" className="sign-in-button">
         <b className="sign-in-text">Create</b>
        </button>

{/*}        <div className="email-field-div">
<br />
<br />      
    <input type={'email'} placeholder={'Enter your email'} className="your-email-div"/>          <div className="rectangle-div"></div>
        </div>
{*/}
</form>
        <div className="or-create-account">
<br />       
   <span>or </span
          ><span className="create-account-span"><a style = {{'textDecoration': 'none', 'color':'#ff537c' }} href="/login">sign in</a></span>
            </div>
        <b className="sign-in-b1">Create Account</b>
<br />
      </div>
      <b className="were-all-explorers-and-now-y"
        ></b
      >{/*}<img className="xade-icon" alt="" src="https://www.xade.finance/media/xade.svg" />{*/}</div>
</div>
  );
}

  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
    setShow(prev => !prev)
  };

    const handleClick2 = event => {
    setIsShown2(current => !current);
    setShow2(prev => !prev)
  };




  const btn = document.getElementById('btn');

 const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);


  function changeState() {
    var btn = document.getElementById("btn");
    btn.style.display = 'none';
    var btn2 = document.getElementById("btn2");
    btn2.style.display = 'none';
         var div = document.getElementById("firstPg");
    div.style.display = 'none';
           var div2 = document.getElementById("loginBox");
    div2.style.display = 'none';
  }


  function changeState2() {
    var btn = document.getElementById("btn2");
    btn.style.display = 'none';
    var btn2 = document.getElementById("btn");
    btn2.style.display = 'none';
        var div = document.getElementById("firstPg");
    div.style.display = 'none';
             var div2 = document.getElementById("regBox");
    div2.style.display = 'none';
  }

function takeToRegister(){
window.location.href="/mobileVerify";
}

function takeToLogin(){
window.location.href="/login";
}

  

    const unloggedInView=(

<div>
<h1 className={styles.title}>XADE</h1>
     <BrowserRouter> 
       <Routes> 

 <Route path="/" element={
        <>
          <div id="firstPg" className="text-center text-white">
         <img src="http://app.xade.finance/cat.png" className="rounded mx-auto d-block" alt="..."/>

<br/>
<br/>         <h1 className="text-white">One app to manage all your finance</h1>
<br/>         <h6>Spend, Save, Borrow and Invest with our Super App powered by DeFi.</h6>
<br/>
<br/>
         <button id="btn" onClick={takeToRegister} className={styles.buttonC}>
                <a className="text-center fs-5 text-white">Create an Account</a></button>
<br/>      <button id="btn2" onClick={takeToLogin} className={styles.buttonC}>
                <span className="fs-5 text-white ">I already have one</span></button>
<br />
<br />      
</div>


        </>}
     /> 
 <Route path= "/mobileVerify" element={<Box/>}/> 
 <Route path="/login" element={<Box2 />}/> 
<Route path="/register" element={<Box3 />}/> 


       </Routes> 

    </BrowserRouter>
</div>

  );
  return isLoading ?
    (
      <>
      <h1 className={styles.title}>XADE</h1>
      <div className={styles.loaderWrap}>
        <span className={styles.loader}><span className={styles.loaderInner}></span></span>
        <script src="load.js">
      </script>
      </div>

      </>
    

    ): (
      <div className={styles.grid}>{provider ? loggedInView : unloggedInView}</div>
    )
};

export default Main;
