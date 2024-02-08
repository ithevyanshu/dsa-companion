import {
  Box,
  Stack,
  Typography,
  Button,
  styled,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

export const MainBox = styled(Box)({
  //   border: "1px solid black",
  padding: "0 20vw",
  height: "90vh",
  "@media (max-width: 700px)": {
    padding: "0 0.1rem",
  },
});

export const InnerBox = styled(Box)({
  marginTop: "1.8rem",
  "@media (max-width: 700px)": {
    marginTop: "1rem",
  },
});

export const SYtitleText = styled(Typography)({
  fontFamily: "Kollektif",
  fontWeight: "bold",
  fontSize: "6.5rem",
  color: "white",
  letterSpacing: "-3px",
  textShadow: "5px 4px 5px rgba(0,0,0,0.5)",
  "@media (max-width: 700px)": {
    fontSize: "3.5rem",
  },
});

export const SYsubText = styled(Typography)({
  fontFamily: "Kollektif",
  fontWeight: "bold",
  fontSize: "5rem",
  color: "black",
  textShadow: "3px 2px 3px rgba(0,0,0,0.5)",
  "@media (max-width: 700px)": {
    fontSize: "2.5rem",
  },
});

// CARD COMPONENTS CSS--------------------

export const SYcard = styled(Card)({
  maxWidth: 345,
  boxShadow: "7px 8px 14px -8px rgba(0,0,0,0.89)",
  borderRadius: "10px",
  "@media (max-width: 700px)": {
    maxWidth: "200px",
    boxShadow: "none",
    height: "100%",
  },
});

export const SYcardHeader = styled(CardHeader)({
  "@media (max-width: 700px)": {
    padding: "0.5rem",
  },
  "& .MuiCardHeader-title": {
    fontFamily: "Poppins",
    fontSize: "1.5rem",
    fontWeight: "500",
    "@media (max-width: 700px)": {
      fontSize: "1rem",
    },
  },
  ".MuiCardHeader-subheader": {
    fontFamily: "Poppins",
    fontSize: "1.1rem",
    fontWeight: "500",
    "@media (max-width: 700px)": {
      fontSize: "0.8rem",
    },
  },
});

export const SYcardContent = styled(CardContent)({
  "@media (max-width: 700px)": {
    padding: "0.4rem",
  },
});

export const CardText = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "0.9rem",
  fontWeight: "500",
  "@media (max-width: 700px)": {
    fontSize: "0.7rem",
  },
});
