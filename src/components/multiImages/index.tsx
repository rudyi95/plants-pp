import React from "react";

import { Box, Typography } from "@mui/material";

import classes from "./style.module.scss";

export const MultiImages: React.FC = () => {
  return (
    <Box className={classes.root}>
      <Box className={classes.greenBG} />
      <Box className={classes.bigImg}>
        <Typography variant="h2" fontWeight={500}>
          601 x 741
        </Typography>
      </Box>
      <Box className={classes.smallImg}>
        <Typography variant="h2" fontWeight={500}>
          456 x 356
        </Typography>
      </Box>
    </Box>
  );
};
