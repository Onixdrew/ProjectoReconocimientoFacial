// import React from "react";
// import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
// import fotoPerfil from '../../../../../public/imagesAprendiz/istockphoto-913062404-612x612.jpg'

// export default function NavbarAprendiz() {
//   return (
//     <Navbar isBordered className="bg-green-600 flex justify-around p-2 md:flex-nowrap lg:flex-nowrap xl:flex-nowrap">
//       <NavbarBrand justify="start" className="md:w-1/4 lg:w-1/4 xl:w-1/4">
//         <p className="font-bold text-inherit text-[2em]">Aprendiz</p>
//       </NavbarBrand>

//       <NavbarContent className="flex justify-evenly md:flex-1 lg:flex-1 xl:flex-1" >
//         <NavbarItem className="md:w-1/3 lg:w-1/3 xl:w-1/3">
//           <Link href="/inicioAprendiz" className="text-black text-[1.5em]">
//             inicio
//           </Link>
//         </NavbarItem>
//         <NavbarItem className="md:w-1/3 lg:w-1/3 xl:w-1/3">
//           <Link href="/objetosAprendiz" className="text-black text-[1.5em]"  >
//             Objetos
//           </Link>
//         </NavbarItem>
//         <NavbarItem className="md:w-1/3 lg:w-1/3 xl:w-1/3">
//           <Link href="/historialAprendiz" className="text-black text-[1.5em]">
//             Historial
//           </Link>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarContent as="div" justify="end" className="md:w-1/4 lg:w-1/4 xl:w-1/4">
//         <Dropdown placement="bottom-end">
//           <DropdownTrigger >
//             <Avatar
//               isBordered
//               as="button"
//               className="transition-transform ms-[40vw] md:ms-0 lg:ms-0 xl:ms-0"
//               color="primary"
//               name="Jason Hughes"
//               size="lg"
//               src={fotoPerfil}
//             />

//           </DropdownTrigger>
//           <DropdownMenu aria-label="Profile Actions" variant="flat">
//             <DropdownItem key="profile" className="h-14 gap-2">
//               <p className="font-semibold">Signed in as</p>
//               <p className="font-semibold">zoey@example.com</p>
//             </DropdownItem>
//             <DropdownItem key="settings">My Settings</DropdownItem>
//             <DropdownItem key="team_settings">Team Settings</DropdownItem>
//             <DropdownItem key="analytics">Analytics</DropdownItem>
//             <DropdownItem key="system">System</DropdownItem>
//             <DropdownItem key="configurations">Configurations</DropdownItem>
//             <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
//             <DropdownItem key="logout" color="danger">
//               Log Out
//             </DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//       </NavbarContent>
//     </Navbar>
//   );
// }


// //////////////////// navabar 2

// import React from "react";
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Avatar, link} from "@nextui-org/react";
// import logoFaceID from "../../../../../public/imagesAprendiz/logoFaceID.svg";



// export default function NavbarAprendiz() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const menuItems = [
//     <Link href='#'>Perfil</Link>,
//     <Link href='#'>Activity</Link>,
//     <Link href='#'>Analytics</Link>,
//     <Link href='#'>System</Link>,
//     <Link href='#'>Deployments</Link>,
//     <Link href='#'>Salir</Link>,


//   ];

//   return (
//     <Navbar  className="py-2 bg-green-600 " onMenuOpenChange={setIsMenuOpen}>
//       <NavbarContent>
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           className="sm:hidden"
//         />
//         <NavbarBrand>
//           <img src={logoFaceID} className="w-[15%] " alt="logoFaceID" />
//           <p className="font-bold text-inherit font-bold text-xl">FaceID</p>
//         </NavbarBrand>
//       </NavbarContent>

//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="/inicioAprendiz">
//             Inicio
//           </Link>
//         </NavbarItem>
//         <NavbarItem >
//           <Link href="/objetosAprendiz" aria-current="page">
//             Mis Objetos
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="/historialAprendiz">
//             Historial
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//         <Dropdown placement="bottom-end">
// //           <DropdownTrigger>
// //             <Avatar
//               isBordered
//               as="button"
//               className="transition-transform"
//               color="secondary"
//               name="Jason Hughes"
//               size="sm"
//               src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
//             />
//           </DropdownTrigger>

//         </Dropdown>
//         </NavbarItem>

//       </NavbarContent>
//       <NavbarMenu>
//         {menuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               color={
//                 index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
//               }
//               className="w-full"
//               href="#"
//               size="lg"
//             >
//               {item}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </Navbar>
//   );
// }



// import React from "react";
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
// import logoFaceID from "../../../../../public/imagesAprendiz/logoFaceID.svg";

// const Minavbar = () => {
//   return (
//     <>
//           <Navbar isBordered>
//       <NavbarBrand justify="star">
//         <img src={logoFaceID} className="w-[15%] " alt="logoFaceID" />
//         <p className="font-bold text-inherit">ADSO</p>
//       </NavbarBrand>

//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Features
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link href="#" aria-current="page" color="secondary">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarContent as="div" justify="end">
//         <Dropdown placement="bottom-end">
//           <DropdownTrigger>
//             <Avatar
//               isBordered
//               as="button"
//               className="transition-transform"
//               color="secondary"
//               name="Jason Hughes"
//               size="sm"
//               src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
//             />
//           </DropdownTrigger>
//           <DropdownMenu aria-label="Profile Actions" variant="flat">
//             <DropdownItem key="profile" className="h-14 gap-2">
//               <p className="font-semibold">Signed in as</p>
//               <p className="font-semibold">zoey@example.com</p>
//             </DropdownItem>
//             <DropdownItem key="settings">My Settings</DropdownItem>
//             <DropdownItem key="team_settings">Team Settings</DropdownItem>
//             <DropdownItem key="analytics">Analytics</DropdownItem>
//             <DropdownItem key="system">System</DropdownItem>
//             <DropdownItem key="configurations">Configurations</DropdownItem>
//             <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
//             <DropdownItem key="logout" color="danger">
//               Log Out
//             </DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//       </NavbarContent>
//     </Navbar>
//     </>
//   )
// }

// export default Minavbar




// ///////////////////////////Navbar 3

import React, { useState, useEffect, useRef } from 'react';
import logoFaceID from "../../../../../public/imagesAprendiz/logoFaceID.svg";
import fotoPerfil from '../../../../../public/imagesAprendiz/istockphoto-913062404-612x612.jpg'
import { Avatar } from "@nextui-org/react";

const Navbarla = () => {
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const userDropdownRef = useRef(null);

    const toggleUserDropdown = () => {
        setUserDropdownOpen(!userDropdownOpen);
    };

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const handleClickOutside = (event) => {
        if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
            setUserDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className='navbar-container  fixed top-0 left-0 right-0 z-50 bg-white border dark:bg-gray-900'>
                <nav className="bg-white  border-gray-200 dark:bg-gray-900">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={logoFaceID} className="h-12" alt="Logo ADSO" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ADSO</span>
                        </a>
                        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
                            <div className='flex'>
                                
                                <button
                                    type="button"
                                    className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    id="user-menu-button"
                                    aria-expanded={userDropdownOpen}
                                    onClick={toggleUserDropdown}
                                >
                
        
                                    <Avatar
                                        isBordered
                                        as="button"
                                        className="transition-transform  w-14 h-14"
                                        color="secondary"
                                        name="Jason Hughes"
                                        
                                        src={fotoPerfil}
                                    />
                                </button>
                                
                            </div>
                            
    
                            {userDropdownOpen && (
                                <div ref={userDropdownRef} className="absolute z-50 ml-[30vw] mt-[30vh] right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700 dark:divide-gray-600" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                                    <div className="px-4 py-3  ">
                                        <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                        <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                                    </div>
                                    <ul className="py-2" role="none">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
    
                            <button
                                data-collapse-toggle="navbar-user"
                                type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-user"
                                aria-expanded={navOpen}
                                onClick={toggleNav}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>
                        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${navOpen ? '' : 'hidden'}`} id="navbar-user">
                            <ul className="flex text-xl  flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="/inicioAprendiz" className="block py-2 px-3 rounded md:bg-transparent md:hover:text-blue-700  md:p-0 md:dark:text-blue-500" aria-current="page">Inicio</a>
                                </li>
                                <li>
                                    <a href="/objetosAprendiz" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Mis Ojetos</a>
                                </li>
                                <li>
                                    <a href="/historialAprendiz" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Historial</a>
                                </li>
    
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbarla;



