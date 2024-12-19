import Task from "./Task"

export default function TaskList({tasks}: {tasks:typeof Task[]}){

    return (
        <>
            {tasks.map((task, index) => (
                <Task name="{index}"></Task>
            ))}
        </>
        
    )
}