import Footer from "../components/Footer";
import TopNavBar from "../components/TopNavBar";
import { Box, Link, Paper, ThemeProvider, Typography } from "@mui/material";
import useProblems from "../hooks/useProblems";
import GfgJSON from "../hooks/GfgJSON.json";
import SideBar from "../components/SideBar";
import Collapsible from "react-collapsible";
import { GridColDef } from "@mui/x-data-grid";
import { GfGDataGridTheme } from "../styles/StyledComponents/StyledDataGrid";
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

const GfgSheet = () => {
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
      field: "link1",
      headerName: "Link",
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
  ];

  // #267138;
  return (
    <>
      <TopNavBar />
      <SideBar />
      <SYmainContainer>
        <SYouterBox>
          <SYheaderStack
            sx={{
              backgroundColor: "#267138",
            }}
          >
            <Box>
              <SYheaderText variant="h1">{GfgJSON.name}</SYheaderText>
              <SYsubheaderText variant="h2">
                Number of Topics: {GfgJSON.topicCount} <br />
                {sheetProgress[4]} / {GfgJSON.problemCount} problems solved
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
                  GeeksforGeeks
                </Typography>
                <Link
                  underline="hover"
                  href="https://www.geeksforgeeks.org/sde-sheet-a-complete-guide-for-sde-preparation/"
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
                  GfG SDE Sheet
                </Link>{" "}
                <br />
                <Link
                  underline="hover"
                  href="https://www.geeksforgeeks.org/"
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
                  GfG Website
                </Link>
              </Box>
              <SYbutton
                variant="contained"
                onClick={() => {
                  setProblemTrack({
                    ...problemTrack,
                    Gfg: [],
                  });
                }}
                sx={{
                  color: "#267138",
                }}
              >
                <SYbuttonText>Clear Progress</SYbuttonText>
              </SYbutton>
            </Box>
          </SYheaderStack>
          {/* <CollapsibleTable division={GfgJSON.divisions} /> */}
          <Box>
            {GfgJSON.divisions.map((division: any) => {
              return (
                <SYcollapsibleStack
                  sx={{
                    backgroundColor: "#267138",
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
                      <ThemeProvider theme={GfGDataGridTheme}>
                        <SYdataGrid
                          rows={division.problems}
                          columns={columns}
                          pageSize={10}
                          rowsPerPageOptions={[5]}
                          checkboxSelection
                          autoHeight
                          autoPageSize
                          disableColumnMenu
                          hideFooterSelectedRowCount
                          disableColumnSelector
                          selectionModel={problemTrack.Gfg}
                          onSelectionModelChange={(newSelection) => {
                            setProblemTrack({
                              ...problemTrack,
                              Gfg: newSelection,
                            });
                          }}
                          sx={{
                            "& .MuiTableRow-root.Mui-selected": {
                              border: "2px solid #267138",
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

export default GfgSheet;
