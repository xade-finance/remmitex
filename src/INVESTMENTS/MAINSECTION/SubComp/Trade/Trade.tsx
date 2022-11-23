import React from "react";
import styles from './Trade.module.css'
import './leverage.css'
import Popup from 'reactjs-popup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom'
import Modal from '@mui/material/Modal';
import Slider from '@mui/material/Slider';
import Contracts from '../../../constants'
import { useNavigate } from 'react-router-dom'


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


export default function Trade() {
    let navigate = useNavigate();
    const params:any = useParams();
    let addr = parseInt(params.addr)
    if(!(addr >= 1 && addr <= 5)) 
      addr = 1;
    const contract = Contracts[addr-1]
    let [marketLS, setMarketLS] = React.useState('L');
    let [leverage, setLeverage] = React.useState(5);
    let [buyState, setBuyState] = React.useState(true);
    let [amount, setAmount] = React.useState([0, 0, 0]);
    let [exchange, setExchange] = React.useState('23423');    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    var xhr2 = new XMLHttpRequest();
    xhr2.onreadystatechange=function(){
    if(xhr2.readyState==XMLHttpRequest.DONE){
    setExchange(xhr2.responseText)
    }
    }

    function valuetext(value: number) {
        setLeverage(value);
        return `${value}°C`;
    }

    xhr2.open('GET', "https://price.api.xade.finance/btc")
    xhr2.send()

    return (
        <>
        <div>
            <div className = {styles.market_ls}>
                <button className = {styles.long + " " + ((marketLS === 'L')? styles.longSelected: '')} onClick = {() => {setMarketLS('L')}}>
                    Long
                    <img alt = 'long' className = {styles.longMoji}src = {process.env.PUBLIC_URL + `/images/icons/long.svg`}/>
                </button>


                <button className = {styles.short + " " + ((marketLS === 'S')? styles.shortSelected: '')} onClick = {() => {setMarketLS('S')}}>
                    Short
                    <img className = {styles.shortMoji} alt = 'short'  src = {process.env.PUBLIC_URL + `/images/icons/short.svg`}/>
                </button>
            </div>
            <div className={styles.center}>
                <div className = {styles.conversion + " " + ((buyState)?(styles.conversion_buy):(styles.conversion_sell))}>
                    <div className = {styles.conversion_element + " " + styles.conversion_usd}>
                            <div className = {styles.conversion_usd_element}>
                                <button    
                                style = {{
                                    'display': 'flex',
                                    'alignItems': 'center',
                                    'padding': '15%',
                                    'paddingRight': '0',
                                    'justifyContent': 'space-between'
                                }}
                                className = {styles.USD_BUTTON}>
                                    <img src={process.env.PUBLIC_URL + '/images/ticker/usd-svgrepo-com.svg'} />
                                    <p style = {{'fontSize': '1.3rem', 'color': 'snow'}}>USD</p>
                                </button>
                            </div>  
                    <input type = 'number' className = {styles.thisIsFunn} step = "any" value = {amount[0]} onChange = {(e) => {if(buyState == true) setAmount([parseFloat(e.target.value), parseFloat(e.target.value) / parseFloat(exchange), parseFloat(e.target.value) * 0.003])}}></input>

                    </div>
                    {/* Middle Arrow */}
                        <div onClick = {() => setBuyState(e => !(e))} style = {{'width':'15%', 'height': '15%', 'position':'relative', 'zIndex': '2'}}> <img style = {{'width': '100%', 'height': '100%', 'filter': 'invert(99%) sepia(0%) saturate(517%) hue-rotate(278deg) brightness(116%) contrast(100%)'}} src = {process.env.PUBLIC_URL + '/images/icons/down-arrow.svg'} /> </div>
                    {/* Middle Arrow */}
                    {/* <div className = {styles.conversion_element + " " + styles.conversion_btc }>
                        <div className = {styles.conversion_btc_element}><button className = {styles.BTC_BUTTON}>BTC</button></div>
                    </div> */}

                        <div className = {styles.conversion_element + " " + styles.conversion_btc}>
                           
  <div className = {styles.conversion_usd_element}>
{/* <Button onClick={handleOpen}>Open modal</Button> */}
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <p className = {styles.modalHeading}>Select an asset</p>
    <hr style = {{'color': '#fff'}}></hr>
    <div className = {styles.contracts}>
    {
        Contracts.map((selected, index) => {
        return (
        <div className = {styles.conversion_usd_element} style = {{width: '35%'}}> 
              <button onClick={() => {
                    navigate(`/investments/asset/${index + 1}`)
                    handleClose();
              }} 
        style = {{
                    'display': 'flex',
                    'alignItems': 'center',
                    'padding': '15%',
                    'paddingRight': '0  ',
                    'justifyContent': 'space-between'
                }}
                className = {styles.BTC_BUTTON}>
                <img src={process.env.PUBLIC_URL + '/images/ticker/' + selected.ticker} />
            <p style = {{'fontSize': '1.3rem', 'color': 'snow'}}>{selected.symbol}</p>
            </button>  
        </div>
        )
    })}
    </div>
  </Box>
</Modal>                            
    <button onClick={handleOpen} 
        style = {{
                    'display': 'flex',
                    'alignItems': 'center',
                    'padding': '15%',
                    'paddingRight': '0  ',
                    'justifyContent': 'space-between'
                }}
                className = {styles.BTC_BUTTON}>
                <img src={process.env.PUBLIC_URL + '/images/ticker/' + contract.ticker} />
            <p style = {{'fontSize': '1.3rem', 'color': 'snow'}}>{contract.symbol}</p>
            </button>
                            </div>

                            <input className = {styles.thisIsFunn} step = "any" type = "number"  value = {amount[1]} onChange = {(e) => {if(buyState == false) setAmount([parseFloat(e.target.value) * parseFloat(exchange) , parseFloat(e.target.value), parseFloat(e.target.value) * parseFloat(exchange) * 0.003])} }></input>
                    </div>
                    
                </div>                
            </div>
            </div>

            <div className = {styles.center}>
                <div className = {styles.leverage}>
      <label htmlFor = "lvg" className = {styles.leverage_title}>Leverage </label>
                                        <Slider
        aria-label="Temperature"
        defaultValue={1}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
        sx = {{
            color: '#E0FFFF',
        }}
      /> 
                    <p className = {styles.display_lvg}>{leverage}x</p>
                </div>
            </div>
            <div className = {styles.center}>
                <div className = {styles.order_summary}>
                    <p className = {styles.summary_title}>
                        Summary
                    </p>

                    <div className = {styles.entry_price}>
                        <p className = {styles.entry_price_title}>Entry Price</p>
                        <p className = {styles.entry_price_price}>${amount[0]}</p>
                    </div>


                    <div className = {styles.trading_fee}>
                        <p className = {styles.trading_fee_title}>Trading fee</p>
                        <p className = {styles.trading_fee_price}>${amount[2]}</p>
                    </div>


                </div>
            </div>
            <div className = {styles.center}>
                <div className = {styles.order_confirmation}>
                    <p className = {styles.order_confirmation_text}>Confirm order</p>
                </div>
            </div>
        </>
    )
}  