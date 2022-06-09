const Row = function (props){
    const {item, editar, eliminar} = props
    return (
        <tr>
            <td>{item._id}</td>
            <td>{item.nombre}</td>
            <td>{item.marca}</td>
            <td>{item.code}</td>
            <td>
            <button onClick={ () => editar(item)}>Editar</button>
            <button onClick={ () => eliminar(item._id)}>Eliminar</button>
            </td>
        </tr>
    )
}
export default Row