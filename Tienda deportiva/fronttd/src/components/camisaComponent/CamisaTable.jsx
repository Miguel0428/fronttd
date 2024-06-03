import CamisaRow from "./CamisaRow"

function CamisaTable({ camisas, onEdit, onDelete }) {
    console.log(camisas);


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
                    {camisas.map((camisa) => (
                        <CamisaRow
                            key={camisa.id}
                            camisa={camisa}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    ))}

                </tbody>
            </table>

        </>

    )

}
export default CamisaTable