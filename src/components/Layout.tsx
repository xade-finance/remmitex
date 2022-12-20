import React, { ReactNode } from 'react'
import Navbar from './NavBar/Navbar'


export const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div style={{overflow:'hidden'}}>
      <Navbar></Navbar>
        {children}
     
    </div>
  )
}
