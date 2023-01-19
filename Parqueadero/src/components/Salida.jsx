import { useState, useEffect } from "react";

const Salida = () => {
  const [nombre, setNombre] = useState("");

  //setNombre('Trosky');

  //console.log(nombre);

  return (
    <div className="md:w-1/2 lg:w-2/5">
      
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Tipo Vehículo:
          </label>

          <select name="" id="tipo" className="bg-white shadow-md rounded-lg">
            <option value="seleccione">Seleccione el tipo de vehículo</option>
            <option value="moto">Moto</option>
            <option value="carro">Carro</option>
          </select>
        </div>

        <div className="mb-5">
          <label
            htmlFor="placa"
            className="block text-gray-700 uppercase font-bold"
          >
            Placa:
          </label>

          <input
            id="placa"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            placeholder="Ingrese la placa del vehículo"
            value={nombre}
            onChange={(e) => console.log(setNombre(e.target.value))}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de Ingreso:
          </label>

          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md"
            placeholder="Ingrese la fecha de ingreso"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="hora"
            className="block text-gray-700 uppercase font-bold"
          >
            Hora de Ingreso:
          </label>

          <input
            id="hora"
            type="time"
            className="border-2 w-full p-2 mt-2 rounded-md"
            placeholder="Ingrese la hora de ingreso"
          />
        </div>

        <input
          type="submit"
          value="Ingresar"
          className="bg-red-600 w-full p-3 text-white uppercase font-bold hover:bg-red-800 cursor-pointer transition-colors rounded-md"
        />
      </form>

      
    </div>
  );
};

export default Usuario;
