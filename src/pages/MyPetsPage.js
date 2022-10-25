import { Alert, CircularProgress, Container, Grid } from "@mui/material";
import React from "react";
import EventList from "../components/EventList/EventList";
import PetList from "../components/PetList/PetList";
import { useLogedUser } from "../context/UserContext";
import { getPetRecords } from "../helpers/petHelper";
import CustomImage from "../components/CustomImage/CustomImage";

const MyPetsPage = () => {
  let { user } = useLogedUser();

  return (
    <Grid container>
      <Grid item xs={12}>
        {/* Header */}
      </Grid>
      <main
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/landingbg.png"
          })`,
          width: "100vw",
        }}
      >
        <Container maxwidth="xl">
          <Grid item container xs={12} columnSpacing={4}>
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
                <EventList records={getPetRecords(user.pets)} showPet={true} />
              )}
            </Grid>
          </Grid>
        </Container>
      </main>
    </Grid>
  );
};

export default MyPetsPage;
