import { useState } from 'react'
import DayList from '../components/DayList'
import AlertMsg from '../components/AlertMsg'
import { Suspense } from 'react'
import Loading from '../components/Loading'
import { lazy } from 'react'
import Header from '../components/Header'


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

  const FakeAPI = lazy(async () => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return import('../components/InputField')
  })

  return (
    <>
      <Header></Header>
      <h2>Daily Tracker</h2>
      <Suspense fallback={<Loading />}>
        <FakeAPI addDay={addDay}/>
      </Suspense>
      {showAlert && <AlertMsg message='Date already selected' />}
      <DayList days={days}/>
    </>
  )
}

export default App
