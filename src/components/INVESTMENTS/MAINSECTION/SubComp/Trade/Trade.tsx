import React from "react";
import styles from './Trade.module.css'

export default function Trade() {
    let [marketLS, setMarketLS] = React.useState('L');
    let [leverage, setLeverage] = React.useState(1);
    let [buyState, setBuyState] = React.useState(true);
    let [amount, setAmount] = React.useState([0, 0, 0]);
    let [exchange, setExchange] = React.useState('23423');
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       // console.log(xhttp.responseText);
    }
};
xhttp.open("GET", "/api", true);
xhttp.send();


    return (
        <>
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
                                    <p style = {{'fontSize': '1.3rem', 'color': 'snow'}}>&nbsp;&nbsp;USD</p>
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
                                <button    
                                style = {{
                                    'display': 'flex',
                                    'alignItems': 'center',
                                    'padding': '15%',
                                    'paddingRight': '0  ',
                                    'justifyContent': 'space-between'
                                }}
                                className = {styles.BTC_BUTTON}>
                                    <img src={process.env.PUBLIC_URL + '/images/ticker/bitcoin.png'} />
                                    <p style = {{'fontSize': '1.3rem', 'color': 'snow'}}>BTC</p>
                                </button>

                            </div>

                            <input className = {styles.thisIsFunn} step = "any" type = "number"  value = {amount[1]} onChange = {(e) => {if(buyState == false) setAmount([parseFloat(e.target.value) * parseFloat(exchange) , parseFloat(e.target.value), parseFloat(e.target.value) * parseFloat(exchange) * 0.003])} }></input>
                    </div>
                    
                </div>                
            </div>

            <div className = {styles.center}>
                <div className = {styles.leverage}>
                    <label htmlFor = "lvg" className = {styles.leverage_title}>Leverage </label>
                    <input min = '1' max = '10' type = 'range' value = {leverage} onChange ={(event) => setLeverage(parseInt(event.target.value))}/>
                    <p className = {styles.display_lvg}>{leverage}</p>
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