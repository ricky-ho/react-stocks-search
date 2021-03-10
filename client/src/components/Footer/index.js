import "./style.css";

const Footer = () => {
  return (
    <footer className="flex-col justify-center align-center">
      <a
        id="attribution"
        href="https://iexcloud.io"
        rel="noopener noreferrer"
        target="_blank"
      >
        Data provided by IEX Cloud
      </a>
      <a
        href="https://github.com/ricky-ho/react-stocks-search"
        rel="noopener noreferrer"
        target="_blank"
      >
        View source code
      </a>
    </footer>
  );
};

export default Footer;
