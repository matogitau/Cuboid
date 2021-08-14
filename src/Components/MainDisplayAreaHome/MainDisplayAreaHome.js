import TypeofPropty from "./TypeofPropty/TypeofPropty";
import { useState } from "react";
import "./MainDisplayAreaHome.css";

const MainDisplayArea = (props) => {
  const [typeofPropty, setTypeofPropty] = useState({
    houseBuyLetFf: {
      type: ["House to buy", "let", "fullyFurnished"]
    },
    landorPlot: "landorPlot",
    hotel: "hotel",
    commspaceOffGodwn: ["commercial Space", "Office", "Godown"]
  });

  return (
    <>
      <TypeofPropty typeofPropty={typeofPropty.houseBuyLetFf.type} />
      <TypeofPropty typeofPropty={typeofPropty.landorPlot} />
      <TypeofPropty typeofPropty={typeofPropty.hotel} />
      <TypeofPropty typeofPropty={typeofPropty.commspaceOffGodwn} />
    </>
  );
};

MainDisplayArea.defaultProps = {
  image: "image of property will come here"
};

export default MainDisplayArea;
