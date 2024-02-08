import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useProblems from "../hooks/useProblems";

const DialogueBox = (
  message: string,
  subMessage: string,
  buttonMessage1: string,
  buttonMessage2: string
) => {
  const { dialogueOpen, setDialogueOpen } = useProblems();

  const handleClickOpen = () => {
    setDialogueOpen(true);
  };

  const handleClose = () => {
    setDialogueOpen(false);
  };

  return (
    <div>
      <Dialog
        open={dialogueOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{message}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {subMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{buttonMessage1}</Button>
          <Button onClick={handleClose} autoFocus>
            {buttonMessage2}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogueBox;
