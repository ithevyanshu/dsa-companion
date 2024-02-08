import { Box, Link } from "@mui/material";
import {
  FooterContainer,
  FooterText,
  InnerBox,
} from "../styles/StyledComponents/FooterCSS";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <FooterContainer>
      <InnerBox>
        <FooterText
          underline="none"
          sx={{
            fontSize: "1.5rem",
            "@media (max-width: 700px)": {
              fontSize: "1rem",
              marginLeft: "0.7rem",
            },
          }}
        >
          © 2022 DSA COMPANION
        </FooterText>
      </InnerBox>
      <InnerBox
        sx={{
          // border: "1px solid white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          fontFamily: "Poppins",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <FooterText underline="none">Created with </FooterText>&nbsp;
          <FavoriteIcon sx={{ color: "red" }} />
          &nbsp;
          <FooterText underline="none"> by Mayank Patel</FooterText>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "5px",
          }}
        >
          <Link
            href="https://www.linkedin.com/in/mayank-patel12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              fontSize="large"
              sx={{
                margin: "0 5px",
                color: "white",
              }}
            />
          </Link>
          <Link
            href="https://github.com/mayank-1224"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              fontSize="large"
              sx={{
                margin: "0 5px",
                color: "white",
              }}
            />
          </Link>
          <Link
            href="https://www.instagram.com/_.m.a.y.a.n.k.__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon
              fontSize="large"
              sx={{
                margin: "0 5px",
                color: "white",
              }}
            />
          </Link>
          <Link
            href="mailto:mayank.wiz12@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon
              fontSize="large"
              sx={{
                margin: "0 5px",
                color: "white",
              }}
            />
          </Link>
        </Box>
      </InnerBox>
    </FooterContainer>
  );
};

export default Footer;
