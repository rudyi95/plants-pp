import React from "react";

import { Container, Typography } from "@mui/material";

import classes from "./style.module.scss";
import { SERVICES_LIST } from "src/utils/constants/services";
import { SimpleCard } from "src/components/cards";

export const Services: React.FC = () => {
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Container maxWidth="md" className={classes.headerContainer}>
        <Typography variant="h3" className={classes.headerTitle}>
          Services We
          <Typography variant="h3">Provide</Typography>
        </Typography>
        <Typography variant="h6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          of type and scrambled it to make a type specimen book.
        </Typography>
      </Container>
      <Container maxWidth="lg" className={classes.cardContainer}>
        {SERVICES_LIST.map((item) => {
          return <SimpleCard {...item} />;
        })}
      </Container>
    </Container>
  );
};
