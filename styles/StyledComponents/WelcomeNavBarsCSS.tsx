import { Box, Stack, Typography, Button, styled } from "@mui/material";

// styled TOP NAV BAR--------------------------------------
export const NavContainer = styled(Box)({
  padding: "0 20vw",
  display: "flex",
  flexDirection: "row",
  // justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "0.7rem",
  "@media (max-width: 700px)": {
    padding: "0.1rem 0.2rem",
  },
});

export const NavText = styled(Typography)({
  fontFamily: "Kollektif",
  fontSize: "3.5rem",
  fontWeight: "800",
  letterSpacing: "-3px",
  color: "white",
  textShadow: "4px 3px 4px rgba(0,0,0,0.5)",

  "@media (max-width: 700px)": {
    fontSize: "2.5rem",
  },
});

export const LoginButton = styled(Button)({
  backgroundColor: "white",
  borderRadius: "3rem",
  boxShadow: "7px 8px 15px -5px rgba(0,0,0,0.65)",
  ":hover": {
    backgroundColor: "black",
  },
  "@media (max-width: 700px)": {
    width: "4rem",
    height: "2rem",
    padding: "0.1rem",
  },
});

export const LoginText = styled(Typography)({
  fontFamily: "Kollektif",
  fontSize: "1.5rem",
  fontWeight: "800",
  letterSpacing: "1px",
  color: "#7a54a7",
  textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
  "@media (max-width: 700px)": {
    fontSize: "0.8rem",
  },
});

// styled TOP NAV BAR ENDS---------------------------------

// STYLED WELCOME PAGE-------------
export const SYmainBox = styled(Stack)({
  // border: "4px solid black",
  height: "90vh",
  padding: "0 20vw",
  "@media (max-width: 700px)": {
    padding: "0",
  },
});

export const SYinnerBox = styled(Box)({
  // border: "3px solid red",
  height: "100%",
  display: "flex",
  paddingBottom: "8rem",
  justifyContent: "space-around",
  "@media (max-width: 700px)": {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const SYtitleStack = styled(Stack)({
  // border: "1px solid blue",
  display: "flex",
  justifyContent: "center",
  "@media (max-width: 700px)": {
    alignItems: "center",
  },
});

export const SYtitleText = styled(Typography)({
  fontFamily: "Kollektif",
  fontWeight: "800",
  display: "flex",
});

export const SYalertButton = styled(Button)({
  backgroundColor: "white",
  height: "3.5rem",
  margin: "1rem",
  padding: "0 1rem",
  borderTopLeftRadius: "3rem",
  borderBottomLeftRadius: "3rem",
  borderBottomRightRadius: "17rem",
  borderTopRightRadius: "17rem",
  boxShadow: "7px 8px 15px -5px rgba(0,0,0,0.65)",
  ":hover": {
    backgroundColor: "black",
  },
  "@media (max-width: 700px)": {
    height: "2.5rem",
    margin: "0.5rem",
    padding: "0 0.5rem",
    borderTopLeftRadius: "1.5rem",
    borderBottomLeftRadius: "1.5rem",
    borderBottomRightRadius: "8.5rem",
    borderTopRightRadius: "8.5rem",
  },
});

export const SYalertText = styled(Typography)({
  fontFamily: "Kollektif",
  fontWeight: "600",
  fontSize: "2.1rem",
  color: "#fafafd",
  margin: "0.5rem 3rem",
  lineHeight: "1.2",
  textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
  "@media (max-width: 700px)": {
    fontSize: "1rem",
    textAlign: "center",
  },
});

export const SYa = styled("a")({
  textDecoration: "none",
  "&:hover": {
    color: "black",
    textDecoration: "underline",
  },
});

// STYLED WELCOME PAGE--------------------------------------ends
