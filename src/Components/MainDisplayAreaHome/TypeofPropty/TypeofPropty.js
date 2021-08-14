import "./TypeofPropty.css";
import Tag from "../../Assets/Atag/Atag";

const TypeofPropty = ({ typeofPropty }) => {
  //check if typeofPropty is array b4 mapping
  typeofPropty = Array.isArray(typeofPropty) ? (
    <div>
      Are you looking for a{" "}
      <span>
        {typeofPropty.map((v, i) => (
          <div>{v}</div>
        ))}
      </span>
    </div>
  ) : (
    "Are you looking for " + typeofPropty
  );

  return (
    <div className="TypeofPropertyContainer">
      <h5>image will come here</h5>
      <Tag color="red" text="click here" url="#"></Tag>
      {typeofPropty}
    </div>
  );
};

export default TypeofPropty;
