import React, { useState } from "react";
import axios from "axios";


const AppContext = React.createContext();


const Provider = ({children}) => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState([]);

    async function fetch() {
        try {
          const response = await axios.get('https://fakestoreapi.com/products?limit=12');
          console.log(response);
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      }

    const sharedValuesAndMethods = {
        fetch,
        data,
        count,
        setCount
    }

    return(
        <AppContext.Provider value={sharedValuesAndMethods}>
            {children}
        </AppContext.Provider>
    )
}


export {Provider};
export default AppContext;