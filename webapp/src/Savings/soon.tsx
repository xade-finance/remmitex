import React from 'react'
import styles from './index.module.css'
//import CarouselCardSaving from './CarouselCard_saving/CarouselCard_saving';


export default function Component() {
    return (
        <div className={styles.center}>
            <div className={styles.container}>
                   <div className="rectangle" id="6">

                    <div className='textHolder'>
                        <div className="holding">
                            Your holding total value
                        </div>

                        <br></br> $0.000
                        <br></br><br></br><br></br>

                        <div className="holding">
                            Total Deposit
                        </div>
                        <br></br>$0.000
                    </div>
                </div>


                {/* <div className={styles.element}><img style={{ "width": "90%" }} src={process.env.PUBLIC_URL + `/images/XADE_COMING_SOON.png`} /></div> */}
            </div>

        </div>




    )
}
