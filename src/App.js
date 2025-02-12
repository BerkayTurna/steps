import { useState } from "react";

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function previousStep() {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  function nextStep() {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  return (<>
    <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>
    {isOpen &&
      <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>
        <p className="message">Step {step}: {messages[step - 1]}</p>
        <div className="buttons">
          <button onClick={previousStep} style={{ backgroundColor: "rgb(121, 80, 242)", color: "rgb(255, 255, 255)" }}>Previous</button>
          <button onClick={nextStep} style={{ backgroundColor: "rgb(121, 80, 242)", color: "rgb(255, 255, 255)" }}>Next</button>
        </div>
      </div>}
  </>
  )
}