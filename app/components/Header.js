import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const headersData = [
  {
    label: "Listings",
    href: "/listings",
  },
  {
    label: "Mentors",
    href: "/mentors",
  },
  {
    label: "My Account",
    href: "/account",
  },
  {
    label: "Contact Us",
    href: "/contact_us",
  },
];

const useStyles = makeStyles((theme) => ({
  header: {
    height: "max-content",
    paddingBottom: theme.spacing(1),
    backgroundColor: theme.palette.black_koolblock,
    paddingRight: theme.spacing(10),
    paddingLeft: theme.spacing(20),
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
    color: theme.palette.primary[200],
  },
  logo: {
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: theme.spacing(3),
    marginLeft: theme.spacing(5),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Header() {
  const { header, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {kool_block_logo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={toolbar}>
        <Box>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>{getDrawerChoices()}</div>
          </Drawer>
        </Box>
        <Box style={{ width: "100%", textAlign: "center" }}>
          {kool_block_logo}
        </Box>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => (
      <Link href={href} key={label}>
        <MenuItem>{label}</MenuItem>
      </Link>
    ));
  };

  const kool_block_logo = (
    <Link href="/">
      <Image src="/koolblock.png" alt="logo" width={180} height={80}></Image>
    </Link>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => (
      <Link
        href={href}
        key={label}
        {...{
          color: "inherit",
          className: menuButton,
        }}
      >
        {label}
      </Link>
    ));
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
