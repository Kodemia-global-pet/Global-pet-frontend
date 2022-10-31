import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "./QROptionCard.module.scss";

const QROptionCard = ({ children, title, changeOption, option, selected }) => {
  return (
    <Card
      sx={{ height: "100%" }}
      className={`${styles.cardOption} ${selected && styles.selectedCard}`}
      onClick={() => changeOption(option)}
    >
      <CardActionArea
        sx={{ height: "100%", display: "flex", alignItems: "baseline" }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {children}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default QROptionCard;
