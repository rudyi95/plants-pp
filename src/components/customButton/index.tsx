import React from "react";

import { Button, ButtonProps } from "@mui/material";
import CustomIcon from "../customIcon";
import { IconType } from "src/types/enums";

import classes from "./style.module.scss";

interface IProps {
  text: string;
  icon?: IconType;
}

export const CustomButton: React.FC<IProps & ButtonProps> = ({ text, icon, ...props }) => {
  return (
    <Button className={classes.root} {...props}>
      {!!icon && <CustomIcon type={icon} />}
      {text}
    </Button>
  );
};
