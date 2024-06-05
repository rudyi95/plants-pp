import React from "react";

import { Box, Typography } from "@mui/material";

import classes from "./style.module.scss";
import { CustomButton, CustomIcon } from "src/components";
import { IconType } from "src/types/enums";

export const HeroBlock: React.FC = () => {
  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Box className={classes.contentInner}>
          <Box className={classes.contentPicture}>
            <Box className={classes.contentPictureInner}>
              <Typography variant="h4" color="#676767">
                197 x 278
              </Typography>
            </Box>
          </Box>
          <Box className={classes.contentText}>
            <Box display="flex" flexDirection="column" justifyContent="space-between" gap="25px">
              <Box>
                <CustomIcon type={IconType.plantSmall} />
                <Typography variant="button2">Landscape planting services</Typography>
              </Box>
              <Typography variant="h2" fontWeight="800">
                Perfect Landscape
              </Typography>
              <Typography variant="h2" fontWeight="800">
                Solution.
              </Typography>
              <Typography variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <Box sx={{ display: "flex", gap: "40px" }}>
                <CustomButton text="Get A Quate" variant="green" />
                <CustomButton text="See how it works ->" variant="text" />
              </Box>
            </Box>
            <Box className={classes.contentTextLast}>
              <Box className={classes.contextTextLastItem}>
                <Box>500+</Box>
                <Typography variant="button2" width="100px">
                  Happy Customers
                </Typography>
              </Box>
              <Box className={classes.contextTextLastItem}>
                <Box>800+</Box>
                <Typography variant="button2" width="100px">
                  Garden Created
                </Typography>
              </Box>
              <Box className={classes.contextTextLastItem}>
                <Box>100+</Box>
                <Typography variant="button2" width="100px">
                  Team Members
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.picture}>
        <Typography variant="h2" color="#676767" fontWeight="700">
          1013 x 673
        </Typography>
      </Box>
    </Box>
  );
};
