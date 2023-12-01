import React, { useContext } from 'react'
import AppContext from '../context/context'
import Productshow from './Productshow';

const Product = () => {
  const {data} = useContext(AppContext);

  return (
    <div className=' grid grid-cols-4 justify-center items-center gap-10 mt-4 p-4'>
      {
        data.map((item) => {
          return(
            <Productshow key={item.id} item={item}/>
          )
        })
      }
    </div>
  )
}

export default Product