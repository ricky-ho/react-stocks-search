import { useState, createRef, useEffect } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import "./style.css";

const Company = ({ data, symbol }) => {
  const iconStyle = { width: "15px", paddingLeft: "5px" };

  const [showMore, setShowMore] = useState(false);
  const [descriptionOverflow, setDescriptionOverflow] = useState(false);

  // Detect if company description has overflowed
  const ref = createRef();
  useEffect(() => {
    if (ref.current.clientHeight < ref.current.scrollHeight) {
      setDescriptionOverflow(true);
    }
  }, [ref]);

  useEffect(() => {
    ref.current.style.height = showMore ? "100%" : "12.3rem";
  }, [ref, showMore]);

  const clickShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="company" className="display-section">
      <h2 className="font-m section-title">About {symbol}</h2>
      <div className="flex">
        <div id="company-profile" className="flex">
          <table>
            <tbody>
              <tr>
                <th>Sector</th>
                <td className="font-secondary">
                  {data.sector ? data.sector : "--"}
                </td>
              </tr>
              <tr>
                <th>Industry</th>
                <td className="font-secondary">
                  {data.industry ? data.industry : "--"}
                </td>
              </tr>
              <tr>
                <th>CEO</th>
                <td className="font-secondary">{data.CEO ? data.CEO : "--"}</td>
              </tr>
              <tr>
                <th>Employees</th>
                <td className="font-secondary">
                  {data.employees
                    ? data.employees.toLocaleString("en-US")
                    : "--"}
                </td>
              </tr>
              <tr>
                <th>Headquarters</th>
                <td className="font-secondary">
                  {data.city && data.state
                    ? `${data.city}, ${data.state}`
                    : "--"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {data.description ? (
          <div className="flex-col align-center">
            <div
              id="company-description"
              ref={ref}
              className={`font-secondary ${
                descriptionOverflow && !showMore ? "fade-active" : ""
              }`}
            >
              {data.description}
            </div>
            {descriptionOverflow && (
              <button
                id="expand-btn"
                className="font-xs font-tertiary flex justify-center align-center"
                type="text"
                onClick={clickShowMore}
              >
                {showMore ? "Fold" : "More"}
                {showMore ? (
                  <AiOutlineUp className="react-icons" style={iconStyle} />
                ) : (
                  <AiOutlineDown className="react-icons" style={iconStyle} />
                )}
              </button>
            )}
          </div>
        ) : (
          <div ref={ref} className="flex justify-center align-center">
            <p className="font-m">Company description not available.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Company;
