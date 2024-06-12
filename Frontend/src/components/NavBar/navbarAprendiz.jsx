// import React, { useState } from "react";
// import { Transition } from "@headlessui/react";
// import { Link } from "react-router-dom";

// import "../Static/Style/navbar.css";

// import Logo from "../../pages/media/Img/Logo Reconocimiento Facial - Blanco.png";

// const NavbarAprendiz = ({ op1, op2, op3, op4 }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="Nav">
//       <div className="max-w-7xl mx-auto px-4 py-4">
//         <div className="flex justify-between">
//           <div className="flex items-center gap-6">
//             <img src={Logo} alt="" className="w-12" />
//             <h1 className="text-white font-bold text-xl">¡ Vigilante !</h1>
//           </div>
//           <div className="md:hidden flex ">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
//             >
//               <svg
//                 className="h-8 w-8 fill-current"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
//                 />
//               </svg>
//             </button>
//           </div>

//           <div className="hidden md:flex items-center ">
//             <Link
//               to="/Vigilante"
//               className="text-white  hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
//             >
//               {op1}
//             </Link>
//             <Link
//               to="/VigilanteRegistroUsuario"
//               className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
//             >
//               {op2}
//             </Link>
//             <Link
//               to="#"
//               className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
//             >
//               {op3}
//             </Link>
//             <Link
//               to="#"
//               className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
//             >
//               {op4}
//             </Link>
//             <Link className="icon ion-gear-b text-white text-2xl "></Link>
//           </div>
//         </div>
//       </div>

//       <Transition
//         show={isOpen}
//         enter="transition ease-out duration-100 transform"
//         enterFrom="opacity-0 scale-95"
//         enterTo="opacity-100 scale-100"
//         leave="transition ease-in duration-75 transform"
//         leaveFrom="opacity-100 scale-100"
//         leaveTo="opacity-0 scale-95"
//       >
//         {(ref) => (
//           <div ref={ref} className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <Link
//                 to="/Vigilante"
//                 className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 {op1}
//               </Link>
//               <Link
//                 to="/VigilanteRegistroUsuario"
//                 className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 {op2}
//               </Link>

//               <Link
//                 to=""
//                 className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 {op3}
//               </Link>
//               <Link
//                 to="#"
//                 className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 {op4}
//               </Link>
//             </div>
//           </div>
//         )}
//       </Transition>
//     </div>
//   );
// };

// export default NavbarAprendiz;


