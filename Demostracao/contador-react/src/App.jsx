import { useState } from "react";
import Counter from "./components/Counter/index";

import "./App.css";

function App() {
  const [count, setCount] = useState("00");

  const increment = () => {
    setCount((prevCount) => {
      const incrementedValue = parseInt(prevCount) + 1;
      return incrementedValue.toString().padStart(2, "0");
    });
  };

  const decrement = () => {
    setCount((prevCount) => {
      const decrementedValue = parseInt(prevCount) - 1;
      return decrementedValue.toString().padStart(2, "0");
    });
  };

  const reset = () => {
    setCount("00");
  };

  return (
    <div className="container">
      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
    </div>
  );
}

export default App;
