import { Box, Stack, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterContainer = styled(Box)({
  backgroundColor: "black",
  padding: "0 20vw",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "0.7rem",
  height: "100px",
  zIndex: 1000,
  //   position: "fixed",
  bottom: "0",
  "@media (max-width: 700px)": {
    padding: "0.1rem 0.2rem",
    height: "160px",
  },
});

export const InnerBox = styled(Box)({
  //   border: "1px solid white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
});

export const FooterText = styled(Link)({
  fontFamily: "Poppins",
  fontSize: "1rem",
  color: "white",
  textShadow: "4px 3px 4px rgba(0,0,0,0.5)",

  "@media (max-width: 700px)": {
    fontSize: "0.8rem",
  },
});
