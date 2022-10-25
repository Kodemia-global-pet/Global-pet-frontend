import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import QrCodeIcon from "@mui/icons-material/QrCode";

const iconMap = {
  delete: <DeleteIcon />,
  add: <AddIcon />,
  edit: <EditIcon />,
  qr: <QrCodeIcon />,
  user: <AccountCircleIcon />,
};

const CustomButton = ({ label, color, icon, variant = "contained" }) => {
  return (
    <Button variant={variant} color={color} startIcon={iconMap[icon]}>
      {label}
    </Button>
  );
};

export default CustomButton;
