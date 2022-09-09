import React, { useState } from 'react'

const Formulario = ({error, setError}) => {

    const [genero, setGenero] = useState("")
    const [tipoDocumento, setTipoDocumento] = useState("")
    const [nIdentificacion, setnIdentificacion] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [fecha, setFecha] = useState("")
    const [nacionalidad, setNacionalidad] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        if([genero, tipoDocumento, nIdentificacion, nombre, apellido, fecha, nacionalidad].includes('')){
            setError(true)
            return
        }
    }

    return (
        <>
            <div className="container-formulario flex">
                <form id="cliente" onSubmit={handleSubmit}>
                    <div id="form-group flex">
                        <h3 className="tituloForm">GUARDAR NUEVA PERSONA</h3>
                    </div>
                    <div id="form-group flex">
                        <select name="Genero" id="genero" value={genero} onChange={e => setGenero(e.target.value)}>
                            <option>-Seleccione su genero</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                        </select>
                    </div>

                    <div id="form-group flex">
                        <select name="TipoDocumento" id="tipoDocumento" value={tipoDocumento} onChange={e => setTipoDocumento(e.target.value)}>
                            <option>-Seleccione su tipo de documento</option>
                            <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                            <option value="Cedula">Cedula</option>
                        </select>

                        <input type="number" placeholder="Ingrese su Numero de Identificacion" value={nIdentificacion} onChange={e => setnIdentificacion(e.target.value)} />
                    </div>
                    <div id="form-group">
                        <input id="nombre" type="text" placeholder="Ingrese su Nombre" value={nombre} onChange={e => setNombre(e.target.value)}/>
                    </div>
                    <div id="form-group">
                        <input type="text" placeholder="Ingrese su Apellido" value={apellido} onChange={e => setApellido(e.target.value)}/>
                    </div>
                    <div id="form-group">
                        <input type="date" value={fecha} onChange={e => setFecha(e.target.value)}/>
                    </div>
                    <div id="form-group">
                        <input type="text" placeholder="Ingrese su Nacionalidad" value={nacionalidad} onChange={e => setNacionalidad(e.target.value)}/>
                    </div>

                    <div className="form-group submit flex">
                        <input className="botonGuardar" type="submit" value="GUARDAR" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Formulario