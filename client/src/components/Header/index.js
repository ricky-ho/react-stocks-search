import Searchbar from "../Searchbar";
import "./styles.css";

const Header = ({ searchSubmit }) => {
  return (
    <header>
      <div className="header-content">
        <div className="header-title">
          <a href="/" className="logo">
            Finance App
          </a>
        </div>
        <Searchbar onSubmit={searchSubmit} />
      </div>
    </header>
  );
};

export default Header;
