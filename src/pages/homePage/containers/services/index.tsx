import React from "react";

import { Box, Container, Typography } from "@mui/material";

export const Services: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="h3">Services We Provide</Typography>
        <Typography variant="h6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          of type and scrambled it to make a type specimen book.
        </Typography>
      </Box>
    </Container>
  );
};
