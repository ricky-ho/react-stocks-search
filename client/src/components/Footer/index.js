import "./style.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <p id="attribution">
          Market data provided by{" "}
          <a
            href="https://iexcloud.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            IEX Cloud
          </a>
        </p>
        <a
          href="https://github.com/ricky-ho/react-stocks-search"
          rel="noopener noreferrer"
          target="_blank"
          className="link"
        >
          <p>View source code</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
