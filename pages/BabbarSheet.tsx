import TopNavBar from "../components/TopNavBar";
import { Box, Link, Paper, ThemeProvider, Typography } from "@mui/material";
import useProblems from "../hooks/useProblems";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import Collapsible from "react-collapsible";
import { GridColDef } from "@mui/x-data-grid";
import lbJSON from "../hooks/BabbarJSON.json";
import { BabbarDataGridTheme } from "../styles/StyledComponents/StyledDataGrid";
import {
  SYouterBox,
  SYheaderStack,
  SYheaderText,
  SYsubheaderText,
  SYbutton,
  SYbuttonText,
  SYcollapsibleStack,
  SYdataGrid,
  SYmainContainer,
} from "../styles/StyledComponents/StyledComponents";

const BabbarSheet = () => {
  require("typeface-poppins");

  const { problemTrack, setProblemTrack, sheetProgress } = useProblems();
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "S. No",
      maxWidth: 55,
      align: "center",
      flex: 1,
      headerAlign: "center",
      sortable: false,
    },
    {
      field: "name",
      headerName: "Problem Name",
      flex: 1,
      minWidth: 200,
      sortable: false,
    },
    {
      field: "difficulty",
      headerName: "Difficulty",
      minWidth: 100,
      flex: 1,
      align: "center",
      headerAlign: "center",
      sortable: false,
    },
    {
      field: "link1",
      headerName: "Link 1",
      minWidth: 60,
      flex: 1,
      align: "center",
      headerAlign: "center",
      width: 170,
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
      field: "link2",
      headerName: "Link 2",
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
  // console.log(sheetProgress);
  // #154c79
  return (
    <>
      <TopNavBar />
      <SideBar />
      <SYmainContainer>
        <SYouterBox>
          <SYheaderStack
            sx={{
              backgroundColor: "#154c79",
            }}
          >
            <Box>
              <SYheaderText variant="h1">{lbJSON.name}</SYheaderText>
              <SYsubheaderText variant="h2">
                Number of Topics: {lbJSON.topicCount} <br />
                {sheetProgress[1]} / {lbJSON.problemCount} problems solved
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
                  Love Babbar
                </Typography>
                <Link
                  underline="hover"
                  href="https://www.thecodehelp.in/"
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
                  CodeHelp Website
                </Link>{" "}
                <br />
                <Link
                  underline="hover"
                  href="https://www.youtube.com/c/LoveBabbar1"
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
                  Love Babbar YouTube
                </Link>
              </Box>
              <SYbutton
                variant="contained"
                onClick={() => {
                  setProblemTrack({
                    ...problemTrack,
                    Babbar: [],
                  });
                }}
                sx={{
                  color: "#154c79",
                }}
              >
                <SYbuttonText>Clear Progress</SYbuttonText>
              </SYbutton>
            </Box>
          </SYheaderStack>
          {/* <CollapsibleTable division={lbJSON.divisions} /> */}
          <Box>
            {lbJSON.divisions.map((division: any) => {
              return (
                <SYcollapsibleStack
                  sx={{
                    backgroundColor: "#154c79",
                  }}
                >
                  <Collapsible
                    trigger={division.name}
                    transitionTime={250}
                    open={false}
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
                      <ThemeProvider theme={BabbarDataGridTheme}>
                        <SYdataGrid
                          rows={division.problems}
                          columns={columns}
                          pageSize={10}
                          rowsPerPageOptions={[5]}
                          checkboxSelection
                          autoHeight
                          hideFooterSelectedRowCount
                          autoPageSize
                          disableColumnMenu
                          selectionModel={problemTrack.Babbar}
                          onSelectionModelChange={(newSelection) => {
                            setProblemTrack({
                              ...problemTrack,
                              Babbar: newSelection,
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

export default BabbarSheet;
