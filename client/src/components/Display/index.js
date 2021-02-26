import Newscard from "../Newscard";
import "./styles.css";

const Display = ({ data }) => {
  return (
    <div className="display">
      {data &&
        data.map((item, i) => {
          return <Newscard key={i} data={item} />;
        })}
    </div>
  );
};

export default Display;
