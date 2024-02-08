import { useEffect, useState, useRef } from "react";
import Router from "next/router";

interface problemTrackInterface {
  Striver: number[];
  Babbar: number[];
  Blind75: number[];
  Grind169: number[];
  Gfg: number[];
  ArshGoyal: number[];
}

const useProblems = () => {
  const [clickName, setClickName] = useState(""); // name of the clicked sheet
  const [problemTrack, setProblemTrack] = useState<any>({}); // problem track of the user from local storage
  const [sheetProgress, setSheetProgress] = useState<number[]>([]); // progress of the sheet
  const [dialogueOpen, setDialogueOpen] = useState(false); // open or close the dialogue

  // setting initial problem track in local storage
  useEffect(() => {
    if (localStorage.getItem("problemTrack") === null) {
      let newObj: problemTrackInterface = {
        Striver: [],
        Babbar: [],
        Blind75: [],
        Grind169: [],
        Gfg: [],
        ArshGoyal: [],
      };
      localStorage.setItem("problemTrack", JSON.stringify(newObj));
      var proTrack = JSON.parse(localStorage.getItem("problemTrack") || "[]");
      setSheetProgress([0, 0, 0, 0, 0, 0, 0]);
      // console.log("setting for 1st time");

      setProblemTrack(proTrack);
    } else {
      var proTrack = JSON.parse(localStorage.getItem("problemTrack") || "[]");
      // console.log("local storage alredy exists");
      setProblemTrack(proTrack);
      setSheetProgress([
        proTrack.Striver.length,
        proTrack.Babbar.length,
        proTrack.Blind75.length,
        proTrack.Grind169.length,
        proTrack.Gfg.length,
        proTrack.ArshGoyal.length,
      ]);
    }
  }, []);

  // updating problem track in local storage
  useEffect(() => {
    if (Object.keys(problemTrack).length !== 0) {
      localStorage.setItem("problemTrack", JSON.stringify(problemTrack));
      setSheetProgress([
        problemTrack.Striver.length,
        problemTrack.Babbar.length,
        problemTrack.Blind75.length,
        problemTrack.Grind169.length,
        problemTrack.Gfg.length,
        problemTrack.ArshGoyal.length,
      ]);
      // console.log("updating local storage");
    }
    // else console.log("unnecessary update");
  }, [problemTrack]);

  //Pushing the required page according to the card clicked
  useEffect(() => {
    if (clickName === "Striver SDE Sheet") {
      Router.push("/StriverSheet");
    } else if (clickName === "Love Babbar SDE Sheet") {
      Router.push("/BabbarSheet");
    } else if (clickName === "Blind 75") {
      Router.push("/Blind75Sheet");
    } else if (clickName === "Grind 169") {
      Router.push("/Grind169Sheet");
    } else if (clickName === "GeeksForGeeks Sheet") {
      Router.push("/GfgSheet");
    } else if (clickName === "Arsh Goyal Sheet") {
      Router.push("/ArshGoyalSheet");
    }
  }, [clickName]);

  return {
    clickName,
    setClickName,
    problemTrack: problemTrack as problemTrackInterface,
    setProblemTrack: setProblemTrack,
    sheetProgress,
    setSheetProgress,
    dialogueOpen,
    setDialogueOpen,
  };
};

export default useProblems;
