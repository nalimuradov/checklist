import './App.css'
import { useState } from 'react'
import InputField from './components/InputField'
import Checklist from './components/checklist'

function App() {

  const [items, setItems] = useState<string[]>([])

  const addItem = (newItem: string) => {
    setItems([newItem, ...items])
  }

  return (
    <>
      <InputField addItem={addItem}/>
      <Checklist items={items}/>
    </>
  )
}

export default App
