import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import "./style.css";

const Company = ({ data, symbol }) => {
  let [expandActive, setExpandActive] = useState(true);

  let iconStyle = { width: "15px", paddingLeft: "5px" };
  return (
    <section id="company" className="display-section">
      <h2 className="font-sm section-title">About {symbol}</h2>
      <div className="flex">
        <div className="company-profile flex">
          <table>
            <tbody>
              <tr>
                <th>Industry</th>
                <td className="font-secondary">{data.industry}</td>
              </tr>
              <tr>
                <th>CEO</th>
                <td className="font-secondary">{data.CEO}</td>
              </tr>
              <tr>
                <th>Employees</th>
                <td className="font-secondary">
                  {data.employees.toLocaleString("en-US")}
                </td>
              </tr>
              <tr>
                <th>Headquarters</th>
                <td className="font-secondary">
                  {data.city}, {data.state}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex-col align-center">
          <div
            className={`company-description font-secondary ${
              expandActive ? "fade-active" : ""
            }`}
          >
            {data.description}
          </div>
          <button
            className="expand-btn font-xs font-tertiary"
            type="text"
            onClick={() => {
              setExpandActive(!expandActive);
            }}
          >
            {expandActive ? "More" : "Fold"}
            {expandActive ? (
              <AiOutlineDown className="react-icons" style={iconStyle} />
            ) : (
              <AiOutlineUp className="react-icons" style={iconStyle} />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Company;
