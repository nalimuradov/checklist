import { Alert } from '@mui/material';

export default function AlertMsg({message}:{ message:string }){

    return (
        <>
            <Alert severity='info'>
                {message}
            </Alert>
        </>
    )

}