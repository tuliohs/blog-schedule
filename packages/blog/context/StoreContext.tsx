import React, { createContext, useState } from 'react'
import Context from './StoreContext'

interface IDefaultProps {
  token?: string,
  setToken?: React.Dispatch<React.SetStateAction<string>>,
  setUser?: React.Dispatch<React.SetStateAction<any>>,
  removeToken?: any,
}

const StoreContext = createContext({} as IDefaultProps)
export default StoreContext;

export const StoreProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState({})
  return (
    <Context.Provider
      value={{
        setUser
      }}
    >
      {children  /*is the component received*/}
    </Context.Provider>
  )
}

