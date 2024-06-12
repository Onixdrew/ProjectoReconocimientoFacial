import React, { useState } from "react";
import { FaHome, FaTh, FaAddressBook, FaHistory } from "react-icons/fa";
import { FaLaptopFile } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";

const Sidebar2 = () => {
  const location = useLocation();
  const isPaginaEspecial = [
    location.pathname === "/",
    location.pathname === "/objetos_aprendiz",
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Cambia el color de fondo del documento
    document.body.style.backgroundColor = isDarkMode ? "#fff" : "#777777";
  };

  return (
    <aside className=" bg-gray-800 w-[18vw] p-4 h-[95vh]   rounded-2xl ">
      <div className="flex items-center justify-center mb-8 mt-4">
        <div className="bg-white h-1 w-3/4 rounded-full"></div>
      </div>
      <div className="flex flex-col space-y-8 ml-[2.5vw] mt-[10vh]">
        <Link to="/">
          <div className="flex items-center space-x-4 text-xl">
            <FaHome className="text-white " />
            <span className={`${isPaginaEspecial[0] ? 'text-orange-500' : 'text-white hover:text-orange-500 hover:text-[1.2em]'}`}>Inicio</span>
          </div>
        </Link>

        <Link to="/objetos_aprendiz">
          <div className="flex items-center space-x-4 text-xl ">
            <FaLaptopFile className="text-white " />
            <span className={`${isPaginaEspecial[1] ? 'text-orange-500' : 'text-white hover:text-orange-500 hover:text-[1.1em]'}`}>
              Mis Objetos
            </span>
          </div>
        </Link>

        <Link to="/historial">
          <div className="flex items-center space-x-4 text-xl mb-[7vh]">
            <FaHistory className="text-white" />
            <span className={`${isPaginaEspecial[2] ? 'text-orange-500' : 'text-white hover:text-orange-500 hover:text-[1.1em]'}`}>Historial</span>
          </div>
        </Link>
      </div>
      <div className="mt-auto ">
        <div className="flex items-center justify-center mt-8">
          <div className="bg-white h-1 w-3/4 rounded-full"></div>
        </div>

        <div className="flex items-center justify-center mt-8">
          <span className="text-white">Logo Empresa</span>
        </div>

      </div>
      <label className="inline-flex items-center cursor-pointer mt-[65%]">
        {isDarkMode ? <MdWbSunny className="text-white ml-[6vw] text-xl" /> : <FaMoon className="text-white ml-[5vw] text-xl" />}
        {isDarkMode ? <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 "></span> : <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 "></span>}
        <input onClick={toggleDarkMode} type="checkbox" value="" className="sr-only peer"></input>
        <div className="relative  w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-700"></div>
      </label>
    </aside>
  );
};

export default Sidebar2;
