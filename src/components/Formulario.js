import React, { useState } from 'react';
const { v4: uuid } = require('uuid');

const Formulario = ({ createCita }) => {
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })
    const [error, setError] = useState(false);
    const handleChange = (event) => {
        setCita({
            ...cita,
            [event.target.name]: event.target.value
        })
    }
    const { mascota, propietario, fecha, hora, sintomas } = cita;
    const handleCita = (event) => {
        event.preventDefault();

        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        cita.id = uuid();
        createCita(cita);
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
        
    }

    return (
        <React.Fragment>
            <h2>Crear cita</h2>
                {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
                <form
                    onSubmit={handleCita}
                >
                    <label>Nombre de mascota</label>
                    <input
                        type="text"
                        name="mascota"
                        className="u-full-width"
                        placeholder="Nombre de mascota"
                        onChange={handleChange}
                        value={mascota}
                    />
                    <label>Nombre del dueño</label>
                    <input
                        type="text"
                        name="propietario"
                        className="u-full-width"
                        placeholder="Dueño de la mascota"
                        onChange={handleChange}
                        value={propietario}
                    />
                    <label>Fecha de alta</label>
                    <input
                        type="date"
                        name="fecha"
                        className="u-full-width"
                        onChange={handleChange}
                        value={fecha}
                    />
                    <label>Hora de alta</label>
                    <input
                        type="time"
                        name="hora"
                        className="u-full-width"
                        onChange={handleChange}
                        value={hora}
                    />
                    <label>Descripcion</label>
                    <textarea
                        name="sintomas"
                        className="u-full-width"
                        onChange={handleChange}
                        value={sintomas}
                    ></textarea>
                    <button
                        type="submit"
                        className="button-primary u-full-width"
                        >
                        Agregar cita
                    </button>
                </form>
            
        </React.Fragment> 
     );
}
 

export default Formulario;