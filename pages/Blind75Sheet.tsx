import Footer from "../components/Footer";
import TopNavBar from "../components/TopNavBar";
import { Box, Link, Paper, ThemeProvider, Typography } from "@mui/material";
import useProblems from "../hooks/useProblems";
import bJSON from "../hooks/BlindJSON.json";
import SideBar from "../components/SideBar";
import Collapsible from "react-collapsible";
import { GridColDef } from "@mui/x-data-grid";
import { Blind75DataGridTheme } from "../styles/StyledComponents/StyledDataGrid";
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

const Blind75Sheet = () => {
  require("typeface-poppins");
  const { problemTrack, setProblemTrack, sheetProgress, setSheetProgress } =
    useProblems();
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "S. No",
      flex: 1,
      maxWidth: 50,
      align: "center",
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
      field: "link",
      headerName: "Link",
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
  ];

  // #a72e54;
  return (
    <>
      <TopNavBar />
      <SideBar />
      <SYmainContainer>
        <SYouterBox>
          <SYheaderStack
            sx={{
              backgroundColor: "#a72e54",
            }}
          >
            <Box>
              <SYheaderText variant="h1">{bJSON.name}</SYheaderText>
              <SYsubheaderText variant="h2">
                Number of Topics: {bJSON.topicCount} <br />
                {sheetProgress[2]} / {bJSON.problemCount} problems solved
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
                  Team Blind
                </Typography>
                <Link
                  underline="hover"
                  href="https://www.teamblind.com/post/New-Year-Gift---Curated-List-of-Top-75-LeetCode-Questions-to-Save-Your-Time-OaM1orEU"
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
                  Original Blind75
                </Link>{" "}
                <br />
                <Link
                  underline="hover"
                  href="https://www.teamblind.com/"
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
                  Team Blind Website
                </Link>
              </Box>
              <SYbutton
                variant="contained"
                onClick={() => {
                  setProblemTrack({
                    ...problemTrack,
                    Blind75: [],
                  });
                }}
                sx={{
                  color: "#a72e54",
                }}
              >
                <SYbuttonText>Clear Progress</SYbuttonText>
              </SYbutton>
            </Box>
          </SYheaderStack>
          {/* <CollapsibleTable division={bJSON.divisions} /> */}
          <Box>
            {bJSON.divisions.map((division: any) => {
              return (
                <SYcollapsibleStack
                  sx={{
                    backgroundColor: "#a72e54",
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
                      <ThemeProvider theme={Blind75DataGridTheme}>
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
                          disableColumnSelector
                          selectionModel={problemTrack.Blind75}
                          onSelectionModelChange={(newSelection) => {
                            setProblemTrack({
                              ...problemTrack,
                              Blind75: newSelection,
                            });
                          }}
                          sx={{
                            "& .MuiTableRow-root.Mui-selected": {
                              border: "2px solid #a72e54",
                            },
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

export default Blind75Sheet;
