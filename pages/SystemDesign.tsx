import SideBar from "../components/SideBar";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SystemDesign = () => {
  require("typeface-poppins");

  return (
    <>
      <TopNavBar />
      <SideBar />
      <Box
        sx={{
          padding: "0 20vw",
          height: "90vh",
          "@media (max-width: 700px)": {
            padding: "0 5vw",
          },
        }}
      >
        <Box
          sx={{
            marginTop: "18rem",
            "@media (max-width: 700px)": {
              marginTop: "10rem",
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Kollektif",
              fontSize: "10rem",
              fontWeight: "800",
              letterSpacing: "-3px",
              color: "white",
              "@media (max-width: 700px)": {
                fontSize: "5rem",
              },
            }}
          >
            System Design
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Kollektif",
              fontSize: "6rem",
              fontWeight: "800",
              letterSpacing: "-3px",
              color: "black",
              "@media (max-width: 700px)": {
                fontSize: "3rem",
              },
            }}
          >
            Coming Soon!
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default SystemDesign;
