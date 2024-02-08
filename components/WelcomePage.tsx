import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Router from "next/router";
import TopNavBar from "../components/TopNavBar";
import {
  SYmainBox,
  SYinnerBox,
  SYtitleStack,
  SYalertText,
  SYtitleText,
  SYalertButton,
  SYa,
} from "../styles/StyledComponents/WelcomeNavBarsCSS";

const WelcomePage = () => {
  return (
    <SYmainBox>
      {/* <TopNavBar /> */}
      <SYinnerBox>
        <SYtitleStack>
          <SYtitleText
            variant="h2"
            sx={{
              color: "black",
              textShadow: "2px 1px 1px rgba(0,0,0,0.5)",
              fontSize: "4rem",
              "@media (max-width: 700px)": {
                fontSize: "2.8rem",
              },
            }}
          >
            Welcome to 'YOUR'
          </SYtitleText>
          <SYtitleText
            variant="h1"
            sx={{
              lineHeight: "0.8",
              fontSize: "18rem",
              textShadow: "5px 4px 5px rgba(0,0,0,0.5)",
              "@media (max-width: 700px)": {
                fontSize: "12rem",
              },
            }}
          >
            DSA
          </SYtitleText>
          <SYtitleText
            variant="h1"
            sx={{
              fontSize: "6.3rem",
              lineHeight: "0.8",
              textShadow: "4px 3px 4px rgba(0,0,0,0.5)",
              "@media (max-width: 700px)": {
                fontSize: "4rem",
              },
            }}
          >
            COMPANION
          </SYtitleText>
        </SYtitleStack>
        <SYtitleStack>
          <SYalertText>
            Check out All the SDE Sheets <SYa href="/SDEsheets">here</SYa>.
          </SYalertText>
          <br />
          <SYalertText>
            Or mark your calendars with upcoming contests{" "}
            <SYa href="/ContestTracker">here</SYa>!{" "}
          </SYalertText>
          <br />
          <SYalertText>
            Track all your applied Job Applications{" "}
            <SYa href="/JobTracker">here</SYa>.
          </SYalertText>
          <br />
          <SYalertText>
            Practice SQL <SYa href="/SQL">here</SYa>.
          </SYalertText>
        </SYtitleStack>
      </SYinnerBox>
    </SYmainBox>
  );
};

export default WelcomePage;
