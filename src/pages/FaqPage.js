import { Container, Grid } from "@mui/material";
import React from "react";
import CustomImage from "../components/CustomImage/CustomImage";
import CardFaq from "../components/FAQ/CardFaq";
import Questions from "../components/FAQ/Questions";

const FaqPage = () => {
  return (
    <>
      <Grid Container xs={12}>
        <Grid item>HEADER</Grid>
        <Grid item container>
          <main
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/landingbg.png"
              })`,
              width: "100vw",
            }}
          >
            <Grid item>
              <Container maxwidth="xl">
                <Grid
                  tem
                  container
                  sx={{
                    borderRadius: 7,
                    backgroundColor: "grey.contrast",
                    textAlign: "center",
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
                  xs={12}
                  sm={12}
                  lg={12}
                  sx={{
                    mt: 2,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <CardFaq>
                    <Questions
                      src={process.env.PUBLIC_URL + "/images/icons/user.png"}
                      title="Configuración de la cuenta"
                      color="header_secondary.main"
                      description="Puedes actualizar la información de tu cuenta en cualquier momento. Para cambiar tu email, número de teléfono tu imagen de perfil o tu plan, selecciona la opción Cuenta del menú de Haky."
                    />
                  </CardFaq>
                  <CardFaq>
                    <Questions
                      src={process.env.PUBLIC_URL + "/images/icons/dog&cat.png"}
                      title="Registro de mascotas"
                      color="header_secondary.main"
                      description="Puedes agregar nuevas mascotas para que ninguna se quede sin su cartilla virtual Tu cuenta puede tener hasta tres mascotas en la prueba gratuita y tendrás la posibilidad de incrementar la capacidad de registros al tener una suscripcion."
                    />
                  </CardFaq>
                  <CardFaq>
                    <Questions
                      src={
                        process.env.PUBLIC_URL + "/images/icons/calendar.png"
                      }
                      title="Citas personalizadas"
                      color="header_secondary.main"
                      description="Podras administrar y personalizar todas tus citas con el veterinario subiendo fotografias del diagnostico que te facilitara la vida"
                    />
                  </CardFaq>
                  <CardFaq>
                    <Questions
                      src={process.env.PUBLIC_URL + "/images/icons/QR.png"}
                      title="¿Como funciona el código QR?"
                      color="header_secondary.main"
                      description="En cada registro de mascota tiene la funcion de generar un Codigo QR que podras habilitar, el tipo de informacion que puedan ver las demas personas sin exponer tus datos personales si asi lo deseas."
                    />
                  </CardFaq>
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
