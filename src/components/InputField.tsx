import { useState } from 'react'


export default function InputField({addItem} : {addItem: (value:string) => void}) {

    const [inputValue, setInputValue] = useState<string>("")

    const updateInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
      }

    const handleClick = (item: string) => {
        addItem(inputValue)
    }

    return (
        <>
        <input value={inputValue} onChange={updateInputValue}></input>
        <button onClick={() => handleClick(inputValue)}>Add Item</button>
        </>
    )
}