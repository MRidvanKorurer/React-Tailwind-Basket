import React from 'react'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'

const ManinLayout = ({children}) => {
  return (
    <div>
        <Header/>
            {children}
        <Footer/>
    </div>
  )
}

export default ManinLayout