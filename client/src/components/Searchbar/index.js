import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useWindowPosition from "../../utils/useWindowPosition";
import "./style.css";

const Searchbar = ({ searchSubmit }) => {
  const scrollPosition = useWindowPosition();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header
      id="header"
      className={`${scrollPosition > 25 ? "header-sticky" : ""}`}
    >
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          searchSubmit(searchTerm);
          setSearchTerm("");
        }}
      >
        <input
          type="text"
          placeholder="Search by ticker symbol..."
          title=""
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
          required
        />
        <button type="submit" className="search-btn" aria-label="Submit search">
          <FaSearch className="search-icon" />
        </button>
      </form>
    </header>
  );
};

export default Searchbar;
