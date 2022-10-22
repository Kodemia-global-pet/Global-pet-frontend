import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { Alert } from "@mui/material";
import MyAccountHeader from "./MyAccountHeader";

const CardList = () => {
   
    let users = []
    const { data, error } = useFetch(`${process.env.REACT_APP_BACKEND}users`);
  
    if (error)
    return <Alert severity="error">Ocurrio un error, intente de nuevo</Alert>;
        
    return(
    <>
        {users.map((user) => {
            const {name, email, phone_number, password } = user;
            return (
                <MyAccountHeader name= {name} email={email} phoneNumber={phone_number} password={password}
                />
            );
        })}
    </>
    )
};

export default CardList; 