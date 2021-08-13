import "./style.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div>
          <p className="attribution">
            Market data provided by{" "}
            <a
              href="https://iexcloud.io"
              rel="noopener noreferrer"
              target="_blank"
            >
              IEX Cloud
            </a>
          </p>
          <p className="attribution">
            Logos provided by{" "}
            <a
              href="https://clearbit.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Clearbit
            </a>
          </p>
        </div>

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
