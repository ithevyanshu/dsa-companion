/* eslint-disable react/jsx-key */
import TopNavBar from "../components/TopNavBar";
import { Box, Link, Paper, ThemeProvider, Typography } from "@mui/material";
import useProblems from "../hooks/useProblems";
import sJSON from "../hooks/StriverJSON.json";
import SideBar from "../components/SideBar";
import Collapsible from "react-collapsible";
import { GridColDef } from "@mui/x-data-grid";
import { StriverDataGridTheme } from "../styles/StyledComponents/StyledDataGrid";
import {
  SYmainContainer,
  SYouterBox,
  SYheaderStack,
  SYheaderText,
  SYsubheaderText,
  SYbutton,
  SYbuttonText,
  SYcollapsibleStack,
  SYdataGrid,
} from "../styles/StyledComponents/StyledComponents";
import Footer from "../components/Footer";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "S. No",
    maxWidth: 50,
    align: "center",
    flex: 1,
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Problem Name",
    flex: 1,
    sortable: false,
    minWidth: 150,
  },
  {
    field: "difficulty",
    headerName: "Difficulty",
    minWidth: 100,
    flex: 1,
    align: "center",
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "leetCodeLink",
    headerName: "LeetCode Link",
    minWidth: 100,
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (cellValues) => {
      if (cellValues.value != "")
        return (
          <Link href={`${cellValues.value}`} target={"_blank"}>
            LeetCode
          </Link>
        );
    },
    sortable: false,
  },
  {
    field: "gfgLink",
    headerName: "GfG Link",
    minWidth: 100,
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (cellValues) => {
      if (cellValues.value != "")
        return (
          <Link href={`${cellValues.value}`} target={"_blank"}>
            GfG
          </Link>
        );
    },
    sortable: false,
  },
  {
    field: "cnLink",
    headerName: "Coding Ninjas Link",
    minWidth: 100,
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (cellValues) => {
      if (cellValues.value != "")
        return (
          <Link href={`${cellValues.value}`} target={"_blank"}>
            Coding Ninjas
          </Link>
        );
    },
    sortable: false,
  },
];

const StriverSheet = () => {
  require("typeface-poppins");
  const { problemTrack, setProblemTrack, sheetProgress } = useProblems();
  return (
    <>
      <TopNavBar />
      <SideBar />
      <SYmainContainer>
        <SYouterBox>
          <SYheaderStack
            sx={{
              backgroundColor: "#be2535",
            }}
          >
            <Box>
              <SYheaderText variant="h1">{sJSON.name}</SYheaderText>
              <SYsubheaderText variant="h2">
                Number of Topics: {sJSON.topicCount} <br />
                {sheetProgress[0]} / {sJSON.problemCount} problems solved
              </SYsubheaderText>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "right",
                fontFamily: "Poppins",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    "@media (max-width: 700px)": {
                      fontSize: "0.6rem",
                    },
                  }}
                >
                  Sheet Credits: <br />
                  Raj Vikramaditya(Striver)
                </Typography>
                <Link
                  underline="hover"
                  href="https://takeuforward.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    fontSize: "0.8rem",
                    "@media (max-width: 700px)": {
                      fontSize: "0.6rem",
                    },
                  }}
                >
                  takeUforward Website
                </Link>{" "}
                <br />
                <Link
                  underline="hover"
                  href="https://www.youtube.com/c/takeUforward"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    fontSize: "0.8rem",
                    "@media (max-width: 700px)": {
                      fontSize: "0.6rem",
                    },
                  }}
                >
                  takeUforward YouTube
                </Link>
              </Box>
              <SYbutton
                variant="contained"
                onClick={() => {
                  setProblemTrack({
                    ...problemTrack,
                    Striver: [],
                  });
                }}
                sx={{
                  color: "#be2535",
                }}
              >
                <SYbuttonText>Clear Progress</SYbuttonText>
              </SYbutton>
            </Box>
          </SYheaderStack>
          {/* <CollapsibleTable division={sJSON.divisions} /> */}
          <Box>
            {sJSON.allDivisions.map((division: any) => {
              return (
                <SYcollapsibleStack
                  sx={{
                    backgroundColor: "#be2535",
                  }}
                >
                  <Collapsible
                    trigger={division.name}
                    transitionTime={250}
                    open={true}
                    triggerStyle={{
                      cursor: "pointer",
                      textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    <Paper
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "1rem",
                      }}
                    >
                      {/* <TableComponent data={division.problems} /> */}
                      <ThemeProvider theme={StriverDataGridTheme}>
                        <SYdataGrid
                          rows={division.problems}
                          columns={columns}
                          pageSize={12}
                          rowsPerPageOptions={[5]}
                          checkboxSelection
                          autoHeight
                          autoPageSize
                          hideFooter
                          disableColumnMenu
                          selectionModel={problemTrack.Striver}
                          onSelectionModelChange={(newSelection) => {
                            setProblemTrack({
                              ...problemTrack,
                              Striver: newSelection,
                            });
                          }}
                        />
                      </ThemeProvider>
                    </Paper>
                  </Collapsible>
                </SYcollapsibleStack>
              );
            })}
          </Box>
        </SYouterBox>
      </SYmainContainer>
      <Footer />
    </>
  );
};

export default StriverSheet;
