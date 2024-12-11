import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Moment from 'moment';
import { useState } from 'react'
import TaskList from './TaskList';
import { Button } from '@mui/material';
import Task from './Task';

export default function Day({day}:{day:Date}){

    const [tasks, setTasks] = useState<typeof Task[]>([])

    return (
        <>
        <Accordion className='day-item' slotProps={{ heading: {component: 'h4'}}}>
            <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header">
                {Moment(day).format('ddd MMM D, YYYY')}
            </AccordionSummary>
            <AccordionDetails>
            <table>
                <tbody>
                    <TaskList tasks={tasks}/>
                </tbody>
            </table>
            <Button 
                //onClick={() => setTasks([...tasks, Task()])}
                >Add Task</Button>
            </AccordionDetails>
        </Accordion>
        </>
    )
}