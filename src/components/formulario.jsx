import React from 'react';

const Formulario = () => {
  const [nombre, setNombre] = React.useState('');
  const [apellido, setApellido] = React.useState('');
  const [lista, setLista] = React.useState([]);

  const guardarDatos = (e) => {
    e.preventDefault();

    if (!nombre) {
      alert('No se ingresó el nombre');
      return;
    }

    if (!apellido) {
      alert('No se ingresó el apellido');
      return;
    }

    setLista([
      ...lista,
      { nombre: nombre, apellido: apellido }
    ]);

    e.target.reset();
    setNombre('');
    setApellido('');
  };

  const eliminarItem = (index) => {
    const newList = [...lista];
    newList.splice(index, 1);
    setLista(newList);
  };

  const editarItem = (index) => {
    const item = lista[index];
    setNombre(item.nombre);
    setApellido(item.apellido);

    if (!nombre || !apellido) {
     
      return;
    } else {

    const newList = [...lista];
    newList[index] = { nombre: nombre, apellido: apellido };

    setLista(newList);
    setNombre('');
    setApellido('');}
  };


  

  return (
    <div className="container">
      <h2 className="text-primary"></h2>

      <form action="" onSubmit={guardarDatos}>
        <input
          type="text"
          placeholder="Ingrese nombre"
          className="form-control mb-3"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingrese apellido"
          className="form-control mb-3"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />

        <div className="d-grid gap-2">
          <button type="submit" className="btn-outline-info" onClick={() => actualizarItem(index)}>
            Registrar
          </button>
        </div>
      </form>

      <hr />

      <ol className="list-group">
        {lista.map((item, index) => (
          <li className="list-group-item d-flex align-items-center justify-content-between" key={index}>
            <div>
              {item.nombre} {item.apellido}
            </div>
            <div>
              <button className="btn btn-danger ml-2" onClick={() => eliminarItem(index)}>
                Eliminar
              </button>
              <button className="btn btn-danger ml-2" onClick={() => editarItem(index)}>
                Editar
              </button>

            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Formulario;
