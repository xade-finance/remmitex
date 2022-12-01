import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {FaBars,FaTimes} from 'react-icons/fa'
type Props = {}

const Navbar = (props: Props) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            XADE
           
          </Link>
          <div onClick={handleClick} className='menu-icon'>
             <i className={'fas fa-bars desktopstuff'} >
                </i>
          </div>
          
          <ul className={click ? 'nav-menu navActive' : 'nav-menu'}>
            <li style={{color:"#fff"}} className='desktopstuff nav-item'>
              <Link to='/' className='nav-links' style={{color:"#fff"}} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
  {/*          <li stylclassName='nav-item'>
              <Link
                to='/payments'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Payments
              </Link>
            </li>*/}
            <li className='nav-item'>
              <Link
                to='/investments/1'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Investments
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/savings'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Savings
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/settings'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Settings
              </Link>
            </li>
           
           

            <li className='button-item'>
      
             
            </li>
          </ul>
         
        </div>
      </nav>
    </>
  )
}

export default Navbar
