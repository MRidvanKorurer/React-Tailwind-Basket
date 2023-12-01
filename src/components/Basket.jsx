import React, { useContext } from 'react'
import AppContext from '../context/context'

const Basket = () => {
  const {count, setCount} = useContext(AppContext);

  const handleClickDeleteToBasket = () => {
    setCount([]);
  }


  const total = count.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className=' flex flex-col justify-center items-center gap-5 border border-indigo-600 mt-2 p-2 rounded-lg '>
      <h2 className=' font-bold text-xl italic'>SEPET AYRINTILARI</h2>
      <div>
        {
          count.map((item) => {
            return(
              <div>
                <ul className=' flex justify-between mt-2 items-center w-full border-b' key={item.id} >
                  <li className=' text-sm font-light'>
                    {item.title}
                  </li>
                  <li className=' font-bold'>
                    ${item.price}
                  </li>
                </ul>
              </div>
            )
          })
        }
      </div>
      <p>Toplam: ${total}</p>
      <button onClick={handleClickDeleteToBasket} className=' bg-red-600 text-white rounded hover:bg-red-700 transition-all p-1'>Sepeti Temizle</button>
    </div>
  )
}

export default Basket