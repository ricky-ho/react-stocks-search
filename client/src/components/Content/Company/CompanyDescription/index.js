import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import useDescriptionOverflow from "../../../../hooks/useDescriptionOverflow";

import "./style.css";

const CompanyDescription = ({ description }) => {
  const {
    showMore,
    setShowMore,
    contentOverflow,
    descriptionRef,
  } = useDescriptionOverflow();

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
          <span>
            {showMore ? (
              <>
                Fold
                <AiOutlineUp className="expand-btn--icon" />
              </>
            ) : (
              <>
                More
                <AiOutlineDown className="expand-btn--icon" />
              </>
            )}
          </span>
        </button>
      )}
    </div>
  );
};

export default CompanyDescription;
