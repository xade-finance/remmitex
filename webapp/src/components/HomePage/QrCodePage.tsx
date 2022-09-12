import React, { useState } from 'react'
import './QrPage.css'
import { ImCross } from "react-icons/im";
import { FiShare } from "react-icons/fi";
import {Link} from 'react-router-dom'
// import { Avatar } from 'web3uikit'
import QRCode from "react-qr-code";

type Props = {}

const QrCodePage = (props: Props) => {

    const [isActive,setActive] = useState(false);
  return (
    <div className='containerQrPage'>
        <div className='topBar'>
                 <Link to='/'>
                <div className='goBack'><ImCross/></div>
                </Link>   
                <div className='buttonHolderQrPage'>
                    <div className={'qrButtonLeft ' + (isActive? 'active':'inActive')} onClick={()=>setActive(!isActive)} >My Code</div>
                    <div className={'qrButtonRight ' + (isActive? 'inActive':'active')} onClick={()=>setActive(!isActive)} >Scan</div>
                </div>
                   
                <div className='share'><FiShare/></div>
           
        </div>
        <div className={'mainContent '+ (isActive? 'myInfoInActive':'myInfoActive')}>
            <div className='contentWrapper'>
                <div className='infoHolder'>
                {/* <div><Avatar text='Tanishq' theme="letters" isRounded fontSize={35} size={70}/></div> */}
                <div><h1>Harshal Madnani</h1></div>
                <div><h2>+91 9836711182</h2></div>
                </div>
                <div className='QrHolder'>
                    <div className='QrWrapper'>
                    <QRCode value={'0x849bf7D53dc8614476F00600791F5C3C8b68A51B'} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QrCodePage