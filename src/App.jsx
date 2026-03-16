import './App.css'

function App() {
  return (
    <div className="container">

      <h1 style={{ color: "green" }}>React Day-1 Assignment</h1>

      <p>Full Name: Sumit Haverikar</p>

      <p>Batch: March-2026</p>

      <p> Current Date & Time: {new Date().toLocaleString()} </p>

      <ul className="list">
        <li>Learning React</li>
        <li>Using JSX</li>
      </ul>

    </div>
  )
}

export default App