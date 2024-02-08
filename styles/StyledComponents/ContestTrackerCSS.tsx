import { Box, Stack, Typography, Button, styled, Link } from "@mui/material";

export const SYmainContainer = styled(Box)({
  backgroundColor: "#fafafd",
  padding: "1rem",
  marginTop: "1rem",
  borderRadius: "1rem",
  boxShadow: "0px -1px 10px 1px rgba(0,0,0,0.6)",
  "@media (max-width: 700px)": {
    padding: "0.5rem",
  },
});

export const SYheaderBox = styled(Box)({
  backgroundColor: "#a72e54",
  marginBottom: "1rem",
  padding: "0.5rem",
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.6)",
  "@media (max-width: 700px)": {
    padding: "0.2rem",
    justifyContent: "center",
  },
});

export const SYheaderText = styled(Typography)({
  fontFamily: "Kollektif",
  fontSize: "5rem",
  fontWeight: "800",
  letterSpacing: "-3px",
  color: "white",
  textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
  "@media (max-width: 700px)": {
    fontSize: "3rem",
  },
});

export const SYlistBox = styled(Box)({
  backgroundColor: "#a72e54",
  padding: "0.5rem",
  borderRadius: "1rem",
  fontSize: "2.5rem",
  fontFamily: "Kollektif",
  fontWeight: "800",
  color: "white",
  marginBottom: "1rem",
  boxShadow: "7px 8px 14px -8px rgba(0,0,0,0.89)",
  "@media (max-width: 700px)": {
    padding: "0.4rem",
  },
});

export const SYstack = styled(Stack)({
  backgroundColor: "#fafafd",
  margin: "0.5rem 0rem",
  color: "black",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  padding: "0.5vh",
  borderRadius: "0.5rem",
  boxShadow: "7px 8px 14px -8px rgba(0,0,0,0.89)",
  height: "4.5rem",
  "&:hover": {
    backgroundColor: "#f0cad6",
  },
  "@media (max-width: 700px)": {
    padding: "0.2rem",
    height: "4.5rem",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export const SYimage = styled(Box)({
  width: "48px",
  height: "40px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 700px)": {
    width: "34px",
    height: "30px",
  },
});

export const SYstackText = styled(Typography)({
  color: "black",
  fontSize: "1.1rem",
  margin: "0rem 0.5rem",
  fontFamily: "Poppins",
  "@media (max-width: 700px)": {
    fontSize: "0.8rem",
  },
});

export const SYcontestName = styled(Link)({
  color: "black",
  fontSize: "1.1rem",
  margin: "0rem 0.5rem",
  fontFamily: "Poppins",
  fontWeight: "500",
  "@media (max-width: 700px)": {
    fontSize: "0.88rem",
  },
});

export const SYstackTextB = styled(SYstackText)({
  fontWeight: "600",
});

export const SYbutton = styled(Button)({
  backgroundColor: "#a72e54",
  color: "white",
  "&:hover": {
    backgroundColor: "#f0cad6",
    color: "#a72e54",
    border: "1px solid #a72e54",
  },
});
