import React from 'react';
import styles from './mainsection.module.css'
import Overview from './SubComp/Overview'
import Trade from './SubComp/Trade'
import Portfolio from './SubComp/Portfolio'


export default function Component() {
    let [state, setState] = React.useState(true);

    return (
        
        <>
            <div>
            
            <Overview></Overview>
            <br />
            <br />
            <br />
            {/* <Trade />  */}
            <br></br>
            
            <Portfolio />
            </div>                      
        </>
    
        )
}   