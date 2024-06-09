import React from "react";

import { Box, Card, CardContent, Typography } from "@mui/material";
import { IconType } from "src/types/enums";
import CustomIcon from "src/components/customIcon";

import classes from "./style.module.scss";

interface IProps {
  icon: IconType;
  title: string;
  text: string;
}
export const SimpleCard: React.FC<IProps> = ({ icon, title, text }) => {
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <CustomIcon type={icon} />
        <Box className={classes.textContent}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body">{text}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
