import Searchbar from "../Searchbar";
import "./style.css";

const Header = ({ searchSubmit }) => {
  return (
    <header className="flex justify-center">
      <div className="flex justify-center align-center">
        <Searchbar searchSubmit={searchSubmit} />
      </div>
    </header>
  );
};

export default Header;
