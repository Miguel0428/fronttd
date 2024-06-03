function GuayoRow({ guayo, onEdit, onDelete }) {

    const handleEdit = () => {
        onEdit(guayo)

    }

    const handleDelete = (id) => {
        onDelete(id)
    }
    return (

        <>
            <tr>
                <td>{guayo.nombre}</td>
                <td>{guayo.precio}</td>
                <td>
                    <button onClick={handleEdit}>edit</button>
                    <button onClick={() => handleDelete(guayo.id)}>delete</button>
                </td>
            </tr>

        </>

    )

}
export default GuayoRow