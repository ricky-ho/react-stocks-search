import { FaSearch } from "react-icons/fa";
import "./styles.css";

const Searchbar = ({ searchSubmit }) => {
  let iconStyle = { color: "#fff" };
  return (
    <div className="searchbar-wrapper">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          searchSubmit(e.target[0].value);
          e.target[0].value = "";
        }}
      >
        <input type="text" placeholder="Search by ticker symbol" required />
        <button type="submit" className="btn">
          <FaSearch style={iconStyle} />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
