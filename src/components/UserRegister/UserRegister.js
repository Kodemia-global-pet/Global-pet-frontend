import React, { useState, useRef } from "react";
//import { useLogedUser } from "../../context/UserContext"
import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  Input,
  Container,
} from "@mui/material";
import styles from "./UserRegister.module.scss"



const UserRegister = () => {
  /*
  const refer = useRef(null);
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const { login } = useLogedUser();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeAdress = (e) => {
    setAdress(e.target.value);
  };
  const changeCity = (e) => {
    setCity(e.target.value);
  };
  const changeCountry = (e) => {
    setCountry(e.target.value);
  };
  const changeZipCode = (e) => {
    setZipCode(e.target.value);
  };
  const changePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleClick = () => {
    if (refer) {
      refer.current.click();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        user_name: name,
        registration_date: new Date(),
        email: email,
        password: password,
        savedPost: [],
        profile_photo: photo || "https://picsum.photos/40/40",
      };
      // Fetch
      const response = await fetch(``, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const jsonData = await response.json();
      console.log(jsonData);
      if (!jsonData.success) {
        alert("you entered your data wrong");
      } else {
        //log user
        const result = await login(email, password);
        if (!result) setError("Something wrong happened!");
        else {
          setError(null);
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
*/
  return (
    <>
      <section>
        <Grid container md={4} className={styles.registerContainer}>
          <h3>¡Bienvenido a Global Pet!</h3>
          <Grid item md={12} margin="dense" display="flex" justifyContent="center" alignItems="center">
            <FormControl>
              <InputLabel htmlFor="email">Email address</InputLabel>
              <Input id="email" aria-describedby="email-helper" />
              <FormHelperText variant="outlined" id="email-helper">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item md={12}>
            <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" aria-describedby="password-helper" />
              <FormHelperText id="password-helper">
                Entre 8 y 10 caracteres
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item md={12} margin="dense">
            <FormControl>
              <InputLabel htmlFor="email">Email address</InputLabel>
              <Input id="email" aria-describedby="email-helper" />
              <FormHelperText id="email-helper">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item md={12}>
            <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" aria-describedby="password-helper" />
              <FormHelperText id="password-helper">
                Entre 8 y 10 caracteres
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item md={12} margin="dense">
            <FormControl>
              <InputLabel htmlFor="email">Email address</InputLabel>
              <Input id="email" aria-describedby="email-helper" />
              <FormHelperText id="email-helper">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item md={12}>
            <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" aria-describedby="password-helper" />
              <FormHelperText id="password-helper">
                Entre 8 y 10 caracteres
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item md={12} margin="dense">
            <FormControl>
              <InputLabel htmlFor="email">Email address</InputLabel>
              <Input id="email" aria-describedby="email-helper" />
              <FormHelperText id="email-helper">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item md={12}>
            <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" aria-describedby="password-helper" />
              <FormHelperText id="password-helper">
                Entre 8 y 10 caracteres
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default UserRegister;

/*
{error && (
  <Alert key="error" variant="danger">
    {error}
  </Alert>
)} */
