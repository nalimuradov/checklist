import TextField from '@mui/material/TextField'
import { useState } from 'react'

export default function Task({name}:{name:string}) {

    const [key, setKey] = useState<string>("")
    const [value, setValue] = useState("")

    return (
        <>
            <tr>
                <td> 
                    <TextField 
                        required
                        id="standard-search"
                        label="Required"
                        variant="standard" 
                        onChange={() => setKey(key)}
                        />
                </td>

                <td> 
                <   TextField 
                        id="outlined-basic" 
                        label="Value" 
                        variant="outlined" 
                        onChange={() => setValue(value)}
                        />
                </td>
            </tr>
        </>
    )
}