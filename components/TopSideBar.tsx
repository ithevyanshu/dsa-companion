import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import StorageIcon from "@mui/icons-material/Storage";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DraftsIcon from "@mui/icons-material/Drafts";
import Button from "@mui/material/Button";
import Router from "next/router";

const TopSideBar = () => {
  return (
    <Box
      className="topBar"
      sx={{
        // border: "1px solid black",
        position: "sticky",
        top: "0",
        height: "50px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Button
        onClick={() => {
          Router.push("/SDEsheets");
        }}
      >
        <ListAltIcon className="topIcon" />
      </Button>
      <Button
        onClick={() => {
          Router.push("/ContestTracker");
        }}
      >
        <MoreTimeIcon className="topIcon" />
      </Button>
      <Button
        onClick={() => {
          Router.push("/SQL");
        }}
      >
        <SettingsSuggestIcon className="topIcon" />
      </Button>
      <Button
        onClick={() => {
          Router.push("/SQL");
        }}
      >
        <StorageIcon className="topIcon" />
      </Button>
      <Button
        onClick={() => {
          Router.push("/EverythingDSA");
        }}
      >
        <AltRouteIcon className="topIcon" />
      </Button>
      <Button>
        <DraftsIcon className="topIcon" />
      </Button>
    </Box>
  );
};

export default TopSideBar;
