import React, { useContext, useEffect } from 'react';
import './App.css'
import AppContext from './context/context';
import HomePage from './pages/HomePage';



function App() {
  const {fetch} = useContext(AppContext);


  useEffect(() => {
    fetch();
  }, [])

  return (
    <div>
      <HomePage/>
    </div>
  )
}

export default App
