import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import QrCodeIcon from "@mui/icons-material/QrCode";

const iconMap = {
  delete: <DeleteIcon />,
  add: <AddIcon />,
  edit: <EditIcon />,
  qr: <QrCodeIcon />,
};


const CustomButton = ({ label, color, icon }) => {

  return (
    <Button
      variant="contained"
      color= {color}
      startIcon={iconMap[icon]}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
