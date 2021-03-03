import { FaSearch } from "react-icons/fa";
import "./style.css";

const Searchbar = ({ searchSubmit }) => {
  let iconStyle = { color: "#fff" };
  return (
    <div className="flex justify-center align-center">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          searchSubmit(e.target[0].value);
          e.target[0].value = "";
        }}
      >
        <input type="text" placeholder="Search by ticker symbol" required />
        <button type="submit" className="search-btn">
          <FaSearch className="react-icons" style={iconStyle} />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
