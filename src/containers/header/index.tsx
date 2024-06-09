import React, { useState } from "react";

import { AppBar, Box, Container, FormControl, MenuItem, Select, Typography } from "@mui/material";

import { CustomButton, CustomIcon } from "src/components";

import { IconType } from "src/types/enums";
import Logo from "src/assets/header/headerLogo.png";

import classes from "./style.module.scss";

export const Header: React.FC = () => {
  const [lang, setLang] = useState("EN");

  return (
    <AppBar className={classes.root} position="relative">
      <Box className={classes.top}>
        <Container className={classes.container} maxWidth="lg">
          <Box className={classes.rowBlock}>
            <Box>
              <CustomIcon type={IconType.mail} />
              <Typography variant="body">Email: rudyi95@icloud.com</Typography>
            </Box>
            <Box>
              <CustomIcon type={IconType.phoneCall} />
              <Typography variant="body">+1 239 412 24 35</Typography>
            </Box>
            <Box>
              <CustomIcon type={IconType.location} />
              <Typography variant="body">616 NW 1st Ave, Hallandale Beach, FL, 33009</Typography>
            </Box>
          </Box>
          <FormControl variant="standard" className={classes.selectContainer}>
            <Select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className={classes.select}
            >
              <MenuItem value="EN">English</MenuItem>
              <MenuItem value="UA">Ukrainian</MenuItem>
            </Select>
          </FormControl>
        </Container>
      </Box>
      <Box className={classes.bottom}>
        <Container className={classes.container} maxWidth="lg">
          <img src={Logo} alt="logo" />
          <Box className={classes.rowBlock}>
            <Box className={classes.nav}>
              <Typography variant="button1">Home</Typography>
              <Typography variant="button1">Company</Typography>
              <Typography variant="button1">Services</Typography>
              <Typography variant="button1">Project</Typography>
              <Typography variant="button1">Blog</Typography>
              <Typography variant="button1">Contact</Typography>
            </Box>
            <CustomButton variant="contained" text="Call Us" icon={IconType.callUs} />
          </Box>
        </Container>
      </Box>
    </AppBar>
  );
};
