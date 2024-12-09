import { useState } from 'react'
import './App.css'
import ChecklistItem from './components/checklist-item'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <ChecklistItem />
    </>
  )
}

export default App
