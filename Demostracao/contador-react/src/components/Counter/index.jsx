import PropTypes from "prop-types";
import "./styles.css";

const Counter = ({ count, increment, decrement, reset }) => {
  return (
    <>
      <h1 className="title_h1">
        Contador <span className="plus_sign">+</span>
      </h1>
      <div className="container_counter">
        <div className="wrapper_counter">
          <span className="text_counter">{count}</span>
        </div>
        <div className="wrapper_buttons">
          <button onClick={decrement} className="button">
            -
          </button>
          <button onClick={increment} className="button">
            +
          </button>
        </div>

        <button onClick={reset} className="reset_button">
          limpar
        </button>
      </div>
    </>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Counter;
