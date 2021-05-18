import { useState, useEffect, useRef } from "react";
import "./style.css";

const CompanyDescription = ({ description }) => {
  const descriptionRef = useRef();
  const [overflow, setOverflow] = useState(false);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const [scrollHeight, setScrollHeight] = useState();

  useEffect(() => {
    const handleResize = () => {
      setScrollHeight(descriptionRef.current.scrollHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const cHeight = descriptionRef.current.clientHeight;
    const sHeight = descriptionRef.current.scrollHeight;

    if (cHeight < sHeight) {
      return setOverflow(true);
    }
    return setOverflow(false);
  }, [scrollHeight]);

  const handleScroll = (event) => {
    const target = event.target;
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      return setScrolledToBottom(true);
    }
    return setScrolledToBottom(false);
  };

  if (!description || description === "") {
    return (
      <div className="no-description">
        <p ref={descriptionRef}>Company description not available.</p>
      </div>
    );
  }

  return (
    <div className="company-description--wrapper">
      <div
        className={`description--wrapper ${
          overflow && !scrolledToBottom
            ? "bottom-shadow"
            : scrolledToBottom
            ? "top-shadow"
            : ""
        }`}
      >
        <p
          ref={descriptionRef}
          className="description"
          onScroll={(e) => handleScroll(e)}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default CompanyDescription;
