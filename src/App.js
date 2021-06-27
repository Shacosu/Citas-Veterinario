import React, { useState, useEffect } from "react";

import Formulario from "./components/Formulario";
import Citas from "./components/Citas";
import PropTypes from 'prop-types';

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  const [citas, setcitas] = useState(citasIniciales);
  const titulo = citas.length === 0 ? "Agrega nuevas citas" : "Administra tus citas";
  const createCita = (cita) => {
    setcitas([...citas, cita]);
  };
  const deleteCita = (id) => {
    const newCita = citas.filter((cita) => cita.id !== id);
    setcitas(newCita);
  };
  useEffect(() => {
      localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas])

  return (
    <React.Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario createCita={createCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Citas key={cita.id} cita={cita} deleteCita={deleteCita} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Formulario.propTypes = {
  createCita: PropTypes.func.isRequired
}

export default App;
