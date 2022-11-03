import { Grid, Container } from "@mui/material";
import React from "react";
import Template from "../components/Template/Template";
import UserFormRegister from "../components/UserFormRegister/UserFormRegister";
// import { deleteTokenLocalStorage } from "../helpers/userHelper";
// import { useLogedUser } from "../context/UserContext";

const createAccount = () => {
  // const { user, loading } = useLogedUser();
  // const isAuth = user?.token;

  // if (loading) {
  //   return <h1>Loading..</h1>;
  // } else {
  //   if (isAuth) {
  //     deleteTokenLocalStorage();
  //     window.location.reload();
  //   }
  // }
  return (
    <Template>
      <Grid container>
        <Container maxwidth="xl">
          <Grid
            item
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            xs={12}
          >
            <UserFormRegister />
          </Grid>
        </Container>
      </Grid>
    </Template>
  );
};

export default createAccount;
