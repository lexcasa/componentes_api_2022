import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import Row from './componentes/row.component';
import Form from './componentes/form.component';
import axios from 'axios'

const API   = 'http://localhost:3001/'
const model = 'componentes'

function App() {
  
  const [arrComps, setArrComps] = useState([])
  const [form, setForm]         = useState({
    _id: '',
    nombre: '',
    marca: '',
    cod: ''
  })

  const obtenerItems = function (){
    axios.get(API + model).then(res => {
      console.log("res: ", res)

      setArrComps(res.data)
       // la data de la API la agrega al arrComps
       console.log("arrComps :: ", arrComps)

    }).catch( error => {
      console.log("error: ", error)
    })
  }

  const editarItem = function (item){
    console.log("Click en editar!", item)
    setForm(item)
  }

  const eliminarItem = async function (id){
    const res = await axios.delete(API + model + '/' + id)
    console.log("res ::", res)
    obtenerItems()
  }

  const handleGuardar = function (e){
    e.preventDefault()
    // Editar
    if(form._id !== ''){
      axios.put(API + model, form).then( res => {
        obtenerItems()
        setForm({
          _id: '',
          nombre: '',
          marca: '',
          cod: ''
        })
      })
    } else {
      if(form.nombre.trim() === ''){
        return
      }
      axios.post(API + model, {
        nombre: form.nombre,
        marca: form.marca,
        cod: form.cod
      }).then( res => {
        obtenerItems()
        setForm({
          _id: '',
          nombre: '',
          marca: '',
          cod: ''
        })
      })
    }
    console.log(form)
  }

  // useEffect cuando el componente este ready
  useEffect(() =>{
    const nombre = "Alex"
    document.title = `Hola Mundo, ${nombre}`
    return () => obtenerItems()
  }, [])

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Codigo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            arrComps.map( (item, i) => {
              return <Row item={item} key={i} editar={editarItem} eliminar={eliminarItem} />
            })
          }
        </tbody>
      </table>
      <Form form={form} setForm={setForm} handleGuardar={handleGuardar} />
    </div>
  );
}

export default App;
