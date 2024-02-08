import { Box, Stack, Typography, Button, styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material";
// STYLED SDE SHEETS COMPONENTS-------------------------------

export const SYmainContainer = styled(Box)({
  padding: "0 20vw",
  marginBottom: "5vh",
  "@media (max-width: 700px)": {
    padding: "0 0.2rem",
  },
});

export const SYouterBox = styled(Box)({
  // border: "1px solid #000",
  backgroundColor: "#fafafd",
  padding: "1rem",
  marginTop: "1rem",
  borderRadius: "1rem",
  boxShadow: "0px -1px 10px 1px rgba(0,0,0,0.6)",
  "@media (max-width: 700px)": {
    padding: "0.5rem",
  },
});

export const SYheaderStack = styled(Stack)({
  // backgroundColor: "#a72e54",
  // border: "1px solid #000",
  marginBottom: "1rem",
  padding: "0.5rem",
  borderRadius: "1rem",
  flexDirection: "row",
  justifyContent: "space-between",
  boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.6)",
  "@media (max-width: 700px)": {
    padding: "0.5rem",
    marginBottom: "0.5rem",
    position: "sticky",
    top: "0",
    zIndex: 1,
  },
});

export const SYheaderText = styled(Typography)({
  fontSize: "4rem",
  fontFamily: "Kollektif",
  fontWeight: "800",
  textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
  "@media (max-width: 700px)": {
    fontSize: "1.5rem",
  },
});

export const SYsubheaderText = styled(SYheaderText)({
  fontSize: "2.5rem",
  fontWeight: "600",
  "@media (max-width: 700px)": {
    fontSize: "1.2rem",
  },
});

export const SYbutton = styled(Button)({
  //   color: "#a72e54",
  backgroundColor: "white",
  padding: "0.5rem",
  width: "10rem",
  height: "2rem",
  alignSelf: "flex-end",
  ":hover": {
    backgroundColor: "black",
    color: "white",
  },
  "@media (max-width: 700px)": {
    width: "5rem",
    height: "1.5rem",
    padding: "0.2rem",
  },
});

export const SYbuttonText = styled(Typography)({
  fontFamily: "Kollektif",
  fontSize: "1rem",
  fontWeight: "600",
  "@media (max-width: 700px)": {
    fontSize: "0.5rem",
  },
});

export const SYcollapsibleStack = styled(Stack)({
  //   backgroundColor: "#a72e54",
  padding: "0.5rem",
  borderRadius: "1rem",
  fontSize: "2.5rem",
  fontFamily: "Kollektif",
  fontWeight: "800",
  color: "white",
  marginBottom: "1rem",
  boxShadow: "7px 8px 14px -8px rgba(0,0,0,0.89)",
  "@media (max-width: 700px)": {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
  },
});

export const SYdataGrid = styled(DataGrid)({
  color: "black",
  fontSize: "1rem",
  border: "none",
  alignContent: "space-around",
  "& .MuiDataGrid-checkboxInput": {
    color: "#a72e54 !important",
    width: "0.5rem",
    height: "0.5rem",
  },
  "& .MuiDataGrid-sortIcon": {
    color: "#a72e54",
  },
  "& .MuiDataGrid-cellCheckbox": {
    color: "#a72e54 !important",
    width: "0.5rem",
    height: "0.5rem",
  },
  "& .MuiDataGrid-cell": {
    fontFamily: "Poppins",
    fontSize: "1rem",
    fontWeight: "500",
    // border: "1px solid black",
    "@media (max-width: 700px)": {
      fontSize: "0.8rem",
    },
  },
  "& .MuiDataGrid-columnHeader": {
    fontFamily: "Poppins",
    fontSize: "1.1rem",
    fontWeight: "500",
    "@media (max-width: 700px)": {
      fontSize: "0.8rem",
    },
  },
  "& .MuiDataGrid-columnHeaders": {
    // backgroundColor: "#ebb6c6",
  },
  // "& .MuiDataGrid-row": {
  //   backgroundColor: "#fdfdfd",
  //   "&:hover": {
  //     backgroundColor: "#a72e54",
  //     color: "white",
  //   },
  // },
});

// STYLED SDE SHEETS COMPONENTS-------------------------------ends
