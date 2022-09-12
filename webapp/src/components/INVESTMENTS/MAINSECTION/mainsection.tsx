import React from 'react';
import styles from './mainsection.module.css'
import Overview from './SubComp/Overview'
import Trade from './SubComp/Trade'
import Portfolio from './SubComp/Portfolio'


export default function Component() {
    let [state, setState] = React.useState(true);

    return (
        
        <>
            <div className = {styles.container}>
                     <div className = {styles.toggleBar}>
                        <button onClick = {() => setState(true)} className = {styles.overviewClick + "  " + (state?styles.highlight:'')}>Trade</button>
                        <button onClick = {() => setState(false)} className = {styles.tradeClick + "  " + ((!state)?styles.highlight:'')}>Portfolio</button>
                     </div>
            </div>
   
                
                        {state? 
                        <div>
                        
                        <Overview></Overview>
                        <br />
                        <br />
                        <br />
                        <Trade /> 
                        
                        </div>
                        
                        : <Portfolio /> }
         
        </>
    
        )
}   