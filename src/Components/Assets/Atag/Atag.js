import "./Atag";

const Atag = ({ url, text, color }) => {
  return (
    <div>
      <a href={url} style={{ color: color }}>
        {text}
      </a>
    </div>
  );
};

export default Atag;
