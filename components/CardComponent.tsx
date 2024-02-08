import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import useProblems from "../hooks/useProblems";
import Link from "@mui/material/Link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import {
  SYcard,
  SYcardHeader,
  SYcardContent,
  CardText,
} from "../styles/StyledComponents/SDEsheetsCSS";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface Object {
  id: number;
  titleName: string;
  subtitle: string;
  imgLink: string;
  summary: string;
  credits: string;
  Links: {
    link1: string;
    link1info: string;
    link2: string;
    link2info: string;
  };
  problemCount: number;
}

interface CardData {
  data: Object;
}

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

const CardComponent = (data: CardData) => {
  // const [expanded, setExpanded] = useState(false);
  const [heart, setHeart] = useState(false);
  const { setClickName, sheetProgress } = useProblems();

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <SYcard>
      <SYcardHeader
        title={data.data.titleName}
        subheader={
          sheetProgress[data.data.id - 1] +
          " / " +
          data.data.problemCount +
          " solved"
        }
      />
      <CardMedia
        component="img"
        height="270px"
        width="500px"
        image={data.data.imgLink}
        alt={data.data.titleName}
        onClick={() => {
          setClickName(data.data.titleName);
        }}
        sx={{
          cursor: "pointer",
          "@media (max-width: 700px)": {
            height: "100%",
            width: "100%",
          },
        }}
      />
      <SYcardContent>
        <CardText variant="body2">{data.data.summary}</CardText>
        <CardText
          sx={{
            fontWeight: "600",
          }}
        >
          Credits:{" " + data.data.credits}
        </CardText>
        <CardText variant="body2">
          <Link href={data.data.Links.link1} underline="none" target={"_blank"}>
            {data.data.Links.link1info}
            <OpenInNewIcon
              sx={{
                width: "1rem",
                height: "1rem",
                "@media (max-width: 700px)": {
                  width: "0.7rem",
                  height: "0.7rem",
                },
              }}
            />
          </Link>{" "}
          <br />
          <Link href={data.data.Links.link2} underline="none" target={"_blank"}>
            {data.data.Links.link2info}
            <OpenInNewIcon
              sx={{
                width: "1rem",
                height: "1rem",
                "@media (max-width: 700px)": {
                  width: "0.7rem",
                  height: "0.7rem",
                },
              }}
            />
          </Link>
        </CardText>
      </SYcardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {heart ? (
            <FavoriteIcon
              sx={{ color: "red" }}
              onClick={() => {
                setHeart(!heart);
              }}
            />
          ) : (
            <FavoriteIcon
              onClick={() => {
                setHeart(!heart);
              }}
            />
          )}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Your Progress: {sheetProgress[data.data.id - 1]} /{" "}
            {data.data.problemCount}
          </Typography>
        </CardContent>
      </Collapse> */}
    </SYcard>
  );
};

export default CardComponent;
