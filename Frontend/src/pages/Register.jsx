import React from "react";
import "./media/Style/register.css";
import RegisterImg from "./media/Img/Img Register.jpg";

const Register = () => {
  return (
    <div className="Register_padre">
      <div className="Register_hijo">

        <div className="Register_imagen">
          <img src={RegisterImg} alt="" />
        </div>

        <div className="Register_Contenido">

        <div className="Register_titulos">
            <h1 className="text-4xl">Registro</h1>
            <p>¡Hacemos lo mejor por tu seguridad!</p>
        </div>
        <div className="Register_inputs">
            
            <div className="Nombres">
                <span>Nombre</span>
                <div className="Register_inputs_nombres flex flex-col gap-3 ">
                    <input placeholder="Name" type="text" />
                    <input placeholder="Last Name" type="text" />
                </div>
            </div>
          
            <div className="NumeroIdentidad">

            </div>

            <div className="Correos">

            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
