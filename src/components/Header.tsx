import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavBarWrapper } from "../styles/Styles.modules";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Movies", path: "/movies" },
  { name: "TV Shows", path: "/tv-shows" },
  { name: "Popular", path: "/popular" },
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
                <NavLink
                  style={{ textDecoration: "none" }}
                  key={index}
                  to={nav.path}
                  className={({ isActive }) =>
                    isActive ? "links active" : "links"
                  }
                >
                  {nav.name}
                </NavLink>
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
