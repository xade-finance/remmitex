import React from 'react'
import styles from './Main.module.css'

import { CgProfile } from 'react-icons/cg'
import { BiTransferAlt, BiSupport, BiHelpCircle } from 'react-icons/bi'
import { Button } from '@mui/material';
import { FiLogOut } from 'react-icons/fi'


const MainComponent = () => {
    const [sidebar, setSidebar] = React.useState(false);
    function copyAddr(){
      navigator.clipboard.writeText("0xabcd...123");
      alert("Address copied");   
      }
    const showSidebar = () => setSidebar(!sidebar);
  
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
                <div className={styles.component + " " + styles.A} >
                    <p className = {styles.logo}>
                    <img src="%PUBLIC_URL%/images/icons/p2p.png" />
                    </p>

                <div>
                    <p className = {styles.heading}>
                      Xade P2P
                    </p>

                    <p className={styles.content}>
                    Convert your Fiat Currency to stable coins via our secure and innovative peer to peer exchange model.Coming Soon.
                    </p>
                </div>
                </div>
                <hr className = {styles.hr}></hr>
                <div className={styles.component + " " + styles.B}>
                    <p className ={styles.logo}>
                    
                    </p>

                    <div>
                        <p className = {styles.heading}>
                          Institutional Ramps
                        </p>

                        <p className={styles.content}>
                        Get the best rates to exchange your Fiat for stablecoins pegged to Fiat via our ramp aggregator.Coming Soon
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
              
           </div>
        </>
    )
}


export default MainComponent;
