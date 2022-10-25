import React from 'react'
import styles from './Portfolio.module.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles2 from './../Trade/Trade.module.css'

export default function Portfolio()
{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (statev:any) => {
        setState(statev);
        setOpen(false);
    };
    let [amt, setAmt] = React.useState({i: 0.0, c:0.0});
    let [state, setState] = React.useState('Open Positions');
    const style = {
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
    return (
        <>
        <hr className = 'hr' style = {{margin: '5%', color: 'white'}}></hr>
        <br /> 
        {/* <div className = {styles.green}></div> */}
        <div className={styles.center}>

            <div className = {styles.container + " " + styles.container1}> 
                <div style = {{'width': '100%', 'height': '100%'}}>
                <div className = {styles.title}>
                <div className = {styles.head + " " +  styles.g}>Portfolio</div>
                <div onClick = {handleOpen} className = {styles.head + " " +  styles.g}>{state} ⮟</div>
                </div>

<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <p className = {styles2.modalHeading}>Select </p>
    <hr style = {{'color': '#fff'}}></hr>
    <div className = {styles2.contracts}>
            <div className = {styles.options} onClick={() => handleClose('Closed Positions')}>Closed Positions</div>
            <div className = {styles.options} onClick={() => handleClose('Open Positions')}>Open Positions</div>
            <div className = {styles.options} onClick={() => handleClose('Limit orders')}>Limit orders</div>
    </div>
  </Box>
</Modal>                            

                <hr style = {{'width': '100%', 'color': 'grey'}}></hr>
                <br></br>
                <>
                <div className = {styles.title + " " + styles.sub}>
                <div className = {styles.subHead2 + " "}>SIZE</div>
                <div style = {{'textAlign':"left"}} className = {styles.subHead2 + " "}>TIME</div>
                <div style = {{'textAlign':"left"}} className = {styles.subHead2 + " "}>REALIZED PNL</div>
                <div style = {{'textAlign':"center"}} className = {styles.subHead2 + " "}>TRADING FEE</div>
                <div style = {{'textAlign':"right"}} className = {styles.subHead2 + " "}>NOTES</div>

                </div>
                <hr style = {{'width': '100%', 'color': 'grey'}}></hr>
                <div className = {styles.title + " " + styles.sub}>
                       <div className = {styles.subHead2 + " "}>SIZE</div>
                <div style = {{'textAlign':"left"}} className = {styles.subHead2 + " "}>35.99</div>
                <div style = {{'textAlign':"left"}} className = {styles.subHead2 + " "}> yes</div>
                <div style = {{'textAlign':"center"}} className = {styles.subHead2 + " "}>yes </div>
                <div style = {{'textAlign':"right"}} className = {styles.subHead2 + " "}>yes</div>
                </div>
                <hr style = {{'width': '100%', 'color': 'grey'}}></hr>
                <div className = {styles.title + " " + styles.sub}>
                <div style = {{'color': 'green'}} className = {styles.content}>35.99</div>
                <div style = {{'color': 'grey'}}  className = {styles.content + " "}>3.008</div>
                <div style = {{'color': 'white'}} className = {styles.content + " "}>36.99</div>
                </div>
                <hr style = {{'width': '100%', 'color': 'grey'}}></hr>
                <div className = {styles.title + " " + styles.sub}>
                <div style = {{'color': 'green'}} className = {styles.content}>35.99</div>
                <div style = {{'color': 'grey'}}  className = {styles.content + " "}>3.008</div>
                <div style = {{'color': 'white'}} className = {styles.content + " "}>36.99</div>
                </div>
                <hr style = {{'width': '100%', 'color': 'grey'}}></hr>
                <div className = {styles.title + " " + styles.sub}>
                <div style = {{'color': 'green'}} className = {styles.content}>35.99</div>
                <div style = {{'color': 'grey'}}  className = {styles.content + " "}>3.008</div>
                <div style = {{'color': 'white'}} className = {styles.content + " "}>36.99</div>
                </div>
                <hr style = {{'width': '100%', 'color': 'grey'}}></hr>
                </>
                </div>
                
        </div>

        <div className = {styles.container}>
                <div style = {{'width': '100%', 'height': '100%'}}>
                <div className = {styles.title}>
                <div className = {styles.head + " " +  styles.g}>Market Trades</div>
                <div className = {styles.head + " " +  styles.g}>24H</div>
                </div>
                <hr style = {{'width': '100%', 'color': 'grey'}}></hr>
                <br></br>
                <div className = {styles.title + " " + styles.sub}>
                <div className = {styles.subHead + " "}>SIZE</div>
                <div style = {{'textAlign':"center"}} className = {styles.subHead + " "}>TIME</div>
                <div style = {{'textAlign':"right"}} className = {styles.subHead + " "}>PRICES</div>
                </div>
                <hr style = {{'width': '100%', 'color': 'grey'}}></hr>
                <div className = {styles.title + " " + styles.sub}>
                <div style = {{'color': 'green'}}className = {styles.content}>35.99</div>
                <div style = {{'color': 'grey'}} className = {styles.content + " "}>3.008</div>
                <div style = {{'color': 'white'}}className = {styles.content + " "}>36.99</div>
                </div>
                <hr style = {{'width': '100%', 'color': 'grey'}}></hr>
                <div className = {styles.title + " " + styles.sub}>
                <div style = {{'color': 'green'}}className = {styles.content}>35.99</div>
                <div style = {{'color': 'grey'}} className = {styles.content + " "}>3.008</div>
                <div style = {{'color': 'white'}}className = {styles.content + " "}>36.99</div>
                </div>
                <hr style = {{'width': '100%', 'color': 'grey'}}></hr>
                <div className = {styles.title + " " + styles.sub}>
                <div style = {{'color': 'green'}}className = {styles.content}>35.99</div>
                <div style = {{'color': 'grey'}} className = {styles.content + " "}>3.008</div>
                <div style = {{'color': 'white'}}className = {styles.content + " "}>36.99</div>
                </div>
                <hr style = {{'width': '100%', 'color': 'grey'}}></hr>
                <div className = {styles.title + " " + styles.sub}>
                <div style = {{'color': 'green'}}className = {styles.content}>35.99</div>
                <div style = {{'color': 'grey'}} className = {styles.content + " "}>3.008</div>
                <div style = {{'color': 'white'}}className = {styles.content + " "}>36.99</div>
                </div>
                <hr style = {{'width': '100%', 'color': 'grey'}}></hr>
                
                </div>
        </div>
        </div>
        </>
   );
}