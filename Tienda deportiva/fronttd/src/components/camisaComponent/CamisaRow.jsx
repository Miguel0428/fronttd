function CamisaRow({ camisa, onEdit, onDelete }) {

    const handleEdit = () => {
        onEdit(camisa)
    
    }
    
    const handleDelete = (id) => {
        onDelete(id)
    }

    return (

        <>
            <tr>
                <td>{camisa.nombre}</td>
                <td>{camisa.precio}</td>
                <td>
                    <button onClick={handleEdit}>edit</button>
                    <button onClick={() => handleDelete(camisa.id)}>delete</button>
                </td>
            </tr>

        </>

    )

}
export default CamisaRow