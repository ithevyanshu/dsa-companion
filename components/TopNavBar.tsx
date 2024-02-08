import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Router from "next/router";
import logo from "./logoBigWH.png";
import Image from "next/image";

import {
  NavContainer,
  NavText,
  LoginButton,
  LoginText,
} from "../styles/StyledComponents/WelcomeNavBarsCSS";

const TopNavBar = () => {
  return (
    <NavContainer>
      <Box
        onClick={() => {
          Router.push("/");
        }}
        sx={{
          height: "6.5rem",
          width: "6.5rem",
          margin: "0 1rem 0 1rem",
          "&:hover": {
            cursor: "pointer",
          },
          "@media (max-width: 700px)": {
            margin: "0 0.2rem 0 0.2rem",
            width: "3rem",
            height: "3rem",
          },
        }}
      >
        <Image src={logo} alt="logo" />
      </Box>
      <NavText variant="h1">DSA Companion</NavText>
    </NavContainer>
  );
};

export default TopNavBar;
