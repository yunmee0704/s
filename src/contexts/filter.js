import { createContext, useContext } from 'react'
import { useState } from 'react/cjs/react.development'

const Context = createContext()
export const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState('ALL')
  return (
    <Context.Provider value={{ filter, setFilter }}>
      {children}
    </Context.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(Context)
}
