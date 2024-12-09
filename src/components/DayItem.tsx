export default function DayItem({day}:{day:string}){
    return (
        <>
        <table>
            <thead>
            <tr><td>{day}</td></tr>
                
            </thead>
            <tbody>
                <tr>
                    <td> Item 1:</td>
                    <td> Value 1</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}