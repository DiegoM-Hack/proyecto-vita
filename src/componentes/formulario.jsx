import React, { useState } from 'react';
import '../style/style.css';

const FormularioRegistro = () => {
  // Estados para manejar los valores de cada campo
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [materia, setMateria] = useState('');
  const [fecha, setFecha] = useState('');
  const [numeroCredito, setNumeroCredito] = useState(''); // Nuevo estado
  const [docente, setDocente] = useState(''); // Nuevo estado
  const [mensaje, setMensaje] = useState(''); // Estado para mostrar el mensaje final

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página
    setMensaje(
       `¡Gracias, ${nombre}!\nTus datos han sido registrados.\n` +
      `Materia: ${materia}\nDocente: ${docente}\nNúmero de Crédito: ${numeroCredito}\nFecha: ${fecha}`
    );
  };

  return (
    <div className="formulario-container">
      <h2>Registro de Estudiante</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
          />
        </label>

        <label>
          Correo electrónico:
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Ingresa tu correo"
          />
        </label>

        <label>
          Carrera:
          <input
            type="text"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
            placeholder="Ingresa tu carrera"
          />
        </label>

        <label>
          Materia:
          <input
            type="text"
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            placeholder="Ingresa la materia"
          />
        </label>

        <label>
          Fecha de inscripción:
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </label>

        <label>
          Número de Crédito:
          <input
            type="text"
            value={numeroCredito}
            onChange={(e) => setNumeroCredito(e.target.value)}
            placeholder="Ingresa el número de crédito"
          />
        </label>

        <label>
          Docente:
          <input
            type="text"
            value={docente}
            onChange={(e) => setDocente(e.target.value)}
            placeholder="Ingresa el nombre del docente"
          />
        </label>

        <button type="submit">Registrar</button>
      </form>

      {mensaje && <div className="mensaje-confirmacion">{mensaje}</div>}
    </div>
  );
};


export default FormularioRegistro;