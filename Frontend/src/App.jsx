import './App.css'
import { BrowserRouter, useRoutes } from "react-router-dom";

// Navs



/// Paginas Principales

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

/// Rol Vigilante

/// Rol Administrativo

/// Rol Instructor

/// Rol Aprendiz

import Inicio_Aprendiz from "./pages/Interfaces/Aprendiz/pagesAprendiz/inicio_aprendiz";
import Objetos_Aprendiz from "./pages/Interfaces/Aprendiz/pagesAprendiz/objetos_aprendiz";
import Historial_Aprendiz from "./pages/Interfaces/Aprendiz/pagesAprendiz/historial_aprendiz";


function App() {

  const AppRoutes = () => {
    let routes = useRoutes([
      
      // Rutas Principales

      // { path: "/", element: <Home/> },
      { path: "/", element: <Login/> },
      { path: "/Register", element: <Register/> },

      // Rutas Vigilante

      // { path: "/HomeVigilante", element: <HomeVigilante/> },

      // Rutas Administrativo

      // Rutas Instructor

      // Rutas Aprendiz
      {path: "/inicioAprendiz", element: <Inicio_Aprendiz />},
      {path: "/objetosAprendiz", element: <Objetos_Aprendiz />},
      {path: "/historialAprendiz", element: <Historial_Aprendiz />},

    ]);
    return routes;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;

