import './App.css'
import { useState } from 'react'
import InputField from './components/InputField'
import DayList from './components/DayList'
import AlertMsg from './components/AlertMsg'

function App() {

  const [days, setDays] = useState<Date[]>([])
  const [showAlert, setShowAlert] = useState(false)

  const addDay = (newDay: Date) => {
    if (days.some(existingDate => existingDate.getTime() === newDay.getTime())){
      setShowAlert(true)
    } else {
      setShowAlert(false)
      const sortedDays = [newDay, ...days].sort((a,b) =>  b.getTime() - a.getTime())
      setDays(sortedDays)
    }
  }

  return (
    <>
      <h2>Daily Tracker</h2>
      <InputField addDay={addDay}/>
      {showAlert && <AlertMsg message='Date already selected' />}
      <DayList days={days}/>
    </>
  )
}

export default App
