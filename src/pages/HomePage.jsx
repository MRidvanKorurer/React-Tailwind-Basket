import React, { useContext } from 'react'
import Basket from '../components/Basket'
import Product from '../components/Product'
import AppContext from '../context/context'

const HomePage = () => {
    const {count} = useContext(AppContext);
  return (
    <div>
      {
        count.length > 0 &&  <Basket/>
      }
      <Product/>
    </div>
  )
}

export default HomePage