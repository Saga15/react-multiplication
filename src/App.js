import React, { useState } from "react";

export default function App() {
  return (
    <div>
      <h1>Multiplication</h1>
      <Multiplication />
    </div>
  );
}
function Multiplication() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [result, setResut] = useState(null);
  return (
    <div>
      <input type="number" onChange={(e) => setNum1(e.target.value)}></input>
      <br />
      <input type="number" onChange={(e) => setNum2(e.target.value)}></input>
      <br />
      <button onClick={() => setResut(Number(num1) * Number(num2))}>
        Get Multiplication
      </button>
      <br />
      {result}
    </div>
  );
}
