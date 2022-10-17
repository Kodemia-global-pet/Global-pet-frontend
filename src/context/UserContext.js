import React, { useState, useContext } from 'react'
import {
  getTokenLocalStorage,
  getUserData,
  // saveTokenLocalStorage,
} from '../helpers/userHelper'
import { loginService } from '../services/backend'

const UserContext = React.createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getTokenLocalStorage())

  const login = async (email, password) => {
    try {
      // Fetch
      const response = await loginService(email, password)
      const jsonData = await response.json()
      if (!jsonData.success) {
        return false
      } else {
        const token = jsonData.data.token
        const userData = await getUserData(token)
        setUser({ token, ...userData })
        // saveTokenLocalStorage({token, ...userData});
        return true
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  return (
    <UserContext.Provider value={{ login, user }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider

export const useLogedUser = () => useContext(UserContext)
