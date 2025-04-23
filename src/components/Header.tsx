import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavBarWrapper } from "../styles/Styles.modules";
import { NavLink } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

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
        <AppBar sx={{ padding: "0.5rem", backgroundColor: "#0c0f10" }}>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              height: "5rem",
            }}
          >
            <Typography className="logo">Movie Hub</Typography>
            <div className="nav-links">
              {menuItems.map((nav, index) => (
                <NavLink
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
            <Button
              className="login-btn"
              variant="contained"
              sx={{ borderRadius: "30px", height: "3rem" }}
            >
              <LoginIcon sx={{ marginRight: "0.5rem" }} />
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </NavBarWrapper>
    </>
  );
}

export default Header;
