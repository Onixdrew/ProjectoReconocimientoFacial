import React, { useState } from "react";
import "./media/Style/login.css"
import Modal from '../components/Modal/modal';
import { Link } from "react-router-dom";
import Logo from "./media/Img/Logo Reconocimiento Facial - Blanco.png"
import escudo from "./media/Img/logoVerdeSENA.png"

const Login = () => {
    const [mostrar, setMostrar] = useState(false);
    const [] = useState(false);

    return (
        <div className='bb'>
        <div class="Contenedor">


        <div class="Logo">
            <img class="logo" src={Logo} alt=""/>
        </div>

        <div class="Login">
            <div className="Loogin">
            <form action="">
                    <div class="formulario">
                        <h1 className="font-serif text-xl">¡Bienvenido!</h1>
                        <div class="TD">
                                <ion-icon name="people-circle-outline"></ion-icon>
                                <select name="" id="">
                                    <option hidden selected>Tipo de documento</option>
                                    <option value="">CC</option>
                                    <option value="">TI</option>
                                    <option value="">PPT</option>
                                    <option value="">CE</option>
                                </select>
                        </div>
                        <div class="IP">
                                <ion-icon name="keypad-outline"></ion-icon>
                                <input type="text" placeholder="Numero de documento" name="" id=""/>
                        </div>
                        <div class="IP">
                                <ion-icon name="key-outline"></ion-icon>
                                <input type="password" placeholder="Contraseña" name="" id=""/>
                        </div>
                    </div>
                </form>
                <div>
                    <button className="BB" onClick={() => setMostrar(true)}>Ingresar</button>
                        <Modal isOpen={mostrar} onClose={() => setMostrar(false)}>
                            <div className="Oopciones">
                                <h3>Rol</h3>
                                <div className="Opp">
                                    <Link to="/Administrativo">Administrativo</Link>
                                    <Link to="/HomeVigilante">Vigilante</Link>
                                    <Link to="/Instructor">Instructor</Link>
                                    <Link to="/Aprendiz">Aprendiz</Link>

                                    {/* Prueba Paladinez */}
                                    <Link to="/usuarios">Usuario</Link>
                                    <Link to="/registrarUsuario">RU</Link>
                                    <Link to="/usuario/:id">UID</Link>
                                </div>
                            </div>
                        </Modal>
                </div>
                <Link to="/OlvidarContraseña">Olvide mi contraseña</Link>
                <Link to="/Register">Registrarse</Link>
            </div>
        </div>

        <div class="Escudo">
            <img class="escudo" src={escudo} alt=""/>
        </div>

    </div>
    </div>
    );
}

export default Login;
