import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import CustomButton from "../CustomButton/CustomButton";
import { Box, Grid } from "@mui/material";
import QrCode from "@mui/icons-material/QrCode";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function QrDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Grid>
        <QrCode></QrCode>
        </Grid>
        <Box>
          <CustomButton label="Descargar" color="grey" />
        </Box>
      </Dialog>
    </div>
  );
}
