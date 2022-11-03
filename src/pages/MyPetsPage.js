import { CircularProgress, Container, Grid } from "@mui/material";
import React from "react";
import EventList from "../components/EventList/EventList";
import PetList from "../components/PetList/PetList";
import { useLogedUser } from "../context/UserContext";
import { getPetRecords } from "../helpers/petHelper";
import CustomImage from "../components/CustomImage/CustomImage";
import Template from "../components/Template/Template";
import Paper from "@mui/material/Paper";
import AuthValidation from "../components/AuthValidation/AuthValidation";
import AdSense from "react-adsense";

const MyPetsPage = () => {
  let { user } = useLogedUser();
  return (
    <AuthValidation>
      <Template>
        <Grid container>
          <Container
            maxwidth="xl"
            component={Paper}
            sx={{ backgroundColor: "grey.light" }}
          >
            <Grid item container xs={12} columnSpacing={4} sx={{ py: 5 }}>
              <Grid item xs={12} md={8}>
                {!user && <CircularProgress />}
                {user && <PetList pets={user?.pets} />}
              </Grid>
              <Grid item xs={12} md={4} style={{ marginTop: "46px" }}>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <h2>Próximos eventos </h2>
                  <CustomImage
                    sx={{
                      width: "60px",
                    }}
                    alt="Calendario"
                    src={process.env.PUBLIC_URL + "/images/icons/calendar.png"}
                  />
                </Grid>
                {!user && <CircularProgress />}
                {user && (
                  <EventList
                    records={getPetRecords(user.pets)}
                    showPet={true}
                  />
                )}
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sx={{ w: 1, justifyContent: "center", mt: 3 }}
        >
          <AdSense.Google
            client="ca-pub-3386732816019910"
            slot="3516249853"
            style={{ display: "block", width: "300px" }}
            format="fluid"
          />
        </Grid>
      </Template>
    </AuthValidation>
  );
};

export default MyPetsPage;
