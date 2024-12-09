import { useState } from 'react'
import Button from '@mui/material/Button';


export default function InputField({addDay} : {addDay: (value:string) => void}) {

    const [inputValue, setInputValue] = useState<string>("")

    const updateInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
      }

    const handleClick = () => {
        addDay(inputValue)
    }

    return (
        <>
        <input value={inputValue} onChange={updateInputValue}></input>
        <button onClick={() => handleClick()}>Add Day</button>
        <Button variant="outlined">Hello</Button>
        </>
    )
}