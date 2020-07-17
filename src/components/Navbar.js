import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenu from "@material-ui/core/Drawer";

import avatar from "../avatar.jpg";

import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";

import {
  ArrowBack,
  AssignmentInd,
  ContactMail,
  Home,
  Apps,
  Contact,
} from "@material-ui/icons";

// CSS styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "30rem",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();
  const slideList = (slider) => {
    return (
      <Box
        className={classes.menuSliderContainer}
        component="div"
        onClick={() => toggleSlider(slider, false)}
      >
        <Avatar className={classes.avatar} src={avatar} alt="ozhan" />
        <Divider />
        <List>
          {menuItems.map((lsItem, key) => (
            <ListItem button key={key} component={Link} to={lsItem.listPath}>
              <ListItemIcon className={classes.listItem}>
                {lsItem.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listItem}
                primary={lsItem.listText}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={() => toggleSlider("right", true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            <MobileRightMenu
              anchor="right"
              open={state.right}
              onClose={() => toggleSlider("right", false)}
            >
              {slideList("right")}
            </MobileRightMenu>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
