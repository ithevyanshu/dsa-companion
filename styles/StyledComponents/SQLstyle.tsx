import {
  styled,
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  Checkbox,
} from "@mui/material";

export const MainBox = styled(Box)({
  padding: "0 20vw",
  marginTop: "1.5vh",
  "@media (max-width: 700px)": {
    padding: "0 0vw",
  },
});

export const ContainerBox = styled(Box)({
  backgroundColor: "#fafafd",
  padding: "1rem",
  borderRadius: "1rem",
  boxShadow: "0px -1px 10px 1px rgba(0,0,0,0.6)",
  "@media (max-width: 700px)": {
    padding: "0.5rem",
  },
});

export const StyledHeading = styled(Box)({
  backgroundColor: "#355070",
  marginBottom: "1rem",
  padding: "0.5rem",
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.6)",
  "@media (max-width: 700px)": {
    padding: "0.2rem",
    justifyContent: "center",
  },
});

export const HeadingText = styled(Typography)({
  fontFamily: "Kollektif",
  lineHeight: "1.2",
  fontSize: "5rem",
  fontWeight: "800",
  letterSpacing: "-2px",
  color: "white",
  textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
  "@media (max-width: 700px)": {
    fontSize: "3rem",
  },
});

export const SYlistBox = styled(Box)({
  backgroundColor: "#355070",
  padding: "0.5rem",
  borderRadius: "1rem",
  marginBottom: "1rem",
  boxShadow: "7px 8px 14px -8px rgba(0,0,0,0.89)",
  "@media (max-width: 700px)": {
    padding: "0.4rem",
  },
});

export const TopicBox = styled(Box)({
  // backgroundColor: "#355070",
  backgroundColor: "#fafafd",
  borderRadius: "1rem",
  margin: "0.2rem 0 0.8rem 0",
  padding: "0.5rem",
  boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.6)",
});

export const TopicText = styled(Typography)({
  fontFamily: "Kollektif",
  lineHeight: "1.2",
  fontSize: "3.5rem",
  fontWeight: "800",
  letterSpacing: "-2px",
  color: "#355070",
  textShadow: "2px 1px 2px rgba(0,0,0,0.5)",
  "@media (max-width: 700px)": {
    fontSize: "2rem",
  },
});

export const SYstack = styled(Stack)({
  backgroundColor: "#fafafd",
  marginBottom: "0.2rem",
  color: "black",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  padding: "0.5vh",
  "&:hover": {
    backgroundColor: "#ffe9c9",
  },
  "@media (max-width: 700px)": {
    padding: "0.2rem",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export const SYstackText = styled(Typography)({
  color: "black",
  fontSize: "1.1rem",
  margin: "0rem 0.5rem",
  fontFamily: "Poppins",
  fontWeight: "500",
  "@media (max-width: 700px)": {
    fontSize: "0.8rem",
    margin: "0rem 0.1rem",
  },
});

export const ProgressText = styled(SYstackText)({
  color: "white",
  fontSize: "1.5rem",
  textShadow: "2px 1px 2px rgba(0,0,0,0.5)",
  "@media (max-width: 700px)": {
    fontSize: "0.7rem",
  },
});

export const ProgressCheck = styled(Checkbox)({
  color: "white",
  "&.Mui-checked": {
    color: "white",
  },
  "& .MuiSvgIcon-root": { fontSize: 30 },
  "@media (max-width: 700px)": {
    "& .MuiSvgIcon-root": { fontSize: 15 },
  },
});

export const ProgressBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
