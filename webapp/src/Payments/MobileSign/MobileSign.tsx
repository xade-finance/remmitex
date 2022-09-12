import styles from './MobileSign.module.css'
import countries from './constantsTypes'
import { Country, PhoneNumber } from './constantsTypes'
import React from 'react'
import CarouselCard from '../../components/CarouselCard/CarouselCard'
import { Layout } from '../../components/Layout'
import { TbQrcode } from "react-icons/tb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

  const handleSendAmountToAddress = async (e: any) => {
    e.preventDefault();
    const toAddress = e.target.elements[0].value;
    const amount = e.target.elements[1].value;
    await signAndSendTransaction(toAddress, amount);
  }

export default function MobileSign() {
    

    // function getCountry():void {
    //     axios.get('https://ipapi.co/json/').then(response => {
    //         let data:any = response.data;
    //         setCountry({
    //             "code": data.country_calling_code || '1',
    //             "name": data.country_name || 'United States of America',
    //         })

    //         console.log(country);
    //     }).catch(error => {console.log(error)})
    // }

   type Props = {}

const settings = {
    dots: true,
    infinite: true,
    
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows:false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

const HomePage = (props: Props) => {
    let symbol = 'R';
    let value = '0.00';
}
    return (
       <Layout>
       <body>
       <br/>
       <br/>
        <div className={styles.container}>
            <div className={styles.carouselHolder}>
                <Slider {...settings}>
                      <CarouselCard/>
                      <CarouselCard/>
                      <CarouselCard/>
                </Slider>
            </div>
            <div className={styles.myActivity}>
                <div className={styles.totalBalance}>
                    <p className={styles.label}>Checking Account</p>
                    <p className={styles.value}>Hello</p>
                </div>
                <div className={styles.activityContent}>
                    YOUR ACTIVITY APPEARS HERE
                </div>
            </div>
            <div className={styles.utilityButtons}>
                <div className={styles.buttonHolder}>
      
                      <Popup trigger={ <div className={styles.paymentsButton}  >
                        Send
                    </div>} position="right center">
        <form className={styles.paymentsForm}>
          <div className="form-group">
            <input type="text" placeholder="To Address"></input>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Amount in ETH"></input>
          </div>
          <button>Submit</button>
        </form>
  </Popup>
                    <div className={styles.paymentsButton}>
                        Request
                    </div>
                    <div className={styles.scanner}>
                    </div>
                </div>
            </div>
            
        </div>
        </body>
      </Layout>
    );
}