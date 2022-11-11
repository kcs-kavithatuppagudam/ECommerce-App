import React, { useEffect } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

const Signout = () => {

    useEffect(()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    },[])

  return (
    <div>
        <Header/>
        <Footer/>
    </div>
  )
}

export default Signout