import "./styles.css";

export default function App() {
  return (
    <div>
      <div className="title">SimpleCalculator</div>
      <div className="calculator">
        <div className="display"></div>
        <div className="btn">7</div>
        <div className="btn">8</div>
        <div className="btn">9</div>
        <div className="operator">C</div>
        <div className="btn">4</div>
        <div className="btn">5</div>
        <div className="btn">6</div>
        <div className="operator">-</div>
        <div className="btn">1</div>
        <div className="btn">2</div>
        <div className="btn">3</div>
        <div className="operator">+</div>
        <div className="btn zero">0</div>
        <div className="operator">=</div>
      </div>
    </div>
  );
}
