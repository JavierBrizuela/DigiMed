import React from "react";
import historial from '../assets/historial.png';
import receta from '../assets/receta.png';
import { Link } from "react-router-dom";

function Servicios() {
  return (
      <div className="px-4 w-full">
      <p className="text-azul-claro text-center font-roboto font-bold text-2xl mb-16">
        ¿Qué desea hacer?
      </p>
    <div className=" md:w-266 h-100 md:ml-16 md:mr-16 md:flex-shrink-0 border rounded-lg bg-bg-mobile 
      shadow-md md:p-8 flex items-center justify-center mb-24" >
      <div className="flex flex-col md:flex-row gap-16">
        <div className="flex flex-col">
        <div className="m-6 px-2 md:px-0 md:m-0 md:w-96  h-64 border rounded-lg bg-fondo text-center flex-col justify-center" >
          <div className="flex justify-center items-center"> 
            <img src={historial} alt="" className="w-14 mt-4 h-14 flex-shrink-0" />
          </div>  
          <h2 className="text-dark-blue-design text-2xl font-roboto 
            font-normal capitalize mt-4"> Historial
          </h2>
          <p className="text-body-text text-18px font-roboto font-normal 
            leading-155 mt-2" >
            Aquí podrá ver el registro de sus solicitudes de recetas.
          </p>
          </div>
          <button className=" w-full md:w-96 h-14 md:p-15 pl-30 md:pr-145 flex items-center gap-10 
            border rounded-lg bg-celeste text-white mt-4 items-center justify-center" >
            Ver historial
          </button>
          </div>
          <div className="flex flex-col">
          <div className="m-6 px-2 md:px-0 md:m-0 md:w-96 h-64 border rounded-lg bg-fondo text-center flex-col justify-center" >
          <div className="flex justify-center items-center">
          <img src={receta} alt="" className="w-14 h-14 mt-4 flex-shrink-0" />
          </div>
          <h2 className="text-dark-blue-design text-2xl font-roboto 
            font-normal capitalize mt-4" >
            Recetas
          </h2>
          <p className="text-body-text text-18px font-roboto font-normal 
            leading-155 mt-2" >
            Para pedir una receta, deberá ingresar el nombre comercial o generico
          </p>
          </div>
          <Link to="/Solicitudes">
          <button className="w-full md:w-96 h-14 p-15 pl-30 pr-145 flex items-center gap-10 
            border rounded-lg bg-celeste text-white mt-4 items-center justify-center" >
            Ver recetas
          </button>
          </Link>
          </div>
      </div>
    </div>
    </div>
  );
}

export default Servicios;