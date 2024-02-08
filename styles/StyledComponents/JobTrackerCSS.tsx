import {
  styled,
  Box,
  Stack,
  Typography,
  Button,
  TextField,
} from "@mui/material";

export const MainContainer = styled(Box)({
  padding: "0 20vw",
  height: "100%",
  marginBottom: "25rem",
  "@media (max-width: 1500px)": {
    padding: "0rem",
    paddingLeft: "5rem",
    paddingRight: "1rem",
  },
  "@media (max-width: 700px)": {
    padding: "0rem",
  },
});

export const HeaderBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#5e548e",
  marginBottom: "1rem",
  padding: "0.5rem",
  borderRadius: "1rem",
  boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.6)",
  "@media (max-width: 700px)": {
    padding: "0.3rem",
    marginBottom: "0.5rem",
    boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.6)",
  },
});

export const StyledTitle = styled(Typography)({
  fontFamily: "Kollektif",
  fontSize: "4.5rem",
  fontWeight: "800",
  color: "white",
  textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
  alignSelf: "flex-start",
  "@media (max-width: 700px)": {
    fontSize: "3rem",
  },
});

export const StyledStats = styled(Typography)({
  fontSize: "2.3rem",
  fontFamily: "Kollektif",
  fontWeight: "800",
  textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
  "@media (max-width: 1500px)": {
    fontSize: "2rem",
  },
  "@media (max-width: 700px)": {
    fontSize: "1rem",
  },
});

export const StyledStatsCount = styled(Typography)({
  fontSize: "2rem",
  fontFamily: "Kollektif",
  fontWeight: "800",
  textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
  "@media (max-width: 700px)": {
    fontSize: "1.1rem",
  },
});

export const StatContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});

export const FormBox = styled(Box)({
  backgroundColor: "#355070",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginBottom: "1rem",
  padding: "0.5rem",
  borderRadius: "1rem",
  boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.6)",
  "@media (max-width: 700px)": {
    padding: "0.15rem",
    marginBottom: "0.5rem",
    boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.6)",
  },
});

export const FormDivs = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  "@media (max-width: 700px)": {
    flexDirection: "column",
  },
});

export const StyledTextField = styled(TextField)({
  width: "100%",
  margin: "0.4rem",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
      borderRadius: "0.6rem",
    },
    "&:hover fieldset": {
      borderColor: "white  ",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },

  "& .MuiInputLabel-root": {
    fontFamily: "Poppins",
    fontSize: "1rem",
    color: "white !important",
  },
  "& .MuiInputBase-input": {
    fontSize: "1.1rem",
    color: "white",
  },

  "@media (max-width: 700px)": {
    margin: "0.15rem",
    "& fieldset": {
      borderRadius: "0.2rem",
      // height: "1.5rem",
    },

    "& .MuiInputLabel-root": {
      fontSize: "0.9rem",
    },
    "& .MuiInputBase-input": {
      fontSize: "0.9rem",
    },
  },
});

export const StyledJobTextField = styled(StyledTextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
  "& .MuiInputBase-input": {
    color: "black",
  },
  "& .MuiInputLabel-root": {
    color: "black !important",
  },

  "@media (max-width: 700px)": {
    height: "2.5rem",
    textOverflow: "none",

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "0.6rem",
        height: "2.5rem",
      },
    },

    "& .MuiInputLabel-root": {
      fontSize: "0.7rem",
    },
    "& .MuiInputBase-input": {
      padding: "0.5rem",
      fontSize: "0.9rem",
    },
  },
});

export const StyledButton = styled(Button)({
  width: "100%",
  height: "4rem",
  margin: "0.4rem",
  borderRadius: "0.9rem",
  padding: "0rem",
  "& .MuiButton-label": {
    color: "white",
  },
  "& .MuiButton-root": {
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },

  "@media (max-width: 700px)": {
    borderRadius: "0.6rem",
    margin: "0.2rem",
    height: "3rem",
  },
});

export const StyledStack = styled(Stack)({
  width: "100%",
  backgroundColor: "#355070",
  marginBottom: "1rem",
  padding: "0.5rem",
  borderRadius: "1rem",
  boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.6)",
  "@media (max-width: 700px)": {
    marginBottom: "0.5rem",
    boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.6)",
  },
});

export const JobContainer = styled(Box)({
  backgroundColor: "white",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginBottom: "0.7rem",
  padding: "0.2rem",
  borderRadius: "1rem",
  boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.6)",
  "@media (max-width: 700px)": {
    marginBottom: "0.5rem",
    boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.6)",
    padding: "0.1rem",
  },
});

export const JobText = styled(Typography)({
  color: "black",
  fontSize: "1rem",
  fontFamily: "Poppins",
  fontWeight: "400",
  alignSelf: "center",
  justifySelf: "center",
  width: "100%",
  margin: "2px",
  textOverflow: "ellipsis",
  overflow: "hidden",
  overflowWrap: "break-word",

  // whiteSpace: "nowrap",
  "@media (max-width: 700px)": {
    fontSize: "0.8rem",
  },
});
