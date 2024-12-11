import Day from "./Day"
import { useState } from 'react'

export default function DayList({days}: {days:Date[]}) {

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
                                    <Day day={day} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}
