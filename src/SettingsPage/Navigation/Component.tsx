import React from 'react'
import styles from './Main.module.css'
import { FcSettings } from 'react-icons/fc'
import { CgProfile } from 'react-icons/cg'
import { BiTransferAlt, BiSupport, BiHelpCircle } from 'react-icons/bi'
import { Button } from '@mui/material';
import { FiLogOut } from 'react-icons/fi'



const MainComponent = () => {
    return (
        
        <>
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
                <div className={styles.component + " " + styles.A}>
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
                <div className={styles.component + " " + styles.B}>
                    <p className ={styles.logo}>
                            <BiTransferAlt />
                    </p>

                    <div>
                        <p className = {styles.heading}>
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
                        <BiSupport />
                    </p>

                    <div>
                        <p className = {styles.heading}>
                            Help and Support
                        </p>

                        <p className={styles.content}>
                            Customer support and your queries
                        </p>
                    </div>
              </div> */}
              <hr className = {styles.hr}></hr>
              <div className={styles.component + " " + styles.D}>
                    <p className = {styles.logo}>
                        <BiHelpCircle />
                    </p>

                    <div>
                        <p className = {styles.heading}>
                            Frequently Asked Questions
                        </p>

                        <p className={styles.content}>
                            Answers to the most common questions
                        </p>
                    </div>
              </div>
              <hr className = {styles.hr}></hr>
              <br />
              <div className = {styles.switchButton}>
                    <p style = {{'textAlign': 'center'}}>
                        You are currently in Testnet
                    </p>

                    <button className = {styles.switch}>
                        Switch to <p style = {{'display':'inline', 'color': 'lightblue'}}>Mainnet</p>
                    </button>
              </div>
            <br />
              <hr className = {styles.hr}></hr>
            <br />
              <div className = {styles.logoutButton}>
              <Button endIcon = {<FiLogOut />}sx = {{'height': '2'}} variant="contained" color="error" fullWidth = {true}>
        Log Out
                </Button>
              </div>
              <br />
              <br />
           </div>
        </>
    )
}


export default MainComponent;