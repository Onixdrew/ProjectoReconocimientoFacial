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

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Avatar} from "@nextui-org/react";
import logoFaceID from "../../../../../public/imagesAprendiz/logoFaceID.svg";



export default function NavbarAprendiz() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar  className="py-2 bg-green-600 " onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src={logoFaceID} className="w-[15%] " alt="logoFaceID" />
          <p className="font-bold text-inherit font-bold text-xl">FaceID</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/inicioAprendiz">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/objetosAprendiz" aria-current="page">
            Mis Objetos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/historialAprendiz">
            Historial
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Avatar/>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
