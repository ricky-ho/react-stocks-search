const Company = ({ data, symbol }) => {
  return (
    <section className="company section">
      <h2>About {symbol}</h2>
      <div className="flex">
        <table>
          <tbody>
            <tr>
              <td>Sector</td>
              <td>{data.sector}</td>
            </tr>
            <tr>
              <td>CEO</td>
              <td>{data.CEO}</td>
            </tr>
            <tr>
              <td>Employees</td>
              <td>{data.employees}</td>
            </tr>
            <tr>
              <td>Headquarters</td>
              <td>
                {data.city}, {data.state}
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <p>{data.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Company;
