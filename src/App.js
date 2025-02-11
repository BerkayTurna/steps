const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  const step = 1;

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <div className="message">{`Step ${step}: ${messages[step - 1]}`}</div>
      <div className="buttons">
        <button style={{ backgroundColor: "rgb(121, 80, 242)", color: "rgb(255, 255, 255)" }}>Previous</button>
        <button style={{ backgroundColor: "rgb(121, 80, 242)", color: "rgb(255, 255, 255)" }}>Next</button>
      </div>
    </div>
  )
}