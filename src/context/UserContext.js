import React, { useState, useContext } from "react";
import { getTokenLocalStorage, getUserData, saveTokenLocalStorage } from "../helpers/userHelper";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    
  const [user, setUser] = useState(getTokenLocalStorage());

  const login = async (email, password) => {

    try{            
        const data = {
            email: email,
            password: password
          };
        
          // Fetch
          const response = await fetch(`https://devto-backend-nine.vercel.app/auth`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });
        
          const jsonData = await response.json();          
          console.log(jsonData);
          if(!jsonData.success) {
            return false;
          } else {
            const token = jsonData.data.token;
            const userData = await getUserData(token);
            setUser({token, ...userData});
            saveTokenLocalStorage({token, ...userData});
            return true;
          }
        
    }
    catch(error){
        console.log(error);
        return false;
    }  
  };

  return (
    <UserContext.Provider value={{ login, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useLogedUser = () => useContext(UserContext)