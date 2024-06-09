import React from "react";

import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { HeroBlock } from "../heroBlock";
import { Footer } from "../footer";

import classes from "./style.module.scss";

export const Layout: React.FC = () => {
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Header />
      <HeroBlock />
      <Box className={classes.content}>
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
};
