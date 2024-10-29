import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult(0);
    } else if (value === 'CE') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        setResult(eval(input)); // eval is used here for simplicity; avoid in production
        setInput(eval(input).toString());
      } catch {
        setResult('Error');
        setInput('');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator-container">
      <div className="display">
        <input type="text" value={input} readOnly />
        <h2>{result}</h2>
      </div>
      <div className="button-grid">
        {['%', 'CE', 'C', '⌫', '1/x', 'x²', '√', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '±', '0', '.', '='].map((value, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(value === '×' ? '*' : value === '÷' ? '/' : value)}
            className="button"
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
