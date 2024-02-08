import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Collapsible from "react-collapsible";
import TableComponent from "./TableComponent";
import useProblems from "../hooks/useProblems";

const CollapsibleTable = (divisions: any) => {
  return (
    <Box>
      {divisions.division.map((division: any) => {
        return (
          <Box
            sx={{
              backgroundColor: "#be2535",
              padding: "0.5rem",
              borderRadius: "1rem",
              fontSize: "2.5rem",
              fontFamily: "Kollektif",
              fontWeight: "800",
              color: "white",
              marginBottom: "1rem",
            }}
          >
            <Collapsible
              trigger={division.name}
              triggerStyle={{
                cursor: "pointer",
              }}
              transitionTime={250}
              open={true}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "1rem",
                }}
              >
                <TableComponent data={division.problems} />
              </Box>
            </Collapsible>
          </Box>
        );
      })}
    </Box>
  );
};

export default CollapsibleTable;
