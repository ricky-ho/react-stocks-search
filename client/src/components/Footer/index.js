import "./style.css";

const Footer = () => {
  return (
    <footer className="flex-col justify-center align-center">
      <a
        className="link"
        href="https://iexcloud.io"
        rel="noopener noreferrer"
        target="_blank"
      >
        Data provided by IEX Cloud
      </a>
      <p>&copy; Ricky Ho</p>
    </footer>
  );
};

export default Footer;
