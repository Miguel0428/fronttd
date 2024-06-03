import GuayoRow from "./GuayoRow"
function GuayoTable({ guayos, onEdit, onDelete }) {
    console.log(guayos);

    return (

        <>
            <table>
                <thead>
                    <tr>
                        <th>NOMBRES</th>
                        <th>PRECIOS</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>

                <tbody>
                    {guayos.map((guayo) => (
                        <GuayoRow
                            key={guayo.id}
                            guayo={guayo}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    ))}

                </tbody>
            </table>

        </>

    )

}
export default GuayoTable