import { useState } from 'react'
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import moment from 'moment';


export default function InputField({addDay} : {addDay: (value:Date) => void}) {

    const [inputValue, setInputValue] = useState<Date>(new Date())

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addDay(inputValue)
        }
    }

    return (
        <div className='input-field'>
            <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopDatePicker 
                value={moment(inputValue)}
                onChange={(newValue : any) => setInputValue(moment(newValue).toDate())} 
                onClose={() => addDay(inputValue)}
                slotProps={{
                    textField: {
                        onKeyDown: handleKeyDown
                    }
                }}   
                />
                
            </LocalizationProvider>
        </div>
    )
}