import "./styles.css";
import { Button } from "./components/Button";

export const App = () => {
  return (
    <div>
      <div className="title">SimpleCalculator</div>
      <div className="calculator">
        <div className="display"></div>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <div className="operator">C</div>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <div className="operator">-</div>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <div className="operator">+</div>
        <div className="btn zero">0</div>
        <div className="operator">=</div>
      </div>
    </div>
  );
};
