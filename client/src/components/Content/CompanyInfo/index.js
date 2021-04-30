import CompanyProfile from "./CompanyProfile";
import CompanyDescription from "./CompanyDescription";
import "./style.css";

const CompanyInfo = ({ data, symbol }) => {
  return (
    <section id="company-section">
      <h2>{`About ${symbol}`}</h2>
      <div className="flex">
        <CompanyProfile data={data} />
        <CompanyDescription description={data.description} />
      </div>
    </section>
  );
};

export default CompanyInfo;
