import { ImSpinner2 } from "react-icons/im";
import "./style.css";

const Spinner = () => {
  return (
    <main>
      <div className="spinner-container">
        <ImSpinner2 className="spinner" size="50px" />
      </div>
    </main>
  );
};

export default Spinner;
