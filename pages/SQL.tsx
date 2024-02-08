import SideBar from "../components/SideBar";
import TopNavBar from "../components/TopNavBar";
import Box from "@mui/material/Box";
import Footer from "../components/Footer";
import SQLjson from "../hooks/SQLjson.json";
import Collapsible from "react-collapsible";
import { useState, useEffect } from "react";
import {
  ContainerBox,
  HeadingText,
  MainBox,
  ProgressBox,
  ProgressCheck,
  ProgressText,
  StyledHeading,
  SYlistBox,
  SYstack,
  SYstackText,
  TopicBox,
} from "../styles/StyledComponents/SQLstyle";

const SQL = () => {
  require("typeface-poppins");

  const [checked, setChecked] = useState([false, false, false, false, false]);

  useEffect(() => {
    if (localStorage.getItem("sqlProgress") !== null) {
      var sqlProgress = JSON.parse(localStorage.getItem("sqlProgress") || "[]");
      setChecked(sqlProgress);
    } else {
      localStorage.setItem("sqlProgress", JSON.stringify(checked));
    }
  }, []);

  const handleProgressCheck = (n: any) => {
    setChecked((prev) => {
      var newChecked = [...prev];
      newChecked[n] = !newChecked[n];
      localStorage.setItem("sqlProgress", JSON.stringify(newChecked));
      return newChecked;
    });
    // localStorage.setItem("sqlProgress", JSON.stringify(checked));
  };

  return (
    <>
      <TopNavBar />
      <SideBar />
      <MainBox>
        <ContainerBox>
          <StyledHeading>
            <HeadingText>All About SQL</HeadingText>
            <ProgressText
              sx={{
                color: "white",
                fontSize: "2rem",
              }}
            >
              {SQLjson.description}
            </ProgressText>
            <Box>
              <ProgressText>
                Topics Completed:{" "}
                {checked.filter((item) => item === true).length} / 5
              </ProgressText>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <ProgressBox>
                  <ProgressText>Keywords</ProgressText>{" "}
                  <ProgressCheck
                    checked={checked[0]}
                    onChange={(e) => {
                      handleProgressCheck(0);
                    }}
                  />
                </ProgressBox>
                <ProgressBox>
                  <ProgressText>All Data Types</ProgressText>{" "}
                  <ProgressCheck
                    checked={checked[1]}
                    onChange={(e) => {
                      handleProgressCheck(1);
                    }}
                  />
                </ProgressBox>
                <ProgressBox>
                  <ProgressText>All Operators</ProgressText>{" "}
                  <ProgressCheck
                    checked={checked[2]}
                    onChange={(e) => {
                      handleProgressCheck(2);
                    }}
                  />
                </ProgressBox>
                <ProgressBox>
                  <ProgressText>String Functions</ProgressText>{" "}
                  <ProgressCheck
                    checked={checked[3]}
                    onChange={(e) => {
                      handleProgressCheck(3);
                    }}
                  />
                </ProgressBox>
                <ProgressBox>
                  <ProgressText>Numeric Functions</ProgressText>{" "}
                  <ProgressCheck
                    checked={checked[4]}
                    onChange={(e) => {
                      handleProgressCheck(4);
                    }}
                  />
                </ProgressBox>
              </Box>
            </Box>
            <ProgressText
              sx={{
                fontSize: "1.2rem",
              }}
            >
              LeetCode SQL problems coming soon!
            </ProgressText>
          </StyledHeading>
          <SYstackText>Tap on the topic name to expand</SYstackText>
          <SYlistBox>
            {SQLjson.topics.map((topic) => (
              <Box>
                {topic.divisions.map((division) => (
                  <Box>
                    <TopicBox>
                      <Collapsible
                        trigger={division.name}
                        transitionTime={250}
                        open={false}
                        triggerStyle={{
                          cursor: "pointer",
                          fontFamily: "Kollektif",
                          lineHeight: "1.2",
                          fontSize: "2.5rem",
                          fontWeight: "800",
                          letterSpacing: "-1px",
                          color: "#355070",
                          textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
                        }}
                      >
                        <SYstackText
                          sx={{
                            margin: "0",
                          }}
                        >
                          {division.description}
                        </SYstackText>
                        <Box
                          sx={{
                            backgroundColor: "#355070",
                          }}
                        >
                          {division.items.map((item) => (
                            <SYstack>
                              <SYstackText
                                sx={{
                                  width: "12%",
                                  marginRight: "1%",
                                  fontWeight: "600",
                                }}
                              >
                                {item.name}
                              </SYstackText>
                              <SYstackText
                                sx={{
                                  width: "42%",
                                  size: "0.5rem",
                                }}
                              >
                                {item.description}
                              </SYstackText>
                              <code
                                style={{
                                  width: "42%",
                                  fontSize: "1rem",
                                  color: "#fafafd",
                                  backgroundColor: "black",
                                }}
                              >
                                {item.example}
                              </code>
                            </SYstack>
                          ))}
                        </Box>
                      </Collapsible>
                    </TopicBox>
                  </Box>
                ))}
              </Box>
            ))}
          </SYlistBox>
        </ContainerBox>
      </MainBox>
      <Footer />
    </>
  );
};

export default SQL;
