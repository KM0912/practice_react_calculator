import "./styles.css";
import { Button } from "./components/Button";

export const App = () => {
  return (
    <div>
      <div className="title">SimpleCalculator</div>
      <div className="calculator">
        <div className="display"></div>
        <Button className="btn">7</Button>
        <Button className="btn">8</Button>
        <Button className="btn">9</Button>
        <Button className="operator">C</Button>
        <Button className="btn">4</Button>
        <Button className="btn">5</Button>
        <Button className="btn">6</Button>
        <Button className="operator">-</Button>
        <Button className="btn">1</Button>
        <Button className="btn">2</Button>
        <Button className="btn">3</Button>
        <Button className="operator">+</Button>
        <Button className="btn zero">0</Button>
        <Button className="operator">=</Button>
      </div>
    </div>
  );
};
