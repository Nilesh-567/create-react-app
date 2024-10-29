import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const calculateFactorial = (num) => {
    if (num < 0) return 'Invalid input. Please enter a non-negative integer.';
    if (num === 0 || num === 1) return 1;
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult('Please enter a valid number');
    } else {
      setResult(calculateFactorial(num));
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Factorial Calculator</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Calculate Factorial</button>
      </form>
      {result !== null && (
        <p style={styles.result}>Factorial: {result}</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  result: {
    fontSize: '1.5rem',
    color: '#333',
    marginTop: '20px',
  },
};

export default App;
