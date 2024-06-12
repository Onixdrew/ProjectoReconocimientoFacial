import React,{ useState, useEffect, useRef } from 'react'

const Icono_Perfil = () => {
    
    const [perfil, setPerfil] = useState(false);

    // obtiene una referencia al contenedor del menú
    const menuRef = useRef();
  
    const abrirPerfil = () => {
      setPerfil(!perfil);
    };
  
    // cierra el desplegable haciendo click en everywhere
    useEffect(() => {
      const cerrarMenu = (event) => {
        if (perfil && !menuRef.current.contains(event.target)) {
          setPerfil(false);
        }
      };
  
      document.addEventListener('click', cerrarMenu);
  
      return () => {
        document.removeEventListener('click', cerrarMenu);
      };
    }, [perfil]);

  return (
    <>
        {/* Icono perfil ususario */}
        <div className=" relative inline-block ml-[75%]" ref={menuRef}>
        <div className="group inline-block px-1   rounded-full mt-4 transition duration-300 ease-in-out">
          <div className="flex items-center">
            <div className="mr-4 group-hover:opacity-100 group-hover:translate-x-0 transform opacity-0 transition duration-300 ease-in-out">
              <div className="font-bold">Samuel</div>
              <div className="text-sm">Samuel7@hotmail.com</div>
            </div>
            <button
              type="button"
              className="rounded-full border shadow-xl hover:border-sky-500 focus:border-sky-500"
              onClick={abrirPerfil}
            >
              <img
                src="https://media.istockphoto.com/id/913062404/es/foto/cara-de-hombre-de-negocios-contra-el-fondo-blanco.jpg?s=612x612&w=0&k=20&c=KWNbHS35bjiMRjHFXg5FLCMNOpBI7rTEAfyds_3XQ-8="
                alt="Avatar"
                className="w-16 h-16 rounded-full object-cover group-hover:brightness-110"
              />
            </button>
          </div>
        </div>
        {perfil && (
          <div className="ml-[6vw] text-center z-10 absolute text-white mt-2 w-[12vw] rounded-md shadow-xl bg-gray-600 ring-1 ring-black ring-opacity-5 divide-y divide-gray-200">
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-sm  hover:bg-gray-700">
                Perfil
              </a>
              <a href="#" className="block px-4 py-2 text-sm  hover:bg-gray-700">
                Configuración
              </a>
            </div>
            <div className="pt-1">
              <a href="#" className="hover:text-red-500  block px-4 py-2 text-sm  hover:bg-gray-700">
                Cerrar Sesión
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Icono_Perfil