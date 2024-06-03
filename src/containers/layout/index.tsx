import React from "react";

import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../header";

export const Layout: React.FC = () => {
  return (
    <Container maxWidth='xl'>
      <Header />
      <Box>
        <Outlet />
      </Box>
    </Container>
  );
};
