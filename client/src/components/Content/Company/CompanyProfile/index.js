import "./style.css";

const CompanyProfile = ({ data }) => {
  return (
    <div className="company-profile">
      <table>
        <tbody>
          <tr>
            <th>Sector</th>
            <td>{data.sector ? data.sector : "--"}</td>
          </tr>
          <tr>
            <th>Industry</th>
            <td>{data.industry ? data.industry : "--"}</td>
          </tr>
          <tr>
            <th>CEO</th>
            <td>{data.CEO ? data.CEO : "--"}</td>
          </tr>
          <tr>
            <th>Employees</th>
            <td>
              {data.employees ? data.employees.toLocaleString("en-US") : "--"}
            </td>
          </tr>
          <tr>
            <th>Headquarters</th>
            <td>
              {data.city && data.state ? `${data.city}, ${data.state}` : "--"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompanyProfile;
