import DayItem from "./DayItem"

export default function DayList({days}: {days:string[]}) {

    return (
        <div>
            {days.length === 0 ? (
                <p></p>
            ) : (
                <table>
                    <thead>
                    </thead>
                    <tbody>
                        {days.map((day, index) => (
                            <tr key={index}>
                                <td>
                                    <DayItem day={day} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}
