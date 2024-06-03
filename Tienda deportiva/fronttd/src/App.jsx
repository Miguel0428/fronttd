import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import CamisaTable from './components/camisaComponent/CamisaTable'
import CamisaForm from './components/camisaComponent/CamisaForm'
import BalonTable from './components/balonComponent/BalonTable'
import BalonForm from './components/balonComponent/BalonForm'
import GuayoTable from './components/guayoComponent/GuayoTable'
import GuayoForm from './components/guayoComponent/GuayoForm'

function App() {
  
  const[camisas, setCamisas]= useState([])
  const[editCamisa, seteditCamisa]= useState(null)

  const[balones, setBalones]= useState([])
  const[editBalon, setEditBalon]= useState(null)

  const[guayos, setGuayos]= useState([])
  const[editGuayo, setEditGuayo]= useState(null) 

//Actualiza la lista de camisas por cada camisa nueva
  useEffect(()=> {
    fetchcamisas()
  }, [])


//Recorre la lista de camisas y los retorna como respuesta
  const fetchcamisas = async() =>{
    try {
      const response = await axios.get(`http://localhost:8080/api/camisas`)
      console.log(response);
      setCamisas(response.data)
    } catch (error) {
      console.log('Error al cargar las camisas: ', error)
    }

  }

//Crea o actualiza una camisa
  const handleCreateOrUpdatecamisa = async(camisaData) =>{
    if (editCamisa) {
      await axios.put(`http://localhost:8080/api/camisas/update-camisa/${editCamisa.id}`, camisaData)
    } else {
      await axios.post(`http://localhost:8080/api/camisas/add/camisa`, camisaData)
    }
    fetchcamisas()
    seteditCamisa(null)

  }

//Permite editar una camisa
  const handleEditCamisa = (camisa) =>{
    seteditCamisa(camisa)

  }

  //Permite eliminar una camisa apartir de un ID
  const handleDeletecamisa = async(camisaID) =>{
    console.log(camisaID);
    await axios.delete(`http://localhost:8080/api/camisas/delete-camisa/${camisaID}`)
    fetchcamisas()

  }

  //Actualiza la lista de Balones por cada balon nuevo
  useEffect(()=> {
    fetchbalones()
  }, [])

  //Recorre la lista de balones y los retorna como respuesta
  const fetchbalones = async() =>{
    try {
      const response = await axios.get(`http://localhost:8080/api/balones`)
      console.log(response);
      setBalones(response.data)
    } catch (error) {
      console.log('Error al cargar los balones: ', error)
    }

  }

  //Crea o actualiza un balon
  const handleCreateOrUpdatebalon = async(balonData) =>{
    if (editBalon) {
      await axios.put(`http://localhost:8080/api/balones/update-balon/${editBalon.id}`, balonData)
    } else {
      await axios.post(`http://localhost:8080/api/balones/add/balon`, balonData)
    }
    fetchbalones()
    setEditBalon(null)

  }

  //Permite editar un balon
  const handleEditBalon = (balon) =>{
    setEditBalon(balon)

  }

  //Permite eliminar un balon apartir de un ID
  const handleDeleteBalon = async(balonID) =>{
    console.log(balonID);
    await axios.delete(`http://localhost:8080/api/balones/delete-balon/${balonID}`)
    fetchbalones()

  }

   //Actualiza la lista de Guayos por cada guayo nuevo
   useEffect(()=> {
    fetchguayos()
  }, [])

  //Recorre la lista de balones y los retorna como respuesta
  const fetchguayos = async() =>{
    try {
      const response = await axios.get(`http://localhost:8080/api/guayos`)
      console.log(response);
      setGuayos(response.data)
    } catch (error) {
      console.log('Error al cargar los guayos: ', error)
    }

  }

  //Crea o actualiza un guayo
  const handleCreateOrUpdateguayo = async(guayoData) =>{
    if (editGuayo) {
      await axios.put(`http://localhost:8080/api/guayos/update-guayo/${editGuayo.id}`, guayoData)
    } else {
      await axios.post(`http://localhost:8080/api/guayos/add/guayo`, guayoData)
    }
    fetchguayos()
    setEditGuayo(null)

  }
  
  //Permite editar un guayo
  const handleEditGuayo = (guayo) =>{
    setEditGuayo(guayo)

  }

  //Permite eliminar un guayo apartir de un ID
  const handleDeleteGuayo = async(guayoID) =>{
    console.log(guayoID);
    await axios.delete(`http://localhost:8080/api/guayos/delete-guayo/${guayoID}`)
    fetchguayos()

  }

  return (
    
      <div classnombre='App'>
        <h1>Sports store</h1>
        <br/>
        <h2>Lista camisas</h2>
        <CamisaTable camisas={camisas} onEdit={handleEditCamisa} onDelete={handleDeletecamisa}/>
        <h2>{editCamisa ? 'editar camisa' : 'crear camisa'}</h2>
        <CamisaForm onSubmit={handleCreateOrUpdatecamisa} initialcamisa={editCamisa}/>
        <h2>Lista balones</h2>
        <BalonTable balones={balones} onEdit={handleEditBalon} onDelete={handleDeleteBalon}/>
        <h2>{editBalon ? 'editar balon' : 'crear balon'}</h2>
        <BalonForm onSubmit={handleCreateOrUpdatebalon} initialbalon={editBalon}/>
         <h2>Lista guayos</h2>
        <GuayoTable guayos={guayos} onEdit={handleEditGuayo} onDelete={handleDeleteGuayo}/>
        <h2>{editGuayo ? 'editar guayo' : 'crear guayo'}</h2>
        <GuayoForm onSubmit={handleCreateOrUpdateguayo} initalguayo={editGuayo}/> 

    </div>
  )
}

export default App

