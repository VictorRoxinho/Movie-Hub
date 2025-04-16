import styled from "styled-components";

// Header
export const NavBarWrapper = styled.div`
  * {
    font-family: "Montserrat", sans-serif;
  }

  .logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: #ffffff;
    flex-grow: 1;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .links {
    color: #ffffff;
    font-size: 1rem;
    text-transform: capitalize;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .links:hover {
    color: #ff5722;
  }

  .login-btn {
    background-color: #ff5722;
    color: #ffffff;
    font-weight: 600;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
  }

  .login-btn:hover {
    background-color: #e64a19;
  }

  @media (max-width: 1060px) {
  }
`;

// Display Items

export const MovieShowsWrapper = styled.div`
  padding-top: 80px; /* Ajuste este valor para corresponder à altura do Header */
  max-width: 1200px;
`;
