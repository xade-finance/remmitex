import count from "./CountDown.module.css";
import countries from "./allCountries";
import { Country, PhoneNumber } from "./allCountries";
import "./NewLogin.css";
import Popup from "reactjs-popup";
import OnramperWidget from "@onramper/widget";
import "reactjs-popup/dist/index.css";
import Web3 from "web3";
import { FaCopy, FaExternalLinkAlt } from "react-icons/fa";
import { getNormalTransactionsByAddress } from "../services/polyScan";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import React from "react";
import styles from "../styles/Home.module.css";
import Loader from "./Loader";
import styles2 from "./Payments.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "reactjs-popup/dist/index.css";
import { FormEvent, useEffect, useState } from "react";
import Investments from "./INVESTMENTS";
import styles3 from "./send.module.css";
import { WALLET_ADAPTERS } from "@web3auth/base";
import { useWeb3Auth } from "../services/web3auth";
import Saving from "../Savings";
import tickStyles from "./tickStyles.module.css";
import RegisterBox from "./register";
import "./QrPage.css";
import { ImCross } from "react-icons/im";
import { FiShare } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import "./qrscan.css";
import { Html5QrcodeScanner } from "html5-qrcode";
import CarouselCard1 from "./CarouselCard/CarouselCard1";
import CarouselCard3 from "./CarouselCard/CarouselCard3";
import CarouselCard4 from "./CarouselCard/CarouselCard4";
import CarouselCard2 from "./CarouselCard/CarouselCard2";
import { Layout } from "./Layout";
import "./HomePage.css";
import { TbQrcode } from "react-icons/tb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Send from "./Send.tsx";
import { alertTitleClasses } from "@mui/material";

var cc;
var num;

window.alert = function () {};

type Props = {};

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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
            onlyPaymentMethods: [
              "creditCard",
              "bankTransfer",
              "applePay",
              "googlePay",
              "paynow",
              "fps",
              "alipay-hk",
              "prompt-pay",
              "instapay",
              "upi",
              "gojek-id",
              "viettel-pay",
              "duit-now",
              "ideal",
              "bancontact",
              "giropay",
              "sofort",
              "sepaBankTransfer",
            ],
          }}
          darkMode={true}
          redirectURL="https://app.xade.finance/"
        />
      </div>
    </div>
  );
};

var secret = "";
var characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var charactersLength = characters.length;
for (var i = 0; i < 50; i++) {
  secret += characters.charAt(Math.floor(Math.random() * charactersLength));
}

function storenum(c, n) {
  var phone = c.replace("+", "") + "" + n;
  var data = `{"phone":"${phone}","id":"${secret}"}`;
  var s = new XMLHttpRequest();
  s.open("POST", "https://mongo.api.xade.finance");
  s.send(data);
}

const Main = () => {
  const {
    provider,
    login,
    logout,
    loginWithWalletConnect,
    getUserInfo,
    getAccounts,
    readAddress,
    userData,
    getBalance,
    isLoading,
    signAndSendTransaction,
    userPic,
  } = useWeb3Auth();
  const [transactionHistory, setTransactionHistory] = useState<any[]>([]);

  const [username, setUsername] = useState("");

  useEffect(() => {
    const handleGetUser = async () => {
      const user = await userData();
      setUsername(user);
    };
    if (provider) {
      handleGetUser();
    }
  }, [provider, username]);

  const [img, setImg] = useState("");

  useEffect(() => {
    const handleGetImg = async () => {
      const pic = await userPic();
      setImg(pic);
    };
    if (provider) {
      handleGetImg();
    }
  }, [provider, img]);

  const [mainAccount, setMainAccount] = useState("");

  const handleGetNormalTransactionByAddress = async () => {
    let transactions = await getNormalTransactionsByAddress(mainAccount);
    setTransactionHistory(transactions.result);
  };

  useEffect(() => {
    const handleGetAccount = async () => {
      const account = await provider?.readAddress();
      setMainAccount(account);
    };
    if (provider) {
      handleGetAccount();
    }
  }, [provider, mainAccount]);

  const isReady = () => {
    return mainAccount !== "";
  };

  useEffect(() => {
    if (isReady()) {
      handleGetNormalTransactionByAddress();
    }
  }, [mainAccount]);

  const handleLoginWithEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.target as any)[0].value;
    login(WALLET_ADAPTERS.OPENLOGIN, "email_passwordless", email);
  };

  const TxHistory = () => {
    useEffect(() => {
      for (var i = 0; i < transactionHistory.length; i++) {
        var currentTransac =
          transactionHistory[i].to.toString().toLowerCase() ===
          mainAccount.toString().toLowerCase()
            ? transactionHistory[i].from
            : transactionHistory[i].to;
        var finalVal =
          currentTransac.substring(0, 6) +
          "..." +
          currentTransac.substring(currentTransac.length - 3);
        if (
          transactionHistory[i].to.toString().toLowerCase() ===
          mainAccount.toString().toLowerCase()
        ) {
          transactionHistory[i].from = finalVal;
        } else {
          transactionHistory[i].to = finalVal;
        }
      }
    }, []);

    const addressShortner = (transaction: any) => {
      const address =
        transaction.to.toString().toLowerCase() ===
        mainAccount.toString().toLowerCase()
          ? transaction.from
          : transaction.to;
      const addressShortened =
        address.substring(0, 6) + "..." + address.substring(address.length - 3);
      return addressShortened;
    };

    const [price, setPrice] = useState("");
    var xhr2 = new XMLHttpRequest();
    xhr2.onreadystatechange = function () {
      if (xhr2.readyState == XMLHttpRequest.DONE) {
        setPrice(xhr2.responseText);
      }
    };

    xhr2.open("GET", "https://price.api.xade.finance/celo");
    xhr2.send();
    return (
      <div>
        <br />
        <div className="topBar">
          <Link to="/">
            <div className="goBack">
              <ImCross />
            </div>
          </Link>
          <div className="buttonHolderQrPage">
            <div
              className="qrButtonLeftinActive"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <h2>Transaction</h2>
            </div>
            <div
              className="qrButtonRightActive"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <h2>&nbsp;History</h2>
            </div>
          </div>

          <div className="share" style={{ visibility: "hidden" }}>
            <FiShare />
          </div>
        </div>
        <div className="activityContent">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {transactionHistory.map((transaction, index) => (
            <div key={index} className="transactionHistory-pills">
              <div className="rightHalf-pill">
                <div className="transactionIndicator-arrows">
                  <svg
                    stroke="currentColor"
                    fill={
                      transaction.to.toString().toLowerCase() ===
                      mainAccount.toString().toLowerCase()
                        ? "green"
                        : "red"
                    }
                    stroke-width="0"
                    viewBox="0 
0 16 16"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={
                        transaction.to.toString().toLowerCase() ===
                        mainAccount.toString().toLowerCase()
                          ? "M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"
                          : "M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"
                      }
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="leftHalf-pill">
                <div className="transaction-history-line1">
                  &nbsp;&nbsp;
                  <div className="address-styling">
                    {addressShortner(transaction)}
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      href={`https://alfajores-blockscout.celo-testnet.org/tx/${transaction.hash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <div className="transaction-history-line2">
                  &nbsp;&nbsp;
                  <div className="amount-time-stlying">
                    {(parseFloat(transaction.value) / Math.pow(10, 18)).toFixed(
                      2
                    )}
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="amount-time-stlying">
                    {new Date(transaction.timeStamp * 1000)
                      .toString()
                      .substring(4, 21)}
                  </div>
                  &nbsp;&nbsp;
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const HomePage = (props: Props) => {
    const addressShortner = (transaction: any) => {
      const address =
        transaction.to.toString().toLowerCase() ===
        mainAccount.toString().toLowerCase()
          ? transaction.from
          : transaction.to;
      const addressShortened =
        address.substring(0, 6) + "..." + address.substring(address.length - 3);
      return addressShortened;
    };

    type Props = {};

    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    let symbol = "CELO";
    let value = "0.00";

    const [amount, setAmt] = useState(0);

    useEffect(() => {
      const handleGetBalance = async () => {
        const bal = await provider?.getBalance();
        setAmt(bal);
      };
      if (provider) {
        handleGetBalance();
      }
    }, [provider, amount]);
    const amountStr = amount.toString();
    const [price, setPrice] = useState(0);
    var donezo = false;
    var xhr2 = new XMLHttpRequest();
    let balCUSD;
    useEffect(() => {
      xhr2.onreadystatechange = async function () {
        if (xhr2.readyState == XMLHttpRequest.DONE) {
          try {
            if (xhr2.status == 200) {
              try {
                const usdJson = await JSON.parse(xhr2.responseText);
                setCUSD(usdJson["result"]);

                setPrice(balCUSD);
                donezo = true;
              } catch (e: any) {
                console.log("xhr2.status", e + xhr2.status);
              }
            }
          } catch (e) {
            console.log("xhr2.onreadystatechange", e + xhr2.onreadystatechange);
          }
        }
        return null;
      };
      xhr2.open(
        "GET",
        `https://explorer.celo.org/alfajores/api?module=account&action=tokenbalance&contractaddress=0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1&address=${mainAccount}`
      );
      xhr2.send();
    }, [, price, balCUSD]);

    const usdBal = (parseFloat(price) / Math.pow(10, 18)).toFixed(2);

    function returnUser(walletAddr: any) {
      var finalVal = "";
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.status == 200) {
          finalVal = xhr.responseText;
        } else {
          finalVal = walletAddr;
        }
      };

      xhr.open("GET", `https://user.api.xade.finance?address=${walletAddr}`);
      xhr.send(null);

      return finalVal;
    }
    const latest = transactionHistory.slice(0, 5);

    return (
      <div className="container">
        <div className="carouselHolder">
          <Slider {...settings}>
            <CarouselCard1 />

            <CarouselCard2 />

            <CarouselCard3 />

            <CarouselCard4 />
          </Slider>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="myActivity">
          <div className="totalBalance">
            <p className="label">Checking Account</p>
            <p className="value">${usdBal}</p>
          </div>
          <br />
          <br />
          {latest.map((transaction, index) => (
            <div key={index} className="transactionHistory-pills2">
              <div className="rightHalf-pill">
                <div className="transactionIndicator-arrows">
                  <svg
                    stroke="currentColor"
                    fill={
                      transaction.to.toString().toLowerCase() ===
                      mainAccount.toString().toLowerCase()
                        ? "green"
                        : "red"
                    }
                    stroke-width="0"
                    viewBox="0 
0 16 16"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={
                        transaction.to.toString().toLowerCase() ===
                        mainAccount.toString().toLowerCase()
                          ? "M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"
                          : "M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"
                      }
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="leftHalf-pill">
                <div className="transaction-history-line1">
                  &nbsp;&nbsp;
                  <div className="address-styling">
                    {addressShortner(transaction)}
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      href={`https://alfajores-blockscout.celo-testnet.org/tx/${transaction.hash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <div className="transaction-history-line2">
                  &nbsp;&nbsp;
                  <div className="amount-time-stlying">
                    {(parseFloat(transaction.value) / Math.pow(10, 18)).toFixed(
                      2
                    )}
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="amount-time-stlying">
                    {new Date(transaction.timeStamp * 1000)
                      .toString()
                      .substring(4, 21)}
                  </div>
                  &nbsp;&nbsp;
                </div>
              </div>
            </div>
          ))}
          <br />
          <br />
          <button className="txBtn">
            <a
              href="/history"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              View Transaction History
            </a>
          </button>
          <br />
          <br />
        </div>
        <br />
        <br />
        <br />
        <div className="utilityButtons">
          <div className="buttonHolder">
            <div className="paymentsButton">
              <Link to="/send">
                <a style={{ color: "#fff", textDecoration: "none" }}>Send</a>
              </Link>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="paymentsButton">
              <Link to="/qr">
                <a style={{ color: "#fff", textDecoration: "none" }}>Request</a>
              </Link>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/qr">
              <div className="scanner">
                <TbQrcode />
              </div>
            </Link>
          </div>
        </div>
        <br />
{" "}
      </div>
    );
  };

  const handleLoginWithEmail2 = (e: FormEvent<HTMLFormElement>) => {
   
    e.preventDefault();
    const email = (e.target as any)[0].value;
    login(WALLET_ADAPTERS.OPENLOGIN, "email_passwordless", email);
  };
  const SendQR = () => {
    const params = useParams();
    let [current, setCurrent] = React.useState(0); // Phone number accept

    let [amount, setAmount] = React.useState(0);
    let [error, setError] = React.useState({
      message: "",
      style: { color: "rgba(251, 251, 251, 0.6)" },
      error: false,
    });
    const handleSendAmountToAddress = async (e: any) => {
      e.preventDefault();
      const addr = params.address;

      if (amount <= 0) {
        setError({
          ...error,
          message: "Please enter a valid amount",
          style: { color: "red" },
          error: true,
        });
        return;
      }
      alert(`Address: ${addr} | Amt: ${amount}`);
      setCurrent(1);
      await signAndSendTransaction(addr, amount.toString());
    };
    return (
      <div>
        {current == 0 ? (
          <>
            <br />
            <br />
            <br />
            <br />
            <h1 className={styles3.element}>Enter amount</h1>
            <p id="error" style={error.style} className={styles.error}>
              {error.message}
            </p>

            <form
              onSubmit={(e) => {
                handleSendAmountToAddress(e);
              }}
            >
              <section className={styles.phoneNumber}>
                <div className={styles.flexContainerCountry}>
                  <section className={styles.callingCodeTitle}>
                    Amount <a className={styles.red}>*</a>
                  </section>

                  <section>
                    <input
                      id="num"
                      onChange={(e) => setAmount(parseInt(e.target.value))}
                      value={amount}
                      className={styles.inputForm}
                      type="number"
                      autoFocus
                    />
                  </section>
                </div>
              </section>
              <br />
              <br />
              <br />

              <div className={styles3.submitSection}>
                <button type="submit" className={styles3.submitButton2}>
                  Confirm transaction
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <div className={tickStyles.wrapper}>
              {" "}
              <svg
                className={tickStyles.checkmark}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                {" "}
                <circle
                  className={tickStyles.checkmark__circle}
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />{" "}
                <path
                  className={tickStyles.checkmark__check}
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </div>

            <div className={tickStyles.and}>Transaction successful! </div>
          </>
        )}
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
        console.log(`Code matched = ${decodedText}`, decodedResult);
        const walletAddr = decodedText.split("@")[1];
        window.location.href = "/sendQR/" + walletAddr;
      }

      function onScanFailure(error) {
        console.warn(`Code scan error = ${error}`);
      }

      let html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: { width: 250, height: 250 } },
        false
      );
      html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    });
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
          <div className={"mainContent" + "active"}>
            <div className={"contentWrapper"}>
              <QRScanner />
            </div>
          </div>
        );
    };

    function copyAddr() {
      navigator.clipboard.writeText(mainAccount);
      alert("Address copied");
    }
    return (
      <div className="containerQrPage">
        <div className="topBar">
          <Link to="/">
            <div className="goBack">
              <ImCross />
            </div>
          </Link>
          <div className="buttonHolderQrPage">
            <div
              className={"qrButtonLeft " + (isActive ? "active" : "inActive")}
              onClick={() => setActive(!isActive)}
            >
              My Code
            </div>
            <div
              className={"qrButtonRight " + (isActive ? "inActive" : "active")}
              onClick={() => setActive(!isActive)}
            >
              Scan
            </div>
          </div>

          <div className="share">
            <FiShare />
          </div>
        </div>
        <br />
        <br />
        <div
          className={
            "mainContent " + (isActive ? "myInfoInActive" : "myInfoActive")
          }
        >
          <div className="contentWrapper">
            <div className="infoHolder">
              <div>
                <img className="pfp" src={img} />
              </div>
              <br />
              <br />
              <div>
                <h2>{username}</h2>
              </div>
              <div>
                <button className="blackBtn" onClick={displayAddr}>
                  <h4>
                    {mainAccount.substring(0, 6)}...
                    {mainAccount.substring(mainAccount.length - 3)}
                  </h4>
                </button>
                <button className="blackBtn">
                  <FaCopy onClick={copyAddr} />
                </button>
              </div>
              <br />
              <div>
                <button className="pillBtn">🟢 Celo Alfajores Testnet</button>
              </div>
            </div>
            <div className="QrHolder">
              <div className="QrWrapper">
                <QRCode value={QRCodeValue} />
              </div>
            </div>
          </div>
        </div>
        {showReader()}
      </div>
    );
  };

  const handleSendAmountToAddress = async () => {
    var toAddr = document.getElementById("toAddr").value;
    var amt = document.getElementById("amount").value;
    console.log("trying");
    await signAndSendTransaction(toAddr, amt);
  };

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
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

 
  const CountDown = () => {
    function addZero(a: number) {
      if (a.toString().length == 1) return "0" + a.toString();
      return a.toString();
    }

    const endDate = new Date("November 30, 2022 00:00:00");

    const [brokenUp, setBrokenUp] = React.useState({
      days: 19,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    useEffect(() => {
      const interval = setInterval(() => {
        console.log("This will run every second!");
        const now = new Date();
        const days = Math.floor(
          Math.abs(endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
        );
        const hours = Math.floor(
          (Math.abs(endDate.getTime() - now.getTime()) / (1000 * 60 * 60)) % 24
        );
        const minutes = Math.floor(
          (Math.abs(endDate.getTime() - now.getTime()) / (1000 * 60)) % 60
        );
        const seconds = Math.floor(
          (Math.abs(endDate.getTime() - now.getTime()) / 1000) % 60
        );
        setBrokenUp({
          ...brokenUp,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        });
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return (
      <>
        <div className={count.center}>
          <div className={count.heading}>
            Xade Mainnet V1 is launching on 30th November 2022
            <br />
            <br />
          </div>
          <div className={count.wrapper}>
            <div className={count.elWrapper + " " + count.daysWrapper}>
              <div className={count.elA}>
                <div className={count.daysDiv}>{addZero(brokenUp.days)}</div>
              </div>
              <div className={count.elB}>days</div>
            </div>
            <div className={count.elWrapper + " " + count.hoursWrapper}>
              <div className={count.elA}>{addZero(brokenUp.hours)}</div>
              <div className={count.elB}>hours</div>
            </div>
            <div className={count.elWrapper + " " + count.minsWrapper}>
              <div className={count.elA}>{addZero(brokenUp.minutes)}</div>
              <div className={count.elB}>minutes</div>
            </div>
            <div className={count.elWrapper + " " + count.secondsWrapper}>
              <div className={count.elA}>{addZero(brokenUp.seconds)}</div>
              <div className={count.elB}>seconds</div>
            </div>
          </div>
          <div className={count.footer}>
            <br />
            The countdown has already begun
            <br />
            <br />
            <br />
            <button className={count.takePart}>
              <a
                className={count.btnTxt}
                href="https://discord.com/channels/1023970802099572847/1039229895781404692"
              >
                Take part in the private beta
              </a>
            </button>
            <br />
            <br />
            <br />
          </div>
        </div>
      </>
    );
  };

  const loggedInView =
    (getUserInfo(secret),
    (
      <>
        <div className="App">
          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<CountDown/>} />
  <Route path="/login" element={<CountDown/>} />
               <Route path="/register" element={<CountDown/>} /> */}
              <Route
                path="/investments"
                element={
                  <Layout>
                    <Investments />
                  </Layout>
                }
              />

              <Route path="/payments" element={<></>} />
              <Route
                path="/deposit-withdraw"
                element={
                  <Layout>
                    <DepositWithdraw />
                  </Layout>
                }
              />
              <Route path="/qr" element={<QrCodePage />} />
              <Route
                path="/savings"
                element={
                  <Layout>
                    <Saving />
                  </Layout>
                }
              />
              <Route path="/send" element={<Send />} />
              <Route path="/sendQR/:address" element={<SendQR />} />
              <Route path="/history" element={<TxHistory />} />
              <Route
                path="/"
                element={
                  <Layout>
                    <HomePage />
                  </Layout>
                }
              />
              <Route
                path="/register"
                element={
                  <Layout>
                    <HomePage />
                  </Layout>
                }
              />
              <Route
                path="/login"
                element={
                  <Layout>
                    <HomePage />
                  </Layout>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    ));

  function registerSocial(social: string) {

    login(WALLET_ADAPTERS.OPENLOGIN, social);
  }



  function loginSocial(social: string) {
    login(WALLET_ADAPTERS.OPENLOGIN, social);
  }

  function Box2() {
    return (
      <div>
        <div className="sign-in-div">
          <img
            className="pexels-mikhail-nilov-7672255-1-icon"
            alt=""
            src="https://app.xade.finance/images/astronaut.jpeg"
          />
          
          <div className="sign-in-form">
            <div className="socialsDiv2">
              <button
                className="socials2"
                onClick={() => loginSocial("google")}
              >
                {" "}
                <img
                  className="socialsImg"
                  src="https://dashboard.web3auth.io/img/login-google.2a082e2a.svg"
                />
              </button>{" "}
              &nbsp;{" "}
              <button
                className="socials2"
                onClick={() => loginSocial("linkedin")}
              >
                <img
                  className="socialsImg"
                  src="https://dashboard.web3auth.io/img/login-linkedin.a1413fd9.svg"
                />
              </button>
              &nbsp;&nbsp;
              <button
                className="socials2"
                onClick={() => loginSocial("facebook")}
              >
                <img
                  src="https://dashboard.web3auth.io/img/login-facebook.01f67d62.svg"
                  className="socialsImg"
                />
              </button>
              &nbsp;&nbsp;
              <button
                className="socials2"
                onClick={() => loginSocial("twitter")}
              >
                {" "}
                <img
                  className="socialsImg"
                  src="https://dashboard.web3auth.io/img/login-twitter.d24e7883.svg"
                />
              </button>
              <br />
              <br />
              <br />
              <div className="web3aunth-div">
         
                <img
                  className="logo-for-dark-navbar-2-1"
                  alt=""
                  src="https://app.xade.finance/images/w3a.svg"
                />
              </div>
            </div>
            <button
              onClick={loginWithWalletConnect}
              className="connect-wallet-button"
            >
              <b className="connect-your-wallet">Connect Wallet</b>
            </button>
            &nbsp;
            <form onSubmit={(e) => handleLoginWithEmail2(e)}>
              <div className="email-field-div">
                <br />
                <br />
                <br />
                <input
                  type={"email"}
                  placeholder={"Enter your email"}
                  className="your-email-div"
                />{" "}
                <div className="rectangle-div"></div>
              </div>
              <button type="submit" className="sign-in-button">
                <b className="sign-in-text">Sign in</b>
              </button>
            </form>
            <div className="or-create-account">
              <br />
              <span>or </span>
              <span className="create-account-span">
                <a
                  style={{ textDecoration: "none", color: "#ff537c" }}
                  href="/register"
                >
                  create account
                </a>
              </span>
            </div>
            <b className="sign-in-b1">Sign in</b>
            <br />
          </div>
          <b className="were-all-explorers-and-now-y"></b>
        </div>
      </div>
    );
  }

  function Box() {
    const [state, setState] = React.useState(0);
    const [cc, setCC] = React.useState("");
    const [pnum, setPnum] = React.useState("");

    const numberValidation = (e: FormEvent<HTMLFormElement>) => {
      var error = document.getElementById("error");
      setCC(document.getElementById("cc").value);
      setPnum(document.getElementById("num").value);

      let cc = document.getElementById("cc").value;
      let num = document.getElementById("num").value;

      if (cc == 0) {
        e.preventDefault();
        error.textContent = "Please select a valid country code";
        error.style.color = "red";
        return;
      } else if (num.length != 10) {
        e.preventDefault();
        error.textContent = "Please enter a valid phone number";
        error.style.color = "red";
        return;
      }

      else {
        e.preventDefault();
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          alert(xhr.responseText);

          setState(1);
        };
        xhr.open(
          "GET",
          `https://otp.api.xade.finance/login?phonenumber=${
            cc + num
          }=&channel=sms`
        );

        xhr.send(null);

      }
    };

    const otpValidation = (e: any) => {
      e.preventDefault();
      alert("function called");

      let otpEntered: string =
        document.getElementById("numberinput1").value.toString() +
        document.getElementById("numberinput2").value.toString() +
        document.getElementById("numberinput3").value.toString() +
        document.getElementById("numberinput4").value.toString() +
        document.getElementById("numberinput5").value.toString() +
        document.getElementById("numberinput6").value.toString();
      alert(otpEntered);
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        let jsonObj = JSON.parse(xhr.responseText);
        if (jsonObj.status == "approved") {
          storenum(cc, pnum);
          setState(2);
        } else {
          alert("Incorrect code");
          setState(0);
        }
      };

      xhr.open(
        "GET",
        `https://otp.api.xade.finance/verify?phonenumber=${
          cc + pnum
        }=&code=${otpEntered}`
      );
      xhr.send(null);
    };

    const handleLoginWithEmail2 = (e: FormEvent<HTMLFormElement>) => {
      var error = document.getElementById("error");
    
      e.preventDefault();
      const email = (e.target as any)[0].value;
      login(WALLET_ADAPTERS.OPENLOGIN, "email_passwordless", email);
      storenum(cc, num);

    };

    function skipRegister() {
      setState(2);
    }

    return (
      <div>
        <div className={"container" + styles.login}>
          <div className={styles.loginTitleText}>
            <h1 className="text-center text-white" id="loginTitle">
              {state == 0 ? "Register" : state == 1 ? "Enter OTP" : ""}
            </h1>
          </div>
          <br />
          {state == 0 ? (
            <>
              <section className={styles.mobile}>
                <div className={styles.box}>
                  <p className={styles.subheading}>
                    Step 1: Enter your registered mobile number
                  </p>
                  <p id="error" className={styles.error}></p>

                  <div className={styles.number_input} id="phonenums">
                    <div className={styles.number_form}>
                      <div className={styles.flexContainer}>
                        <section className={styles.countryCode}>
                          <div className={styles.flexContainerCountry}>
                            <section className={styles.callingCodeTitle}>
                              Country Code <a className={styles.red}>*</a>
                            </section>

                            <section>
                              <select id="cc" className={styles.selectForm}>
                            
                                {countries.map((countryName) => (
                                  <option
                                    value={countryName["code"]}
                                  >{`${countryName["name"]}`}</option>
                                ))}
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
                              <input
                                id="num"
                                className={styles.inputForm}
                                type="number"
                                autoFocus
                              />
                            </section>
                          </div>
                        </section>

                    
                      </div>
                    </div>
                  </div>
                  <form
                    onSubmit={(e) => numberValidation(e)}
                    className={"container" + styles.login2}
                  >
                    <div className="text-center">
                      <br />
                      <button
                        style={{
                          border: "none",
                          color: "white",
                          backgroundColor: "black",
                        }}
                        onClick={skipRegister}
                      >
                        Skip for Now
                      </button>
                      <br />
                      <br />
                      <button type="submit" className={styles.continue}>
                        Continue
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            </>
          ) : state == 1 ? (
            <>
              <form
                onSubmit={(e) => {
                  otpValidation(e);
                }}
              >
                <input
                  id="numberinput1"
                  className={styles3.numberInput}
                  type="number"
                  min="0"
                  max="9"
                  onChange={(e) => {
                    e.target.value = e.target.value[0];
                    document.getElementById("numberinput2").focus();
                  }}
                />
                <input
                  id="numberinput2"
                  className={styles3.numberInput}
                  type="number"
                  min="0"
                  max="9"
                  onChange={(e) => {
                    e.target.value = e.target.value[0];
                    document.getElementById("numberinput3").focus();
                  }}
                />
                <input
                  id="numberinput3"
                  className={styles3.numberInput}
                  type="number"
                  min="0"
                  max="9"
                  onChange={(e) => {
                    e.target.value = e.target.value[0];
                    document.getElementById("numberinput4").focus();
                  }}
                />
                <input
                  id="numberinput4"
                  className={styles3.numberInput}
                  type="number"
                  min="0"
                  max="9"
                  onChange={(e) => {
                    e.target.value = e.target.value[0];
                    document.getElementById("numberinput5").focus();
                  }}
                />
                <input
                  id="numberinput5"
                  className={styles3.numberInput}
                  type="number"
                  min="0"
                  max="9"
                  onChange={(e) => {
                    e.target.value = e.target.value[0];
                    document.getElementById("numberinput6").focus();
                  }}
                />
                <input
                  id="numberinput6"
                  className={styles3.numberInput}
                  type="number"
                  min="0"
                  max="9"
                  onChange={(e) => {
                    e.target.value = e.target.value[0];
                  }}
                />
                <br />
                <br />
                <div className="text-center">
                  <button type="submit" className={styles.continue}>
                    Continue
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <div className="sign-in-div">
                <img
                  className="pexels-mikhail-nilov-7672255-1-icon"
                  alt=""
                  src="https://app.xade.finance/images/astronaut.jpeg"
                />
                <div className="sign-in-form">
                  <div className="socialsDiv2">
                    <button
                      className="socials2"
                      onClick={() => loginSocial("google")}
                    >
                      {" "}
                      <img
                        className="socialsImg"
                        src="https://dashboard.web3auth.io/img/login-google.2a082e2a.svg"
                      />
                    </button>{" "}
                    &nbsp;{" "}
                    <button
                      className="socials2"
                      onClick={() => loginSocial("linkedin")}
                    >
                      <img
                        className="socialsImg"
                        src="https://dashboard.web3auth.io/img/login-linkedin.a1413fd9.svg"
                      />
                    </button>
                    &nbsp;&nbsp;
                    <button
                      className="socials2"
                      onClick={() => loginSocial("facebook")}
                    >
                      <img
                        src="https://dashboard.web3auth.io/img/login-facebook.01f67d62.svg"
                        className="socialsImg"
                      />
                    </button>
                    &nbsp;&nbsp;
                    <button
                      className="socials2"
                      onClick={() => loginSocial("twitter")}
                    >
                      {" "}
                      <img
                        className="socialsImg"
                        src="https://dashboard.web3auth.io/img/login-twitter.d24e7883.svg"
                      />
                    </button>
                    <br />
                    <br />
                    <br />
                    <div className="web3aunth-div">
             
                      <img
                        className="logo-for-dark-navbar-2-1"
                        alt=""
                        src="https://app.xade.finance/images/w3a.svg"
                      />
                    </div>
                  </div>
                  <button
                    onClick={loginWithWalletConnect}
                    className="connect-wallet-button"
                  >
                    <b className="connect-your-wallet">Connect Wallet</b>
                  </button>
                  &nbsp;
                  <form onSubmit={(e) => handleLoginWithEmail2(e)}>
                    <div className="email-field-div">
                      <br />
                      <br />
                      <br />
                      <input
                        type={"email"}
                        placeholder={"Enter your email"}
                        className="your-email-div"
                      />{" "}
                      <div className="rectangle-div"></div>
                    </div>
                    <button type="submit" className="sign-in-button">
                      <b className="sign-in-text">Create</b>
                    </button>
                  </form>
                  <div className="or-create-account">
                    <br />
                    <span>or </span>
                    <span className="create-account-span">
                      <a
                        style={{ textDecoration: "none", color: "#ff537c" }}
                        href="/login"
                      >
                        sign in
                      </a>
                    </span>
                  </div>
                  <b className="sign-in-b1">Create Account</b>
                  <br />
                </div>
                <b className="were-all-explorers-and-now-y"></b>
              </div>
            </>
          )}

          <br />
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
            src="https://app.xade.finance/images/astronaut.jpeg"
          />
          <div className="sign-in-form">
            <div className="socialsDiv2">
              <button
                className="socials2"
                onClick={() => loginSocial("google")}
              >
                {" "}
                <img
                  className="socialsImg"
                  src="https://dashboard.web3auth.io/img/login-google.2a082e2a.svg"
                />
              </button>{" "}
              &nbsp;{" "}
              <button
                className="socials2"
                onClick={() => loginSocial("linkedin")}
              >
                <img
                  className="socialsImg"
                  src="https://dashboard.web3auth.io/img/login-linkedin.a1413fd9.svg"
                />
              </button>
              &nbsp;&nbsp;
              <button
                className="socials2"
                onClick={() => loginSocial("facebook")}
              >
                <img
                  src="https://dashboard.web3auth.io/img/login-facebook.01f67d62.svg"
                  className="socialsImg"
                />
              </button>
              &nbsp;&nbsp;
              <button
                className="socials2"
                onClick={() => loginSocial("twitter")}
              >
                {" "}
                <img
                  className="socialsImg"
                  src="https://dashboard.web3auth.io/img/login-twitter.d24e7883.svg"
                />
              </button>
              <br />
              <br />
              <br />
              <div className="web3aunth-div">
        
                <img
                  className="logo-for-dark-navbar-2-1"
                  alt=""
                  src="https://app.xade.finance/images/w3a.svg"
                />
              </div>
            </div>
            <button
              onClick={loginWithWalletConnect}
              className="connect-wallet-button"
            >
              <b className="connect-your-wallet">Connect Wallet</b>
            </button>
            &nbsp;
            <form onSubmit={(e) => handleLoginWithEmail2(e)}>
              <div className="email-field-div">
                <br />
                <br />
                <br />
                <input
                  type={"email"}
                  placeholder={"Enter your email"}
                  className="your-email-div"
                />{" "}
                <div className="rectangle-div"></div>
              </div>
              <button type="submit" className="sign-in-button">
                <b className="sign-in-text">Create</b>
              </button>
            </form>
            <div className="or-create-account">
              <br />
              <span>or </span>
              <span className="create-account-span">
                <a
                  style={{ textDecoration: "none", color: "#ff537c" }}
                  href="/login"
                >
                  sign in
                </a>
              </span>
            </div>
            <b className="sign-in-b1">Create Account</b>
            <br />
          </div>
          <b className="were-all-explorers-and-now-y"></b>
        </div>
      </div>
    );
  }

  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
    setShow((prev) => !prev);
  };

  const handleClick2 = (event) => {
    setIsShown2((current) => !current);
    setShow2((prev) => !prev);
  };

  const btn = document.getElementById("btn");

  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);

  function changeState() {
    var btn = document.getElementById("btn");
    btn.style.display = "none";
    var btn2 = document.getElementById("btn2");
    btn2.style.display = "none";
    var div = document.getElementById("firstPg");
    div.style.display = "none";
    var div2 = document.getElementById("loginBox");
    div2.style.display = "none";
  }

  function changeState2() {
    var btn = document.getElementById("btn2");
    btn.style.display = "none";
    var btn2 = document.getElementById("btn");
    btn2.style.display = "none";
    var div = document.getElementById("firstPg");
    div.style.display = "none";
    var div2 = document.getElementById("regBox");
    div2.style.display = "none";
  }

  function takeToRegister() {
    window.location.href = "/register";
  }

  function takeToLogin() {
    window.location.href = "/login";
  }

  const unloggedInView = (
    <div>
      <h1 className={styles.title}>XADE</h1>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="firstPg" className="text-center text-white">
                  <img
                    src="http://app.xade.finance/cat.png"
                    className="rounded mx-auto d-block"
                    alt="..."
                  />
                  <br />
                  <br />{" "}
                  <h1 className="text-white">
                    One app to manage all your finance
                  </h1>
                  <br />{" "}
                  <h6>
                    Spend, Save, Borrow and Invest with our Super App powered by
                    DeFi.
                  </h6>
                  <br />
                  <br />
                  <button
                    id="btn"
                    onClick={takeToRegister}
                    className={styles.buttonC}
                  >
                    <a className="text-center fs-5 text-white">
                      Create an Account
                    </a>
                  </button>
                  <br />{" "}
                  <button
                    id="btn2"
                    onClick={takeToLogin}
                    className={styles.buttonC}
                  >
                    <span className="fs-5 text-white ">I already have one</span>
                  </button>
                  <br />
                  <br />
                </div>
              </>
            }
          />
          <Route path="/register" element={<Box />} />
          <Route path="/login" element={<Box2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
  return isLoading ? (
    <>
      <h1 className={styles.title}>XADE</h1>
      <div className={styles.loaderWrap}>
        <span className={styles.loader}>
          <span className={styles.loaderInner}></span>
        </span>
        <script src="load.js"></script>
      </div>
    </>
  ) : (
    <div className={styles.grid}>
      {provider ? loggedInView : unloggedInView}
    </div>
  );
};

export default Main;
