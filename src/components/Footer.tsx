import { useState, useEffect} from 'react'

export default function Footer() {

    const [fruitData, setFruitData] = useState("")


    useEffect(() => {
        fetch('fruits.json')
        .then((response) => {
            return response.text()
        })
        .then((data) => {
            setFruitData(data)
        }
        )
    }, [])

    return (
        <>
        {fruitData}
        </>
    )
}