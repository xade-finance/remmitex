import React from 'react'
import styles from './Styles/Main.module.css'
import { style } from '@mui/system'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Deposit from './Modals/Deposit'
import Withdraw from './Modals/Withdraw'
import { ImCross } from 'react-icons/im'

const stylex = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#000',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Main() {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleOpen2 = () => setOpen2(true);

    const handleClose = () => setOpen(false);
    const handleClose2 = () => setOpen2(false);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    const month = months[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();

    const date = month + " " + day + ", " + year;
    
    return (
        <>
        <Modal
            open = {open}
            onClose={handleClose}
            >
        <Box sx={stylex}>
        <div onClick={handleClose}>
              <div style={{ marginTop: "0", color: "#fff", height: "100%" }}>
                <br />
                <ImCross size={26}/>
              </div>
            </div>

            <Deposit />
        </Box>  
        </Modal>

        <Modal
            open = {open2}
            onClose={handleClose2}
            >
        <Box sx={stylex}>
        <div onClick={handleClose2}>
              <div style={{ marginTop: "0", color: "#fff", height: "100%" }}>
                <br />
                <ImCross size={26}/>
              </div>
            </div>
            <Withdraw />
        </Box>  
        </Modal>
        <div>
            <div className={styles.heading}>Your Savings</div>

            <div className = {styles.boxWrap}>
                <div className = {styles.firstWrap}>
                <div className = {styles.boxA}>
                    <div>
                    <div className  = {styles.topSection}>
                        Total amount deposited
                    </div>

                    <div className = {styles.amountDep}>
                        $0.0
                    </div>
                    </div>
                    <div style = {{'alignSelf': 'flex-end', 'margin': '1rem'}}>
                        <button style = {{'color': '#5566FF'}}className = {styles.rightBottom} onClick = {handleOpen}>
                            Deposit
                        </button>

                        <button style = {{'color': '#5566FF'}}className = {styles.rightBottom} onClick = {handleOpen2}> 
                            Withdraw
                        </button>
                    </div>
                </div>
                <div className = {styles.boxB}>
                    <div className  = {styles.topSection}>
                        Total Interest earned
                    </div>

                    <div className = {styles.amountInterest}>
                        $0.0
                    </div>

                    {/* <button style = {{'color': '#E24949'}} className = {styles.rightBottom}>
                        Coming soon
                    </button> */}
                </div>
                </div>
                <div className = {styles.boxC}>
                    <div className  = {styles.topSection}>
                        Annual Percentage Yield
                    </div>

                    <div className = {styles.yieldAmount}>
                        <p className = {styles.first}>7.1%</p>
                        <p className = {styles.second}>{date}</p>
                    </div>  

                    <div className = {styles.savingsRate}>
                    <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}