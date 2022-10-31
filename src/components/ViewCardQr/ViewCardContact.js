import { Grid } from "@mui/material";
import React from "react";
import { useLogedUser } from "../../context/UserContext";
import ViewCardContactSchema from "./ViewCardContactInfo";

const ViewCardContact = () => {
  const params = useParams();
  let { user } = useLogedUser();
  const { data } = useFetch(
    `${process.env.REACT_APP_BACKEND}pets/${params.petID}/user`
  );

  return (
    <>
      <Grid
        container
        xs={12}
        padding={{ xs: 0, md: 5 }}
        sx={{
          backgroundColor: "grey.light",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {user && (
          <Grid>
            <ViewCardContactSchema user={data} />
          </Grid>
        )}
      </Grid>
    </>
  );
};
export default ViewCardContact;
