import { PiProhibitBold } from "react-icons/pi";
import { TiDelete } from "react-icons/ti";
import Form_Objeto from "./formPrueba";
import Icono_Perfil from "../components/icono_Perfil";
import NavbarAprendiz from "../components/navbar";
import FormObjetos from "./formObjetos";
import imgFormObjetos from "../../../../../public/imagesAprendiz/espacio-trabajo-tecnologia-d-isometrica.avif";
import Footer from "../components/footer";
import { useState } from "react";

const Objetos_Aprendiz = () => {
   // Estado para controlar si el modal está abierto o cerrado
   const [modalOpen, setModalOpen] = useState(false);

   // Función para abrir el modal
   const openModal = () => {
     setModalOpen(true);
   };
 
   // Función para cerrar el modal
   const closeModal = () => {
     setModalOpen(false);
   };

  return (
    <div>
      <NavbarAprendiz></NavbarAprendiz>

      <div className="flex flex-col ">

        
         
        <div className="flex container mx-auto flex-col">

          <div className="flex mt-[20vh] flex-col md:ml-[9vw] md:mt-[17vh] md:w-[70%] ">
            <h2 className="md:ml-[20vw] md:mb-[5vh]  text-center text-green-700 text-2xl">Objetos activos</h2>
            <div className="flex gap-10  p-5">
            <span onClick={openModal} className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col w-full sm:w-[45%] lg:w-[30%] text-white">
              <div className=" flex relative overflow-hidden bg-cover bg-no-repeat"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                    <img
                      className="rounded-xl  sm:m-h-64  w-full "
                      src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/IMG_0281.jpeg"
                      alt=""
                    />
                    <a href="#!">
                      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
    
                    <a href="#" className="absolute hover:bg-white  rounded-lg bg-black hite md:ml-[80%] md:mt-3"><TiDelete o className=" text-3xl  hover:text-black text-white" /></a>
                  </div>
                  <div className="font-semibold p-2 space-y-2">
                    <p>Laptop DELL 2024 </p>
                    <p className="flex"><p className="text-green-400">Color: </p> gris y negro</p>
                    <p className="flex"><p className="text-green-400">Serial:</p> G8rV3456fazl</p>
                    <p className="flex"><p className="text-green-400">Fecha:</p> 7/03/2023</p>
                  </div>
            </span>
              
            <span onClick={openModal} className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col w-full sm:w-[45%] lg:w-[30%] text-white">
              <div className=" flex relative overflow-hidden bg-cover bg-no-repeat"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                    <img
                      className="rounded-xl  sm:m-h-64  w-full "
                      src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/IMG_0281.jpeg"
                      alt=""
                    />
                    <a href="#!">
                      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
    
                    <a href="#" className="absolute hover:bg-white  rounded-lg bg-black hite md:ml-[80%] md:mt-3"><TiDelete o className=" text-3xl  hover:text-black text-white" /></a>
                  </div>
                  <div className="font-semibold p-2 space-y-2">
                    <p>Laptop DELL 2024 </p>
                    <p className="flex"><p className="text-green-400">Color: </p> gris y negro</p>
                    <p className="flex"><p className="text-green-400">Serial:</p> G8rV3456fazl</p>
                    <p className="flex"><p className="text-green-400">Fecha:</p> 7/03/2023</p>
                  </div>
            </span>
            </div>
          </div>
  
          <div className="flex flex-col mt-[5vh] lg:mt-[12vh] md:ml-[9vw] md:mt-[17vh] md:w-[70%] ">
            <h2 className="md:ml-[20vw] md:mb-[5vh] text-2xl  text-center">Objetos Inactivos</h2>
            <div className="flex gap-10  p-5">
            <span onClick={openModal} className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col w-full sm:w-[45%] lg:w-[30%] text-white">
              <div className=" flex relative overflow-hidden bg-cover bg-no-repeat"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                    <img
                      className="rounded-xl  sm:m-h-64  w-full "
                      src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/IMG_0281.jpeg"
                      alt=""
                    />
                    <a href="#!">
                      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
    
                    <a href="#" className="absolute hover:bg-white  rounded-lg bg-black hite md:ml-[80%] md:mt-3"><TiDelete o className=" text-3xl  hover:text-black text-white" /></a>
                  </div>
                  <div className="font-semibold p-2 space-y-2">
                    <p>Laptop DELL 2024 </p>
                    <p className="flex"><p className="text-green-400">Color: </p> gris y negro</p>
                    <p className="flex"><p className="text-green-400">Serial:</p> G8rV3456fazl</p>
                    <p className="flex"><p className="text-green-400">Fecha:</p> 7/03/2023</p>
                  </div>
            </span>
              
            <span onClick={openModal} className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col w-full sm:w-[45%] lg:w-[30%] text-white">
              <div className=" flex relative overflow-hidden bg-cover bg-no-repeat"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                    <img
                      className="rounded-xl  sm:m-h-64  w-full "
                      src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/IMG_0281.jpeg"
                      alt=""
                    />
                    <a href="#!">
                      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
    
                    <a href="#" className="absolute hover:bg-white  rounded-lg bg-black hite md:ml-[80%] md:mt-3"><TiDelete o className=" text-3xl  hover:text-black text-white" /></a>
                  </div>
                  <div className="font-semibold p-2 space-y-2">
                    <p>Laptop DELL 2024 </p>
                    <p className="flex"><p className="text-green-400">Color: </p> gris y negro</p>
                    <p className="flex"><p className="text-green-400">Serial:</p> G8rV3456fazl</p>
                    <p className="flex"><p className="text-green-400">Fecha:</p> 7/03/2023</p>
                  </div>
            </span>

              <span onClick={openModal} className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col w-full sm:w-[45%] lg:w-[30%] text-white">
              <div className=" flex relative overflow-hidden bg-cover bg-no-repeat"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                    <img
                      className="rounded-xl  sm:m-h-64  w-full "
                      src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/IMG_0281.jpeg"
                      alt=""
                    />
                    <a href="#!">
                      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
    
                    <a href="#" className="absolute hover:bg-white  rounded-lg bg-black hite md:ml-[80%] md:mt-3"><TiDelete o className=" text-3xl  hover:text-black text-white" /></a>
                  </div>
                  <div className="font-semibold p-2 space-y-2">
                    <p>Laptop DELL 2024 </p>
                    <p className="flex"><p className="text-green-400">Color: </p> gris y negro</p>
                    <p className="flex"><p className="text-green-400">Serial:</p> G8rV3456fazl</p>
                    <p className="flex"><p className="text-green-400">Fecha:</p> 7/03/2023</p>
                  </div>
            </span>
          </div>
          

          <div className=" rounded-lg rounded-t-3xl rounded-b-3xl mt-[10vh]  bg-[url('../../../../../public/imagesAprendiz/espacio-trabajo-tecnologia-d-isometrica.avif')] "> 
           <FormObjetos></FormObjetos>
          </div>


      
      

     
     

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center "
          
        >
          <div className="bg-white rounded-lg shadow-lg p-6 lg:w-[50vw] mx-auto">
            <a href="#" className="absolute  hover:bg-white  rounded-lg bg-black hite md:ml-[80%] md:mt-3"><TiDelete o className=" text-3xl  hover:text-black text-white" /></a>
            <button onClick={closeModal} className=" bg-green-600 w-6 rounded-full ">X</button>
            <div className="flex">
              <img className="w-[30vw]" src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/IMG_0281.jpeg" alt="" />
              <div className="font-semibold p-2 space-y-2 lg:ml-[3vw] text-2xl">
                      <p>Laptop DELL 2024 </p>
                      <p className="flex"><p className="text-green-400">Color: </p> gris y negro</p>
                      <p className="flex"><p className="text-green-400">Serial:</p> G8rV3456fazl</p>
                      <p className="flex"><p className="text-green-400">Fecha:</p> 7/03/2023</p>
              </div>
            </div>
            
            <label class="inline-flex items-center cursor-pointer mt-4">
               <input type="checkbox" value="" class="sr-only peer"></input>
               <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
               <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Activar</span>
            </label>

            <div className="flex justify-end">
              <button
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg mr-2"
              >
                
                Editar
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
              >
                Eliminar
              </button>
              
              

            </div>
          </div>
        </div>
      )}

        </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Objetos_Aprendiz;



// import React from 'react';
// import { TiDelete } from 'react-icons/ti';
// import FormObjetos from './formObjetos';
// import NavbarAprendiz from '../components/navbar';
// import Footer from '../components/footer';

// const Objetos_Aprendiz = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <NavbarAprendiz />

//       <div className="flex flex-col container mx-auto mt-10 md:flex-row md:justify-center">
//         <div className="flex flex-col w-full md:w-3/4 md:ml-[9vw] md:mt-[17vh]">
//           <h2 className="md:ml-[20vw] md:mb-[5vh] text-green-700 text-2xl">Objetos activos</h2>
//           <div className="flex flex-wrap gap-10 p-5">
//             <span className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col w-full sm:w-[45%] lg:w-[30%] text-white">
//               <div className=" flex relative overflow-hidden bg-cover bg-no-repeat"
//                       data-te-ripple-init
//                       data-te-ripple-color="light">
//                     <img
//                       className="rounded-xl  sm:m-h-64  w-full "
//                       src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/IMG_0281.jpeg"
//                       alt=""
//                     />
//                     <a href="#!">
//                       <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
//                     </a>
    
//                     <a href="#" className="absolute hover:bg-white  rounded-lg bg-black hite md:ml-[80%] md:mt-3"><TiDelete o className=" text-3xl  hover:text-black text-white" /></a>
//                   </div>
//                   <div className="font-semibold p-2 space-y-2">
//                     <p>Laptop DELL 2024 </p>
//                     <p className="flex"><p className="text-green-400">Color: </p> gris y negro</p>
//                     <p className="flex"><p className="text-green-400">Serial:</p> G8rV3456fazl</p>
//                     <p className="flex"><p className="text-green-400">Fecha:</p> 7/03/2023</p>
//                   </div>
//             </span>
//             <span className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col w-full sm:w-[45%] lg:w-[30%] text-white">
//               <div className=" flex relative overflow-hidden bg-cover bg-no-repeat"
//                       data-te-ripple-init
//                       data-te-ripple-color="light">
//                     <img
//                       className="rounded-xl  sm:m-h-64  w-full "
//                       src="https://www.latercera.com/resizer/JeaH31hid69oUBKEk-dgJwPklRs=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/SOQOXWME4ZGHNP6J7JWF3X24VY.webp"
//                       alt=""
//                     />
//                     <a href="#!">
//                       <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
//                     </a>
    
//                     <a href="#" className="absolute hover:bg-white rounded-lg bg-black hite md:ml-[80%] md:mt-3"><TiDelete className=" text-3xl  hover:text-black text-white" /></a>
//                   </div>
//                   <div className="font-semibold p-2 space-y-2">
//                     <p>Laptop MacBook Pro 2024 </p>
//                     <p className="flex"><p className="text-green-400">Color: </p> gris y negro</p>
//                     <p className="flex"><p className="text-green-400">Serial:</p> G8rV3456fazl</p>
//                     <p className="flex"><p className="text-green-400">Fecha:</p> 15/03/2023</p>
//                   </div>
//             </span>
            
//           </div>

//           <h2 className="md:ml-[20vw] md:mb-[5vh] text-2xl">Objetos Inactivos</h2>
//           <div className="flex flex-wrap gap-10 p-5">
//             <span className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col w-full sm:w-[45%] lg:w-[30%] text-white">
//               <div className=" flex relative overflow-hidden bg-cover bg-no-repeat"
//                       data-te-ripple-init
//                       data-te-ripple-color="light">
//                     <img
//                       className="rounded-xl  sm:m-h-64  w-full "
//                       src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/IMG_0281.jpeg"
//                       alt=""
//                     />
//                     <a href="#!">
//                       <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
//                     </a>
    
//                     <a href="#" className="absolute hover:bg-white  rounded-lg bg-black hite md:ml-[80%] md:mt-3"><TiDelete className=" text-3xl  hover:text-black text-white" /></a>
//                   </div>
//                   <div className="font-semibold p-2 space-y-2">
//                     <p>Laptop DELL 2024 </p>
//                     <p className="flex"><p className="text-green-400">Color: </p> gris y negro</p>
//                     <p className="flex"><p className="text-green-400">Serial:</p> G8rV3456fazl</p>
//                     <p className="flex"><p className="text-green-400">Fecha:</p> 7/03/2023</p>
//                   </div>
//             </span>
//             <span className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col w-full sm:w-[45%] lg:w-[30%] text-white">
                
//             </span>
//             <span className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col w-full sm:w-[45%] lg:w-[30%] text-white">
//               <div className=" flex relative overflow-hidden bg-cover bg-no-repeat"
//                       data-te-ripple-init
//                       data-te-ripple-color="light">
//                     <img
//                       className="rounded-xl  sm:m-h-64  w-full "
//                       src="https://media.gq.com.mx/photos/61e70ca3f4e647708c8d61cf/master/w_1600%2Cc_limit/HONOR%2520MagicBook%2520X%252015.jpg"
//                       alt=""
//                     />
//                     <a href="#!">
//                       <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
//                     </a>
    
//                     <a href="#" className="absolute hover:bg-white rounded-lg bg-black hite md:ml-[80%] md:mt-3"><TiDelete className=" text-3xl  hover:text-black text-white" /></a>
//                   </div>
//                   <div className="font-semibold p-2 space-y-2">
//                     <p>Laptop Acer 2024 </p>
//                     <p className="flex"><p className="text-green-400">Color: </p> gris y negro</p>
//                     <p className="flex"><p className="text-green-400">Serial:</p> G8rV3456fazl</p>
//                     <p className="flex"><p className="text-green-400">Fecha:</p> 25/02/2023</p>
//                   </div>
//             </span>
//             {/* Agrega más elementos aquí según sea necesario */}
//           </div>
//         </div>

//         <div className="ml-[10vw] mt-10 md:ml-0 md:w-3/4">
//           <FormObjetos />
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Objetos_Aprendiz;
