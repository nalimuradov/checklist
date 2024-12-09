export default function Checklist({items}: {items:string[]}) {

    return (
        <div>
            {items.length === 0 ? (
                <p></p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{item}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}
