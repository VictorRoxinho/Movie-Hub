import React from "react";
import { AppBar, Toolbar, Typography, Tab, Button } from "@mui/material";
import { NavBarWrapper } from "../styles/Header.modules";

const menuItems = [
  { name: "Home" },
  { name: "Movies" },
  { name: "TV Shows" },
  { name: "Popular" },
];

function Header() {
  return (
    <>
      <NavBarWrapper>
        <AppBar sx={{ padding: "0.5rem", backgroundColor: "#060B26" }}>
          <Toolbar>
            <Typography className="logo">Movie Hub</Typography>
            <div className="nav-links">
              {menuItems.map((nav, index) => (
                <Tab className="links" label={nav.name} key={index} />
              ))}
            </div>
            <Button className="login-btn" variant="contained" color="secondary">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </NavBarWrapper>
    </>
  );
}

export default Header;
