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
      setStep(prevStep => prevStep - 1)
    }
  }

  function nextStep() {
    if (step < 3) {
      setStep(prevStep => prevStep + 1)
    }
  }

  return (<>
    <button className="close" onClick={() => setIsOpen(prevState => !prevState)}>&times;</button>
    {isOpen &&
      <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>
        <StepMessage step={step}>
          <div className="buttons">
            <Button
              onClick={() => alert(messages[step - 1])}
              bgColor={"#e7e7e7"}
              color={"#333"}>
              Learn More
            </Button>
          </div>
        </StepMessage>
        <div className="buttons">
          <Button
            onClick={previousStep}
            bgColor={"rgb(121,80,242)"}
            color={"rgb(255, 255, 255)"}>
            <span>👈</span>Previous
          </Button>
          <Button
            onClick={nextStep}
            bgColor={"rgb(121,80,242)"}
            color={"rgb(255, 255, 255)"}>
            Next<span>👉</span>
          </Button>
        </div>
      </div>}
  </>
  )
}

function Button({ onClick, bgColor, color, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: color
      }}>
      {children}
    </button>
  )
}

function StepMessage({ step, children }) {
  return <p className="message">Step {step}: {children}</p>
}