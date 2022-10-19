import { Container, Grid } from "@mui/material";
import React from "react";
import CustomImage from "../components/CustomImage/CustomImage";
import CardFaq from "../components/Faq/Card.js/CardFaq";
import Questions from "../components/Faq/Card.js/Questions";

const FaqPage = () => {
  return (
    <>
      <Grid Container>
        <Grid item xs={12}>
          HEADER
        </Grid>
        <Grid item container xs={12}>
          <main
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/landingbg.png"
              })`,
              width: "100vw",
            }}
          >
            <Grid item xs={12}>
              <Container maxwidth="xl" sx={{ p: 5 }}>
                <Grid
                  tem
                  container
                  xs={12}
                  sx={{
                    width: 1341,
                    height: 250,
                    borderRadius: 7,
                    backgroundColor: "grey.contrast",
                  }}
                >
                  <CustomImage
                    alt="Help"
                    src={
                      process.env.PUBLIC_URL +
                      "/images/help-center-background.png"
                    }
                  />
                </Grid>

                <Grid
                  item
                  container
                  sx={{
                    mt: 2,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Grid
                    item
                    container
                    sx={{
                      mt: 2,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <CardFaq>
                      <Questions
                        src={process.env.PUBLIC_URL + "/images/icons/user.png"}
                        title="Registro de mascotas"
                        color="header_secondary.main"
                        description="Encuentra todo lo que neceistas para el registro de tu mascota"
                      />
                    </CardFaq>
                    <CardFaq>
                      <Questions
                        src={
                          process.env.PUBLIC_URL + "/images/icons/dog&cat.png"
                        }
                        title="Registro de mascotas"
                        color="header_secondary.main"
                        description="Encuentra todo lo que neceistas para el registro de tu mascota"
                      />
                    </CardFaq>
                    <CardFaq>
                      <Questions
                        src={
                          process.env.PUBLIC_URL + "/images/icons/calendar.png"
                        }
                        title="Citas personalizadas"
                        color="header_secondary.main"
                        description="Puedes administrar y personalizar tus citas con el veterinario"
                      />
                    </CardFaq>
                    <CardFaq>
                      <Questions
                        src={process.env.PUBLIC_URL + "/images/icons/QR.png"}
                        title="¿Como funciona el código QR?"
                        color="header_secondary.main"
                        description="Genera un código QR por cada una de tus mascotas"
                      />
                    </CardFaq>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </main>
        </Grid>
      </Grid>
    </>
  );
};

export default FaqPage;
