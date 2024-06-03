import { useState } from "react"
function CamisaForm({onSubmit}) {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')

    //funcion para modificar los campos
    const handleNombreChange = (event) => {
        setNombre(event.target.value)
    }

    const handlePrecioChange = (event) => {
        setPrecio(event.target.value)
    }

    //funcion para enviar el formulario
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({nombre, precio})
        setNombre('')
        setPrecio('')
    }

    return (

        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="nombre" value={nombre} onChange={handleNombreChange} required/>
            <input type="number" placeholder="precio" value={precio} onChange={handlePrecioChange} required/>
            <button type="submit">Save</button>
        </form>


        </>

    )

}
export default CamisaForm