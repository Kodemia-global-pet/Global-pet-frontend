import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import CustomButton from "../CustomButton/CustomButton";
import { Box, IconButton } from "@mui/material";
import QrCode from "./QrCode";
import { Close } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function QrDialog({ petId }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CustomButton
        label="Codigo QR"
        color="secondary"
        icon="qr"
        onClick={handleClickOpen}
      />
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        // TransitionComponent={Transition}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <QrCode petId={petId} />

          <CustomButton
            label="Imprimir"
            color="grey"
            onClick={() => window.print()}
          />
        </Box>
      </Dialog>
    </div>
  );
}
