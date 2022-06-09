const Form = function (props){
    const {form, setForm, handleGuardar} = props
    return (
        <form>
        <input 
            type="text"
            placeholder="Id"
            value={form._id}
            readOnly={true}
            disabled
          />
          <br />
          <input 
            type="text"
            placeholder="Nombre"
            value={form.nombre}
            onChange={(e) => setForm({...form, nombre: e.target.value})}
          />
          <br/>
          <input 
            type="text"
            placeholder="Marca"
            value={form.marca}
            onChange={(e) => setForm({...form, marca: e.target.value})}
          />
          <br/>
          <input 
            type="text"
            placeholder="Cod"
            value={form.cod}
            onChange={(e) => setForm({...form, cod: e.target.value})}
          />
          <br/>
          <button
          onClick={handleGuardar}
          >Guardar</button>
        </form>
    );
}
export default Form