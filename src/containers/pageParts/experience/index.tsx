import React from "react";

import { Box, Container, Typography } from "@mui/material";

import { MultiImages } from "src/components/multiImages";

import classes from "./style.module.scss";
import { CustomButton, CustomIcon } from "src/components";
import { IconType } from "src/types/enums";

export const Experience: React.FC = () => {
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Box>
        <MultiImages />
      </Box>
      <Box className={classes.right}>
        <Typography variant="h3" className={classes.title}>
          <Typography variant="h3">25+ Years of Experience</Typography>
          in Gardening & Landscaping
        </Typography>
        <Box className={classes.rightText}>
          <Typography variant="body">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it make a type specimen book.
          </Typography>
          <Typography variant="body">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it make a type specimen book. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled.
          </Typography>
        </Box>
        <Box className={classes.iconsGroup}>
          <Box className={classes.iconContainer}>
            <CustomIcon type={IconType.ourMission} />
            <Typography variant="h5">Our Mission</Typography>
          </Box>
          <Box className={classes.iconContainer}>
            <CustomIcon type={IconType.ourVision} />
            <Typography variant="h5">Our Vision</Typography>
          </Box>
          <Box className={classes.iconContainer}>
            <CustomIcon type={IconType.supportTeam} />
            <Typography variant="h5">Support Team</Typography>
          </Box>
          <Box className={classes.iconContainer}>
            <CustomIcon type={IconType.clientsTrust} />
            <Typography variant="h5">Clients Trust</Typography>
          </Box>
        </Box>
        <CustomButton text="Discover more" variant='contained' size='large' />
      </Box>
    </Container>
  );
};
