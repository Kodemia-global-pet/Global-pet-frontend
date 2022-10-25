import React, { useState, useContext } from "react";
import {
  getTokenLocalStorage,
  getUserData,
  // saveTokenLocalStorage,
} from "../helpers/userHelper";
import { PetsNew } from "../services/backend";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getTokenLocalStorage());

  const PetNew = async (
    name,
    breed,
    date,
    size,
    feeding,
    allergies,
    species
  ) => {
    try {
      // Fetch
      const response = await PetsNew(
        name,
        breed,
        date,
        size,
        feeding,
        allergies,
        species
      );
      const jsonData = await response.json();
      if (!jsonData.success) {
        return false;
      } else {
        const token = jsonData.data.token;
        const userData = await getUserData(token);
        setUser({ token, ...userData });
        // saveTokenLocalStorage({token, ...userData});
        return true;
      }
    } catch (error) {
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

export const useLogedUser = () => useContext(UserContext);
