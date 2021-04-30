import "./style.css";

const Error = ({ data }) => {
  return (
    <main>
      <div className="error">
        <img src={`${process.env.PUBLIC_URL}/error.svg`} alt="Error" />
        <h1>{data.message}</h1>
      </div>
    </main>
  );
};

export default Error;
