import SideBar from "../components/SideBar";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import date from "date-and-time";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import contestJSON from "../hooks/contestJSON.json";
import atcoder from "../public/icons/atcoder.png";
import codechef from "../public/icons/codechef.png";
import codeforces from "../public/icons/codeforces.png";
import codingNinjas from "../public/icons/codingNinja.jpeg";
import defaultIcon from "../public/icons/default.png";
import facebook from "../public/icons/facebook.svg";
import gFg from "../public/icons/gfg.png";
import google from "../public/icons/google.png";
import hckrEarth from "../public/icons/hackerearth.png";
import hckrRank from "../public/icons/hackerrank.svg";
import leetCode from "../public/icons/leetcode.png";
import newton from "../public/icons/newtonSchool.jpg";
import topCoder from "../public/icons/topcoder.png";
import yukiCoder from "../public/icons/yuriCoder.png";
import Image from "next/image";
import axios from "axios";

import {
  SYmainContainer,
  SYheaderBox,
  SYheaderText,
  SYlistBox,
  SYstack,
  SYstackText,
  SYcontestName,
  SYstackTextB,
  SYbutton,
  SYimage,
} from "../styles/StyledComponents/ContestTrackerCSS";
import { useEffect } from "react";
import { Typography } from "@mui/material";

const ContestTracker = () => {
  require("typeface-poppins");

  const getContests = async () => {
    const res = await axios.get(
      "https://clist.by/api/v2/json/contest/?username=MayankPatel&api_key=1de0871c2b89ffcaae1b7664c6e0f61a44ad07db&limit=20&with_problems=false&upcoming=true&order_by=end"
    );
    console.log(res);
  };

  // getContests();

  const handleDate = (dateItem: string) => {
    const newDate = new Date(dateItem);
    return date.format(newDate, "DD.MM.YY");
  };

  const handleTime = (dateItem: string) => {
    const newDate = new Date(dateItem);
    return date.format(newDate, "hh:mm A");
  };

  const checkValid = (dateItem: string, host: string) => {
    const newDate = new Date(dateItem);
    const currentDate = new Date();
    if (
      (host.includes("codechef") ||
        host.includes("codeforces") ||
        host.includes("atcoder") ||
        host.includes("hackerrank") ||
        host.includes("hackerearth") ||
        host.includes("leetcode") ||
        host.includes("topcoder") ||
        host.includes("facebook") ||
        host.includes("google") ||
        host.includes("geeksforgeeks") ||
        host.includes("yukicoder") ||
        host.includes("newton") ||
        host.includes("codingninjas")) &&
      newDate > currentDate
    )
      return true;
    else return false;
  };

  const handleImage = (platform: string) => {
    if (platform.includes("codechef")) {
      return codechef;
    } else if (platform.includes("codeforces")) {
      return codeforces;
    } else if (platform.includes("atcoder")) {
      return atcoder;
    } else if (platform.includes("hackerrank")) {
      return hckrRank;
    } else if (platform.includes("hackerearth")) {
      return hckrEarth;
    } else if (platform.includes("leetcode")) {
      return leetCode;
    } else if (platform.includes("topcoder")) {
      return topCoder;
    } else if (platform.includes("facebook")) {
      return facebook;
    } else if (platform.includes("google")) {
      return google;
    } else if (platform.includes("geeksforgeeks")) {
      return gFg;
    } else if (platform.includes("yukicoder")) {
      return yukiCoder;
    } else if (platform.includes("newton")) {
      return newton;
    } else if (platform.includes("codingninjas")) {
      return codingNinjas;
    } else {
      return defaultIcon;
    }
  };

  const handleEventCreation = (contest: any) => {
    const startDate = new Date(contest.start);
    const endDate = new Date(contest.end);
    const eventLink = `https://calendar.google.com/calendar/r/eventedit?text=${
      contest.title
    }&dates=${startDate.toISOString().replace(/-|:|\.\d\d\d/g, "")}/${endDate
      .toISOString()
      .replace(
        /-|:|\.\d\d\d/g,
        ""
      )}&details=Contest Created by DSA companion&location=${
      contest.url
    }&sf=true&output=xml`;
    console.log(eventLink);
    window.open(eventLink, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <TopNavBar />
      <SideBar />
      <Box
        sx={{
          padding: "0 20vw",
          marginBottom: "2rem",
          "@media (max-width: 700px)": {
            padding: "0 0.1rem",
          },
        }}
      >
        <SYmainContainer>
          <SYheaderBox>
            <SYheaderText variant="h1">Contest Tracker</SYheaderText>
            <SYstackText
              sx={{
                color: "#fff",
                fontSize: "1.5rem",
              }}
            >
              Click on calendar icon to add the contest to your Google Calendar
              automatically!
            </SYstackText>
          </SYheaderBox>
          <SYlistBox>
            <SYstack
              sx={{
                "&:hover": {
                  backgroundColor: "#fafafd",
                },
                "@media (max-width: 700px)": {
                  display: "none",
                },
              }}
            >
              <SYstackTextB
                sx={{
                  marginLeft: 0,
                }}
              >
                Host
              </SYstackTextB>
              <SYstackTextB
                sx={{
                  minWidth: "4rem",
                  paddingLeft: "0.8rem",
                  "@media (max-width: 700px)": {
                    minWidth: "2rem",
                  },
                }}
              >
                Date
              </SYstackTextB>
              <SYstackTextB
                sx={{
                  minWidth: "5rem",
                  paddingLeft: "0.8rem",
                  "@media (max-width: 700px)": {
                    minWidth: "2rem",
                  },
                }}
              >
                Start
              </SYstackTextB>
              <SYstackTextB>Duration</SYstackTextB>
              <SYstackTextB
                sx={{
                  paddingLeft: "4rem",
                  "@media (max-width: 700px)": {
                    paddingLeft: "0.8rem",
                  },
                }}
              >
                Name
              </SYstackTextB>
            </SYstack>
            {contestJSON.map((contest) => {
              if (checkValid(contest.start, contest.host))
                return (
                  <SYstack>
                    <Box
                      sx={{
                        "@media (max-width: 700px)": {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      }}
                    >
                      <SYimage
                        onClick={() => {
                          window.open(
                            "https://" + contest.host,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                      >
                        <Image
                          src={handleImage(contest.host)}
                          width="48px"
                          height="40px"
                        />
                      </SYimage>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        "@media (max-width: 700px)": {
                          flexDirection: "column",
                        },
                      }}
                    >
                      <SYstackText
                        sx={{
                          "@media (max-width: 700px)": {
                            minWidth: "5rem",
                          },
                        }}
                      >
                        {handleDate(contest.start)}
                      </SYstackText>
                      <SYstackText
                        sx={{
                          minWidth: "5rem",
                        }}
                      >
                        {handleTime(contest.start)}
                      </SYstackText>
                      <SYstackText
                        sx={{
                          minWidth: "5rem",
                        }}
                      >
                        {contest.hr_duration + " hr"}
                      </SYstackText>
                    </Box>
                    <Box
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <SYcontestName
                        href={contest.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="none"
                      >
                        {contest.title}
                      </SYcontestName>
                    </Box>
                    <Box>
                      <SYbutton
                        title="Add to Google Calendar"
                        onClick={() => {
                          handleEventCreation(contest);
                        }}
                      >
                        <EventAvailableIcon />
                      </SYbutton>
                    </Box>
                  </SYstack>
                );
            })}
          </SYlistBox>
          <SYcontestName
            href="https://clist.by"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contest Tracker powered by clist.by
          </SYcontestName>
        </SYmainContainer>
      </Box>
      <Footer />
    </>
  );
};

export default ContestTracker;
