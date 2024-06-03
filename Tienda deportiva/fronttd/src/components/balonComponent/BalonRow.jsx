function BalonRow({ balon, onEdit, onDelete }) {

    const handleEdit = () => {
        onEdit(balon)

    }

    const handleDelete = (id) => {
        onDelete(id)
    }

    return (

        <>

            <tr>
                <td>{balon.nombre}</td>
                <td>{balon.precio}</td>
                <td>
                    <button onClick={handleEdit}>edit</button>
                    <button onClick={() => handleDelete(balon.id)}>delete</button>
                </td>
            </tr>

        </>

    )

}
export default BalonRow