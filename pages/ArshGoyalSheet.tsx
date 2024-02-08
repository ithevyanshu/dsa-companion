import Footer from "../components/Footer";
import TopNavBar from "../components/TopNavBar";
import { Box, Link, Paper, ThemeProvider, Typography } from "@mui/material";
import useProblems from "../hooks/useProblems";
import ArshGoyalJSON from "../hooks/ArshGoyalJSON.json";
import SideBar from "../components/SideBar";
import Collapsible from "react-collapsible";
import { GridColDef } from "@mui/x-data-grid";
import { ArshDataGridTheme } from "../styles/StyledComponents/StyledDataGrid";
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

const ArshGoyalSheet = () => {
  require("typeface-poppins");
  // var lol = 1;

  // const lolol = ArshGoyalJSON;
  // lolol.divisions.map((div) => {
  //   div.problems.map((pro) => {
  //     pro.id = lol++;
  //   });
  // });

  // console.log(lolol);

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
              LeetCode
            </Link>
          );
      },
      sortable: false,
    },
    {
      field: "link2",
      headerName: "Link",
      minWidth: 100,
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (cellValues) => {
        if (cellValues.value != "")
          return (
            <Link href={`${cellValues.value}`} target={"_blank"}>
              GeeksForGeeks
            </Link>
          );
      },
      sortable: false,
    },
  ];

  // #e27743;
  return (
    <>
      <TopNavBar />
      <SideBar />
      <SYmainContainer>
        <SYouterBox>
          <SYheaderStack
            sx={{
              backgroundColor: "#e27743",
            }}
          >
            <Box>
              <SYheaderText variant="h1">{ArshGoyalJSON.name}</SYheaderText>
              <SYsubheaderText variant="h2">
                Number of Topics: {ArshGoyalJSON.topicCount} <br />
                {sheetProgress[5]} / {ArshGoyalJSON.problemCount} problems
                solved
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
                  Arsh Goyal
                </Typography>
                <Link
                  underline="hover"
                  href="https://www.codekickstart.org/"
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
                  CodeKickStart Website
                </Link>{" "}
                <br />
                <Link
                  underline="hover"
                  href="https://www.youtube.com/c/ArshGoyal"
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
                  Arsh Goyal YouTube
                </Link>
              </Box>
              <SYbutton
                variant="contained"
                onClick={() => {
                  setProblemTrack({
                    ...problemTrack,
                    ArshGoyal: [],
                  });
                }}
                sx={{
                  color: "#e27743",
                }}
              >
                <SYbuttonText>Clear Progress</SYbuttonText>
              </SYbutton>
            </Box>
          </SYheaderStack>
          {/* <CollapsibleTable division={ArshGoyalJSON.divisions} /> */}
          <Box>
            {ArshGoyalJSON.divisions.map((division: any) => {
              return (
                <SYcollapsibleStack
                  sx={{
                    backgroundColor: "#e27743",
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
                      <ThemeProvider theme={ArshDataGridTheme}>
                        <SYdataGrid
                          rows={division.problems}
                          columns={columns}
                          pageSize={10}
                          rowsPerPageOptions={[5]}
                          checkboxSelection
                          autoHeight
                          autoPageSize
                          hideFooterSelectedRowCount
                          disableColumnMenu
                          disableColumnSelector
                          selectionModel={problemTrack.ArshGoyal}
                          onSelectionModelChange={(newSelection) => {
                            setProblemTrack({
                              ...problemTrack,
                              ArshGoyal: newSelection,
                            });
                          }}
                          sx={{
                            "& .MuiTableRow-root.Mui-selected": {
                              border: "2px solid #e27743",
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

export default ArshGoyalSheet;
