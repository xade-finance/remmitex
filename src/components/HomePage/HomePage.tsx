import React from 'react'
import CarouselCard from './../CarouselCard/CarouselCard'
import styles2 from './../Payments.module.css'
import { useWeb3Auth } from "../../services/web3auth";
import Popup from 'reactjs-popup'
import { Layout } from './../Layout'
import './HomePage.css'
import { TbQrcode } from "react-icons/tb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'

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
  const { provider, login, logout, getUserInfo, getAccounts, getBalance,isLoading,signAndSendTransaction } = useWeb3Auth();
      let [address, setAddr] = React.useState('');
      let [amount, setAmount] = React.useState(5);
      const handleSendAmountToAddress = async () => {
      var toAddr = address;
      var amt = (amount).toString();
      await signAndSendTransaction(toAddr, amt); 
    }
    let symbol = 'R';
    let value = '0.00';

    const scanQr = () =>{

    }
   
  return (
      
     <div className='container'>


            <div className='carouselHolder'>
         <Slider {...settings}>
                      <CarouselCard/>
                      <CarouselCard/>
                      <CarouselCard/>
                </Slider>              
             </div>
            <div className='myActivity'>
                <div className='totalBalance'>
                    <p className='label'>Checking Account</p>
                    <p className='value'>{symbol} {value}</p>
                </div>
                <div className='activityContent'>
                    YOUR ACTIVITY APPEARS HERE
                </div>
            </div>
            <div className='utilityButtons'>
                <div className='buttonHolder'>
                    <div className='paymentsButton'>
                        <Link to = '/send'><a style = {{'color': '#fff', 'textDecoration': 'none' }}>Send</a></Link>
                    </div>
                    <div className='paymentsButton'>
                        <a>Request</a>
                    </div>
                    <Link
                      to='/qr'
                    >
                    <div className='scanner' onClick={scanQr} >
                        <TbQrcode />
                    </div>
                    </Link>
                </div>
            </div>
            
        </div>
    
  )
}

export default HomePage
