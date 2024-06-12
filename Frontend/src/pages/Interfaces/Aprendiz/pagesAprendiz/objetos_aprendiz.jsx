import { PiProhibitBold } from "react-icons/pi";
import { TiDelete } from "react-icons/ti";
import Form_Objeto from "./formPrueba";
import Icono_Perfil from "../components/icono_Perfil";
import NavbarAprendiz from "../components/navbar";
import FormObjetos from "./formObjetos";
import imgFormObjetos from "../../../../../public/imagesAprendiz/espacio-trabajo-tecnologia-d-isometrica.avif";
import Footer from "../components/footer";

const Objetos_Aprendiz = () => {
  return (
    <div>
      <NavbarAprendiz></NavbarAprendiz>

      <div className="flex flex-col">
         
        <div className="flex flex-col md:ml-[9vw] md:mt-[17vh] md:w-[70%] ">
          <h2 className="md:ml-[20vw] md:mb-[5vh] text-2xl">Objetos activos</h2>
          <div className="flex gap-10  p-5">
            <span className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col  w-[15vw] text-white">
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

                <a href="#" className="absolute hover:bg-white  rounded-lg bg-black hite md:ml-[80%] md:mt-3"><TiDelete className=" text-3xl  hover:text-black text-white" /></a>
              </div>
              <div className="font-semibold p-2 space-y-2">
                <p>Laptop DELL 2024 </p>
                <p className="flex"><p className="text-green-400">Color: </p> gris y negro</p>
                <p className="flex"><p className="text-green-400">Serial:</p> G8rV3456fazl</p>
                <p className="flex"><p className="text-green-400">Fecha:</p> 7/03/2023</p>
              </div>
            </span>
            
            <span className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col  w-[15vw] text-white">
              <div className=" flex relative overflow-hidden bg-cover bg-no-repeat"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                <img
                  className="rounded-xl  sm:m-h-64  w-full "
                  src="https://www.latercera.com/resizer/JeaH31hid69oUBKEk-dgJwPklRs=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/SOQOXWME4ZGHNP6J7JWF3X24VY.webp"
                  alt=""
                />
                <a href="#!">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>

                <a href="#" className="absolute hover:bg-white rounded-lg bg-black hite md:ml-[80%] md:mt-3"><TiDelete className=" text-3xl  hover:text-black text-white" /></a>
              </div>
              <div className="font-semibold p-2 space-y-2">
                <p>Laptop MacBook Pro 2024 </p>
                <p className="flex"><p className="text-green-400">Color: </p> gris y negro</p>
                <p className="flex"><p className="text-green-400">Serial:</p> G8rV3456fazl</p>
                <p className="flex"><p className="text-green-400">Fecha:</p> 15/03/2023</p>
              </div>
            </span>
            <span className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col  w-[15vw] text-white">
              <div className=" flex relative overflow-hidden bg-cover bg-no-repeat"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                <img
                  className="rounded-xl  sm:m-h-64  w-full "
                  src="https://media.gq.com.mx/photos/61e70ca3f4e647708c8d61cf/master/w_1600%2Cc_limit/HONOR%2520MagicBook%2520X%252015.jpg"
                  alt=""
                />
                <a href="#!">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>

                <a href="#" className="absolute hover:bg-white rounded-lg bg-black hite md:ml-[80%] md:mt-3"><TiDelete className=" text-3xl  hover:text-black text-white" /></a>
              </div>
              <div className="font-semibold p-2 space-y-2">
                <p>Laptop Acer 2024 </p>
                <p className="flex"><p className="text-green-400">Color: </p> gris y negro</p>
                <p className="flex"><p className="text-green-400">Serial:</p> G8rV3456fazl</p>
                <p className="flex"><p className="text-green-400">Fecha:</p> 25/02/2023</p>
              </div>
            </span>
          </div>
        </div>

        <div className="  ml-[10vw] w-[50vw] rounded-lg rounded-t-3xl rounded-b-3xl mt-[10vh]  bg-[url('../../../../../public/imagesAprendiz/espacio-trabajo-tecnologia-d-isometrica.avif')] "> 
          <FormObjetos className=''></FormObjetos>
        </div>

        <Footer></Footer>
        
      </div>
    </div>
  );
};

export default Objetos_Aprendiz;
