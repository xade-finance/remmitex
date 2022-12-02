import React, { useState, useEffect } from 'react';
import { useWeb3Auth } from "../../../services/web3auth";
import styles from './Main.module.css'
import { FcSettings } from 'react-icons/fc'
import { CgProfile } from 'react-icons/cg'
import { BiTransferAlt, BiSupport, BiHelpCircle } from 'react-icons/bi'
import { Button } from '@mui/material';
import { FiLogOut } from 'react-icons/fi'
import count from './Countdown.module.css'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaCopy } from 'react-icons/fa'
import "./style.css";
import { IconContext } from "react-icons"
import { useNavigate } from "react-router-dom";



/*const { provider, userPic, readAddress, userData } = useWeb3Auth();
const[username,setUser]=React.useState<any>(""); 

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

const [mainAccount, setMainAccount] = useState("");

 useEffect(() => {
    const handleGetAccount = async () => {
      const account = await provider?.readAddress();
      setMainAccount(account);
    };
    if (provider) {
      handleGetAccount();
    }
  }, [provider, mainAccount]);
*/

const Navbar =() =>  {
  const [sidebar, setSidebar] = React.useState(false);
  function copyAddr(){
    navigator.clipboard.writeText("0xabcd...123");
    alert("Address copied");   
    }
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle" >
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
   
     <li>
      <img className="nav-text" style={{"width":"50%", "height":"50%", "borderRadius":"100px"}} src="https://p.kindpng.com/picc/s/394-3947019_round-profile-picture-png-transparent-png.png" />
      </li>
       <li  className="nav-text"> 
       <b className="username">{username}</b>
       </li>
       <div className="bar"></div>
       <li className="nav-text vela2">
       <a className="vela2">Email Address: &nbsp;</a><a className="vela email">harshal@xade.finance</a>
       </li>
       {/*}<li  className="nav-text vela2">
       <a className="vela2">Phone Number: &nbsp;</a><a className="vela">+919836711182</a>
       </li>{*/}
       <div className="bar"></div>
       <li className="nav-text vela2">
       <a className="vela2">Wallet Address: </a><a className="vela">&nbsp;{mainAccount.slice(0, 6)}...{mainAccount.slice(-3)} &nbsp; <FaCopy onClick={copyAddr}/></a>
       </li>
       <div className="bar"></div>

       <li className="nav-text vela">
       🟣 Polygon Mainnet
       </li>

       <li className="nav-text vela">
        Chain ID: 0x89 (137)
       </li>
       <div className="bar"></div>

          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
const MainComponent = () => {
  const navigate = useNavigate();
    const [sidebar, setSidebar] = React.useState(false);
    function copyAddr(){
      navigator.clipboard.writeText("0xabcd...123");
      alert("Address copied");   
      }
    const showSidebar = () => setSidebar(!sidebar);
  const { provider, logout, userPic, readAddress, userData, userEmail } = useWeb3Auth();
//const[username,setUser]=React.useState<any>(""); 
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

  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleGetEmail = async () => {
      const mail = await userEmail();
      setEmail(mail);
    };
    if (provider) {
      handleGetEmail();
    }
  }, [provider, email]);

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

const [mainAccount, setMainAccount] = useState("");

 useEffect(() => {
    const handleGetAccount = async () => {
      const account = await provider?.readAddress();
      setMainAccount(account);
    };
    if (provider) {
      handleGetAccount();
    }
  }, [provider, mainAccount]);
  function copyAddr(){
    navigator.clipboard.writeText(mainAccount);
    alert("Address copied");
console.log(email);
    }
function logoutUser(){
logout()
window.location.href="/"
}
    return (
     
        <>
        <IconContext.Provider value={{ color: "undefined" }}>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle" >
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
   
     <li>
      <img className="nav-text" style={{"width":"50%", "height":"50%", "borderRadius":"100px"}} src={img} />
      </li>
       <li  className="nav-text"> 
       <b className="username">{username}</b>
       </li>
       <div className="bar"></div>
       <li className="nav-text vela2">
       <a className="vela2">Email Address: &nbsp;</a><a className="vela email">{email}</a>
       </li>
      {/*} <li  className="nav-text vela2">
       <a className="vela2">Phone Number: &nbsp;</a><a className="vela">+919836711182</a>
       </li>{*/}
       <div className="bar"></div>
       <li className="nav-text vela2">
       <a className="vela2">Wallet Address: </a><a className="vela">&nbsp;{mainAccount.slice(0, 6)}...{mainAccount.slice(-3)} &nbsp; <FaCopy onClick={copyAddr}/></a>
       </li>
       <div className="bar"></div>

       <li className="nav-text vela">
        🟢Celo Mainnet
       </li>

       <li className="nav-text vela">
        Chain ID: 0xa4ec (42220)
       </li>
       <div className="bar"></div>

          </ul>
        </nav>
      </IconContext.Provider>
            <div className={styles.navCenter}>
                <br /> <br />
                {/* <div className={styles.header + " " + styles.AA}>
                    <p>
                        <FcSettings />
                    </p>

                    <p>
                        Settings
                    </p>
                </div> */}
                <div className={styles.component + " " + styles.A} onClick = {showSidebar}>
                    <p className = {styles.logo}>
                        <CgProfile />
                    </p>

                <div>
                    <p className = {styles.heading}>
                        Your Profile
                    </p>

                    <p className={styles.content}>
                        Check out your profile and information about your wallet
                    </p>
                </div>
                </div>
                <hr className = {styles.hr}></hr>
                           
                    <div className={styles.component + " " + styles.B} onClick = {() => { 
        navigate("/deposits");

}}>
                    
                    <p className ={styles.logo}>
                            <BiTransferAlt style={{color:"white"}} />
                    </p>
                
                    <div>

                        <p style={{color:"white"}} className = {styles.heading}>
                            Deposit/Withdraw
                        </p>

                        <p className={styles.content}>
                            Add Funds to your account via Xade P2P or via our ramp partners
                        </p>
                    </div>
                    
                </div>
          
                
                {/* <hr className = {styles.hr}></hr> */}
              {/* <div className={styles.component + " " + styles.C}>
                    <p className = {styles.logo}>
                        <BiSupport style={{color:"white"}} />
                    </p>

                    <div>
                        <p className = {styles.heading} style={{color:"white"}} >
                            Help and Support
                        </p>

                        <p className={styles.content}>
                            Customer support and your queries
                        </p>
                    </div>
              </div> */}

              <hr className = {styles.hr}></hr>
              
              <div className={styles.component + " " + styles.D} onClick = {() => {  
          
                navigate("/faqs");

}}>
                    <p className = {styles.logo}>
                        <BiSupport style={{color:"white"}} />
                    </p>

                    <div>
                        <p className = {styles.heading} style={{color:"white"}} >
                            Help and Support
                        </p>

                        <p className={styles.content}>
                            Customer support and answers to Frequently Asked Questions
                        </p>
                    </div>
              </div>
              
              <hr className = {styles.hr}></hr>
              <br />
              <div className = {styles.switchButton}>
              <button className={count.takePart}>
              <a
                className={count.btnTxt}
                href="https://discord.com/channels/1023970802099572847/1039229895781404692"
              >
                Take part in Testnet
              </a>
            </button>
              </div>
            <br />
              <hr className = {styles.hr}></hr>
            <br />
              <div className = {styles.logoutButton}>   
                  <p>  Logout <button style={{backgroundColor:"black"}} onClick={logout}><FiLogOut /></button>  </p>
              </div>
              <br />
              <br />
           </div>
        </>
    )
}


export default MainComponent;
