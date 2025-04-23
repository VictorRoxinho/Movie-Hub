import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(180deg, #0c0f10, #1c1d1c);
    color: #ffffff; 
    margin: 0;
    font-family: "Montserrat", sans-serif;
  }
`;

// Header

export const NavBarWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-family: "Special Gothic Expanded One", sans-serif;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: bold;
    color: #ffffff;
  }

  .logo:hover {
    color: #ff5722;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    cursor: default;
  }

  .nav-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1c1d1c;
    height: 4rem;
    border-radius: 30px;
    padding: 0 0.5rem;
    font-size: 1.2rem;
    color: #929393;
  }

  .links {
    padding: 0 2rem;
  }

  .nav-links .links {
    color: #929393;
    text-decoration: none;
  }

  .nav-links .links:visited {
    color: #929393;
  }

  .links.active {
    color: #ffffff;
    background-color: #0c0f10;
    height: 85%;
    border-radius: 30px;
  }

  .nav-links .links.active {
    display: flex;
    color: #ffffff;
    align-items: center;
  }

  .login-btn {
    background-color: #ff5722;
    font-weight: bold;
  }

  @media (max-width: 1060px) {
  }
`;

// Display Items

export const MovieShowsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  max-width: 85vw;
  margin: 0 auto;

  .highlight {
    position: relative;
    width: 100%;
    height: 55vh;
    border-radius: 10px;
    overflow: hidden; // Faz com que a imagem não ultrapasse os limites do contêiner
    margin-bottom: 20px;
  }

  .highlight-banner {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .highlight-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Garante que a imagem preencha o espaço sem distorção */
    filter: brightness(0.7);
  }

  .highlight-content {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #fff;
    z-index: 2;
    max-width: 50%;
  }

  .highlight-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .highlight-overview {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .highlight-button {
    background-color: #ff5722;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .highlight-button:hover {
    background-color: #e64a19;
  }

  .show-description {
    text-align: left;
    background-color: red;
    width: 100%;
  }

  .show-banner {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .show-banner img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }

  .movieGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
    width: 100%;
  }

  .movieCard {
    background-color: #ffffff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }

  .movieCard:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  .movieCard img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ddd;
  }

  .movieCard h3 {
    margin: 10px 0;
    font-size: 1.2rem;
    color: #333;
  }

  .movieCard p {
    font-size: 0.9rem;
    color: #555;
    margin: 5px 0;
  }
`;
