import type { NextPage } from "next";
import TopNavBar from "../components/TopNavBar";
import WelcomePage from "../components/WelcomePage";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

const Home: NextPage = () => {
  require("typeface-poppins");
  return (
    <>
      <Box>
        <TopNavBar />
        <SideBar />
        <WelcomePage />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
