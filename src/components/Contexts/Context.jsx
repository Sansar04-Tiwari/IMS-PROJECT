import { createContext, useState } from "react";

export const Context = createContext({
});

export const ContextProvider = (props) => {

  const [userId, setUserId] = useState('')

  return (
    <Context.Provider value={{ userId, setUserId }}>
      {props.children}
    </Context.Provider>
  )
};
