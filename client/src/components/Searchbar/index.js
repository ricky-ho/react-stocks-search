import { FaSearch } from "react-icons/fa";
import "./styles.css";

const Searchbar = ({ onSubmit }) => {
  let iconStyle = { color: "#fff" };
  return (
    <div className="searchbar-wrapper">
      <form
        action=""
        method="GET"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e.target[0].value);
        }}
      >
        <input type="text" placeholder="Enter ticker" />
        <button type="submit" className="btn">
          <FaSearch style={iconStyle} />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
