import './App.css'
import { useState } from 'react'
import InputField from './components/InputField'
import DayList from './components/DayList'

function App() {

  const [days, setDays] = useState<string[]>([])

  const addDay = (newDay: string) => {
    setDays([newDay, ...days])
  }

  return (
    <>
      <h2>Daily Tracker</h2>
      <InputField addDay={addDay}/>
      <DayList days={days}/>
    </>
  )
}

export default App
