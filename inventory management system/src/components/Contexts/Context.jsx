import { createContext, useState } from "react";

export const Context = createContext({});

export const ContextProvider = (props) => {

  const[data,setData] = useState(null)

  return(
    <Context.Provider value={{ data, setData }}>
    {props.children}
  </Context.Provider>
  )
};
