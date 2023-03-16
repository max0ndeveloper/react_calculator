import { useState } from "react";
import "./App.css";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  console.log(result);

  const operators = ["/", "*", "+", "-", "."];

  const getResult = () => {
    setCalc(result);
  };

  const clearResult = () => {
    setCalc("");
    setResult("");
  };

  const deleteResult = () => {
    if (calc === "") {
      return;
    }
    setCalc(calc.slice(0, -1));
  };

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const digits = () => {
    const digitsArr = [];

    for (let i = 1; i < 10; i++) {
      digitsArr.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digitsArr;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""}
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>

          <button onClick={deleteResult}>DEL</button>
          <button onClick={clearResult}>CLEAR</button>
        </div>
        <div className="digits">
          {digits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={getResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
