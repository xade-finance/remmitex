import React from "react";
import Web3 from "web3";
import { useWeb3Auth } from "../../../services/web3auth";
import styles3 from "../../../styles/send.module.css";
import styles from "../../../styles/Home.module.css";
import tickStyles from "../../../styles/tickStyles.module.css";
import tickStyles2 from "../../../styles/tickStyles2.module.css";
import "../../../styles/qrscan.css";
import "../../../styles/QrPage.css";
import "../../../styles/HomePage.css";

import countries from "./allCountries";
import { Country, PhoneNumber } from "./allCountries";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Send = () => {
  const navigate = useNavigate();
  let [current, setCurrent] = React.useState(0); // Phone number accept
  let [address, setAddress] = React.useState("");
  let [receipt, setReceipt] = React.useState<any>(null);
  let [cc, setCC] = React.useState(0);
  let [num, setNum] = React.useState("");
  let [amount, setAmount] = React.useState(0.0);
  let [error, setError] = React.useState({
    message: "",
    style: { color: "rgba(251, 251, 251, 0.6)" },
    error: false,
  });
  const { provider } = useWeb3Auth();
  const [username, setUser] = React.useState<any>("");

  const handleSendAmountToAddress = async (e: any) => {
    e.preventDefault();
    if (amount <= 0) {
      setError({
        ...error,
        message: "Please enter a valid amount",
        style: { color: "red" },
        error: true,
      });
      return;
    }
    alert(`Address: ${address} | Amt: ${amount}`);
    const account = await provider?.signAndSendTransaction(
      address,
      amount.toString()
    );
    console.log(account);
    if (account == false) {
      setReceipt({ message: "Invalid parameters, please try again." });
      setCurrent(3);
    } else if (account.status == false) {
      setReceipt(account);
      setCurrent(3);
    } else if (account.status == true) {
      console.log("yeahh");
      account.effectiveGasPrice = Web3.utils.fromWei(
        account.effectiveGasPrice?.toString() || "",
        "ether"
      );
      setReceipt(account);
      setCurrent(2);
    } else {
      console.log("fuck");
    }
  };

  function retrieveAddr(e: any) {
    alert("yo");
    e.preventDefault();
    if (cc == 0) {
      setError({
        ...error,
        message: "Please select a valid phone number",
        style: { color: "red" },
        error: true,
      });
    } else if (cc == 145155141151154) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          if (xhr.status == 404 || xhr.status == 500) {
            setError({
              ...error,
              message: "Please select a valid email address",
              style: { color: "red" },
              error: true,
            });
            return;
          } else {
            let xhr3 = new XMLHttpRequest();

            xhr3.onreadystatechange = function () {
              if (xhr3.readyState == XMLHttpRequest.DONE) {
                if (xhr3.status == 200) {
                  setUser(xhr3.responseText);
                } else {
                  setUser("");
                }
              }
            };
            xhr3.open(
              "GET",
              `https://user.api.xade.finance?address=${xhr.responseText}`,
              true
            );
            xhr3.send(null);
            console.log(
              `https://emailfind.api.xade.finance?phone=${
                String(cc) + String(num)
              }`
            );
            setAddress(xhr.responseText);
            console.log(xhr.responseText);
            setCurrent(1);
            setError({
              error: false,
              message: "",
              style: { color: "rgba(251, 251, 251, 0.6)" },
            });
          }
        }
      };
      xhr.open(
        "GET",
        `https://emailfind.api.xade.finance?email=${String(num)}`,
        true
      );
      xhr.send(null);
    } else if (
      cc != 145155141151154 &&
      num.toString().length != 10 &&
      typeof num != "number"
    ) {
      setError({
        ...error,
        message: "Please select a valid phone number",
        style: { color: "red" },
        error: true,
      });
    } else {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          if (xhr.status == 404 || xhr.status == 500) {
            setError({
              ...error,
              message: "Please select a valid phone number",
              style: { color: "red" },
              error: true,
            });
          } else {
            let xhr3 = new XMLHttpRequest();

            xhr3.onreadystatechange = function () {
              if (xhr3.readyState == XMLHttpRequest.DONE) {
                if (xhr3.status == 200) {
                  setUser(xhr3.responseText);
                } else {
                  setUser("");
                }
              }
            };
            xhr3.open(
              "GET",
              `https://user.api.xade.finance?address=${xhr.responseText}`,
              true
            );
            xhr3.send(null);
            console.log(
              `https://mobile.api.xade.finance?phone=${
                String(cc) + String(num)
              }`
            );
            setAddress(xhr.responseText);
            console.log(xhr.responseText);
            setCurrent(1);
            setError({
              error: false,
              message: "",
              style: { color: "rgba(251, 251, 251, 0.6)" },
            });
          }
        }
      };
      xhr.open(
        "GET",
        `https://mobile.api.xade.finance?phone=${String(cc) + String(num)}`,
        true
      );
      xhr.send(null);
    }
  }

  return (
    <div style={{ margin: "5px" }}>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <div style={{ marginTop: "0", color: "#fff", height: "100%" }}>
          <br />
          <BiArrowBack size={32} />
        </div>
      </div>
      {current == 0 ? (
        <>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 className={styles3.element}>Enter mobile number/email</h1>
          <p id="error" style={error.style} className={styles.error}>
            {error.message}
          </p>

          <div className={styles.number_input} id="phonenums">
            <form
              onSubmit={(e) => retrieveAddr(e)}
              className={styles.number_form}
            >
              <div className={styles.flexContainer}>
                <section className={styles.countryCode}>
                  <div className={styles.flexContainerCountry}>
                    <section className={styles.callingCodeTitle}>
                      Country Code <a className={styles.red}></a>
                    </section>

                    <section>
                      <select
                        id="cc"
                        className={styles.selectForm}
                        onChange={(e) => {
                          setCC(parseInt(e.target.value));
                          console.log(cc);
                        }}
                      >
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
                      Mobile Number/Email Address
                    </section>

                    <section>
                      <input
                        id="num"
                        onChange={(e) => setNum(e.target.value)}
                        type="text"
                        className={styles.inputForm}
                        autoFocus
                      />
                    </section>
                  </div>
                </section>
              </div>
              <br />
              <br />
              <br />
              <div className={styles3.submitSection}>
                <button type="submit" className={styles3.submitButton}>
                  Proceed
                </button>
              </div>
            </form>
          </div>
        </>
      ) : current == 1 ? (
        <>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 style={{ padding: "1rem" }} className={styles3.element}>
            Enter amount
          </h1>
          <p id="error" style={error.style} className={styles.error}>
            {error.message}
          </p>

          <form
            style={{ padding: "1rem" }}
            onSubmit={(e) => {
              // Some web3auth function
              handleSendAmountToAddress(e);
            }}
          >
            <section
              className={styles.phoneNumber}
              style={{ backgroundColor: "#000" }}
            >
              <div className={styles.flexContainerCountry}>
                <section className={styles.callingCodeTitle}>
                  <div className={styles.inputForAmt}>
                    <a
                      style={{
                        display: "inline-block",
                        color: "#fff",
                        fontSize: "25px",
                      }}
                    >
                      $
                    </a>

                    <input
                      id="num"
                      step="any"
                      min={0}
                      onChange={(e) => setAmount(parseFloat(e.target.value))}
                      value={amount}
                      style={{
                        display: "inline-block",
                        width: "90%",
                        backgroundColor: "#000",
                        color: "#fff",
                        fontSize: "80px",
                      }}
                      className={styles.inputForm}
                      type="number"
                      autoFocus
                    />
                  </div>
                </section>

                <section></section>
              </div>
            </section>
            <br />
            <br />
            {/* <h3 className={styles3.element2}>Transaction Details</h3> */}

            <div className={styles3.contentWrapper}>
              <div className={styles3.information}>
                <p className={styles3.informationInformation}>
                  Recipient (Name) &nbsp;&nbsp;
                </p>
                <p
                  className={styles3.informationInformation}
                  style={{ color: "white" }}
                >
                  {username}
                </p>
              </div>
            </div>

            <div className={styles3.contentWrapper}>
              <div className={styles3.information}>
                <p className={styles3.informationInformation}>
                  Recipient (Address)
                </p>
                <p
                  style={{ color: "white" }}
                  onClick={() => alert(receipt.to)}
                  className={styles3.informationInformation}
                >
                  {address.slice(0, 6)}...{address.slice(-3)}{" "}
                </p>
              </div>
            </div>

            <div className={styles3.contentWrapper}>
              <div className={styles3.information}>
                <p className={styles3.informationInformation}>Amount</p>
                <p
                  className={styles3.informationInformation}
                  style={{ color: "white" }}
                >
                  {amount}
                </p>
              </div>
            </div>

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
      ) : current == 2 ? (
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

          <div className={styles3.contentWrapper}>
            <div className={tickStyles.and}>Transaction successful! </div>
          </div>
          <br />
          <br />
          <div className={styles3.contentWrapper}>
            <div className={styles3.information}>
              <p className={styles3.informationInformation}>Recipient(Name)</p>
              <p className={styles3.informationInformation}>{username}</p>
            </div>
          </div>

          <div className={styles3.contentWrapper}>
            <div className={styles3.information}>
              <p className={styles3.informationInformation}>
                Recipient (Address){" "}
              </p>
              <p
                onClick={() => alert(receipt.to)}
                className={styles3.informationInformation}
              >
                {receipt.to.slice(0, 6)}...{receipt.to.slice(-3)}
              </p>
            </div>
          </div>
          {/* <br /> */}

          <div className={styles3.contentWrapper}>
            <div className={styles3.information}>
              <p className={styles3.informationInformation}>Amount Sent</p>
              <p className={styles3.informationInformation}>{amount}</p>
            </div>
          </div>
          {/* <br /> */}

          <div className={styles3.contentWrapper}>
            <div className={styles3.information}>
              <p className={styles3.informationInformation}>Gas Fees</p>
              <p className={styles3.informationInformation}>
                {receipt.effectiveGasPrice}
              </p>
            </div>
          </div>
          {/* <br /> */}

          <div className={styles3.contentWrapper}>
            <div className={styles3.information}>
              <p className={styles3.informationInformation}>
                Transaction Index
              </p>
              <a
                target="_blank"
                className={styles3.linkage}
                href={`https://alfajores-blockscout.celo-testnet.org/tx/${receipt.transactionHash}/token-transfers`}
              >
                {receipt.transactionHash.slice(0, 6)}...
                {receipt.transactionHash.slice(-3)}
              </a>
            </div>
          </div>
          {/* <br /> */}
        </>
      ) : current == 3 ? (
        <>
          <div className={tickStyles2.wrapper}>
            {" "}
            <svg
              className={tickStyles2.checkmark}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              {" "}
              <circle
                className={tickStyles2.checkmark__circle}
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />{" "}
              <path
                className={tickStyles2.checkmark__check}
                fill="none"
                d="M16 16 36 36 M36 16 16 36"
              />
            </svg>
          </div>

          <div className={styles3.contentWrapper}>
            <div className={tickStyles2.and}>Transaction unsuccessful! </div>
          </div>
          <br />
        </>
      ) : current == 4 ? (
        <></>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Send;
