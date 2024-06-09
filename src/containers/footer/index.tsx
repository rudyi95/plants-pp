import { Box, Container, Input, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import React from "react";

import classes from "./style.module.scss";
import { CustomButton } from "src/components";
import { theme } from "src/utils/constants/ui";
import { ChevronRight, Facebook, LinkedIn, Google, Twitter } from "@mui/icons-material";

export const Footer: React.FC = () => {
  return (
    <Box component="footer" className={classes.root}>
      <Container maxWidth="lg" className={classes.footerHeader}>
        <Typography variant="h3" fontWeight={700} display="flex" gap="15px">
          We Have
          <Typography variant="h3" sx={{ color: theme.palette.mainC.main }} fontWeight={700}>
            Solutions
          </Typography>
          For Your
          <Typography variant="h3" sx={{ color: theme.palette.mainC.main }} fontWeight={700}>
            Garden.
          </Typography>
        </Typography>
        <CustomButton variant="contained" size="large" text="Get A Quote" />
      </Container>
      <Container maxWidth="lg" className={classes.footerCenter}>
        <Box className={classes.CColumn}>
          <Typography variant="h5">Subscribe To Newsletter</Typography>
          <Box className={classes.CSubscribe}>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget
              risus sollicitudin pellentes queet non erat. Maecenas nibh dolor.
            </Typography>
            <Input
              className={classes.CSubscribeInput}
              placeholder="Email... "
              endAdornment={<CustomButton size="large" variant="text" text="Subscribe" />}
            />
            <Box className={classes.CSubscribeSocial}>
              <Facebook /> <LinkedIn /> <Google /> <Twitter />
            </Box>
          </Box>
        </Box>
        <Box className={classes.CColumn}>
          <Typography variant="h5">Contacts</Typography>
          <Box className={classes.CContacts}>
            <Typography variant="h6">27 Division St, New York, NY 10002, USA</Typography>
            <Box>
              <Typography variant="h6">+01 1123456789</Typography>
              <Typography variant="h6">+01 1123456789</Typography>
            </Box>
            <Typography variant="h6">Solarpenal@gmail.Com</Typography>
          </Box>
        </Box>
        <Box className={classes.CColumn}>
          <Typography variant="h5">Useful Links</Typography>
          <Box className={classes.CLinks}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ChevronRight />
                </ListItemIcon>
                <Typography variant="h6">Home</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRight />
                </ListItemIcon>
                <Typography variant="h6">About Us</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRight />
                </ListItemIcon>
                <Typography variant="h6">Services</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRight />
                </ListItemIcon>
                <Typography variant="h6">Project</Typography>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ChevronRight />
                </ListItemIcon>
                <Typography variant="h6">Blog</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRight />
                </ListItemIcon>
                <Typography variant="h6">FAQ</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRight />
                </ListItemIcon>
                <Typography variant="h6">Contact Us</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRight />
                </ListItemIcon>
                <Typography variant="h6">Thank You</Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box className={classes.CColumn}>
          <Typography variant="h5">Popular Services</Typography>
          <Box className={classes.CServices}>
            <Typography variant="h6">Tree Planting</Typography>
            <Typography variant="h6">Grass Cutting</Typography>
            <Typography variant="h6">Pests, Weeds Control</Typography>
            <Typography variant="h6">Project</Typography>
          </Box>
        </Box>
      </Container>
      <Box className={classes.footerBottomContainer}>
        <Container maxWidth="lg" className={classes.footerBottom}>
          <Typography variant="h6">© Copyright Industrio 2021-22. All right reserved.</Typography>
          <Box className={classes.footerBottomLinks}>
            <CustomButton text="Privacy Policy" />
            <CustomButton text="Sitemap" />
            <CustomButton text="Terms Of Use" />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
