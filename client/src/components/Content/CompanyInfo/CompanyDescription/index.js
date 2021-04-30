import { useState, useEffect, createRef } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

import "./style.css";

const CompanyDescription = ({ description }) => {
  const [showMore, setShowMore] = useState(false);
  const [contentOverflow, setContentOverflow] = useState(false);

  const descriptionRef = createRef();

  useEffect(() => {
    if (
      descriptionRef.current.clientHeight < descriptionRef.current.scrollHeight
    ) {
      setContentOverflow(true);
    }
  }, [descriptionRef]);

  useEffect(() => {
    descriptionRef.current.style.height = showMore ? "100%" : "150px";
  }, [descriptionRef, showMore]);

  if (!description || description === "") {
    return (
      <div ref={descriptionRef} className="no-description">
        <p>Company description not available.</p>
      </div>
    );
  }

  return (
    <div className="company-description--wrapper">
      <div
        ref={descriptionRef}
        className={`company-description ${
          contentOverflow && !showMore ? "fade-active" : ""
        }`}
      >
        {description}
      </div>
      {contentOverflow && (
        <button
          id="expand-btn"
          type="text"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Fold" : "More"}
          {showMore ? (
            <AiOutlineUp className="toggle-icon" />
          ) : (
            <AiOutlineDown className="toggle-icon" />
          )}
        </button>
      )}
    </div>
  );
};

export default CompanyDescription;
