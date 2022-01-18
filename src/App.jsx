import "./styles.css";
import { ValButton } from "./components/ValButton";
import { OperatorButton } from "./components/OperatorButton";
import { useState } from "react";

export const App = () => {
  const [inputVal, setInputVal] = useState("");
  const onClickVal = (val) => {
    const newInputVal = inputVal + val;
    setInputVal(newInputVal);
  };
  const onClickClear = () => {
    setInputVal("");
  };
  return (
    <div>
      <div className="title">SimpleCalculator</div>
      <div className="calculator">
        <div className="display">{inputVal}</div>
        <ValButton className="btn" onClick={onClickVal}>
          7
        </ValButton>
        <ValButton className="btn" onClick={onClickVal}>
          8
        </ValButton>
        <ValButton className="btn" onClick={onClickVal}>
          9
        </ValButton>
        <OperatorButton className="operator" onClick={onClickClear}>
          C
        </OperatorButton>
        <ValButton className="btn" onClick={onClickVal}>
          4
        </ValButton>
        <ValButton className="btn" onClick={onClickVal}>
          5
        </ValButton>
        <ValButton className="btn" onClick={onClickVal}>
          6
        </ValButton>
        <OperatorButton className="operator">-</OperatorButton>
        <ValButton className="btn" onClick={onClickVal}>
          1
        </ValButton>
        <ValButton className="btn" onClick={onClickVal}>
          2
        </ValButton>
        <ValButton className="btn" onClick={onClickVal}>
          3
        </ValButton>
        <OperatorButton className="operator">+</OperatorButton>
        <ValButton className="btn zero">0</ValButton>
        <OperatorButton className="operator">=</OperatorButton>
      </div>
    </div>
  );
};
