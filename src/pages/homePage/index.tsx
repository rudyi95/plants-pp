import { Box } from "@mui/material";
import React from "react";
import { Services, Experience } from "src/containers/pageParts";

import classes from "./style.module.scss";

export const HomePage: React.FC = () => {
  return (
    <Box className={classes.root}>
      <Services />
      <Experience />
    </Box>
  );
};
