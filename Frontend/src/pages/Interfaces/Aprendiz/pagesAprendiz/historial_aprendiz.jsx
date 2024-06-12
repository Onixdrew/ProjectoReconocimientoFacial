
import React from "react";
import { Link } from "react-router-dom";

import Icono_Perfil from "../components/icono_Perfil";
import Navbarla from "../components/navbar";

const Historial_Aprendiz = () => {
  return (
    <div>
        <Navbarla></Navbarla>
       <div className=" ml-[22%]  w-[77vw]">
            <Icono_Perfil></Icono_Perfil>

            <div className="overflow-auto h-[80vh] absolute ">
              <table className=" sm:ml-3 lg:ml-24 min-[1041px]:ml-32 sm:mt-17  sm:h-10 ml-60  shadow-2xl sm:rounded-lg text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="  text-base font-medium bg-sky-200 text-gray-800 bg-gray-200 light:bg-gray-700 light:text-gray-400">
                  <tr>
                    <th scope="col" className="px-1 mx-5 py-3 inline-block sm:w-1">
                      No.
                    </th>
                    <th scope="col" className="px-1 mx-5 py-3 inline-block sm:ml-12">
                      Aprendiz
                    </th>
                    <th
                      scope="col"
                      className="px-1 ml-32 py-3 inline-block sm:ml-15 sm:mr-0"
                    >
                      N°. Documento
                    </th>
                    <th scope="col" className="pl-8 ml-6 py-3 inline-block sm:ml-7">
                      Ingreso
                    </th>
                    <th scope="col" className="pl-10 ml-6 py-3 inline-block sm:ml-1">
                      Ingreso/aula
                    </th>
                  </tr>
                </thead>
        
                <div className="overf">
                  <tr className=" bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600 hover:border-solid border-2 hover:border-green-400">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      18
                    </td>
                    <Link to={"/TablaIndiviAprendiz"}>
                      <td
                        scope="row"
                        className=" hover:underline px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                      >
                        Jesús Paladinez lopez gomez
                      </td>
                    </Link>
                    <td
                      scope="row"
                      className="px-6  py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      CC. 1002634856
                    </td>
                    <td
                      scope="row"
                      className="pl-16 px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      7:05 a.m
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      <td className="pl-8 px-4 text-center custom-checkbox">
                        <input type="checkbox" />
                      </td>
                    </td>
                  </tr>
                  <tr className=" bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600 hover:border-solid border-2 hover:border-green-400">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      17
                    </td>
                    <Link to={"/TablaIndiviAprendiz"}>
                      <td
                        scope="row"
                        className="hover:underline px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                      >
                        Jesús Paladinez lopez gomez
                      </td>
                    </Link>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      CC. 1002634856
                    </td>
                    <td
                      scope="row"
                      className="pl-16 px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      7:05 a.m
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      <td className="pl-8 px-4 text-center custom-checkbox">
                        <input type="checkbox" />
                      </td>
                    </td>
                  </tr>
                  <tr className=" bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600 hover:border-solid border-2 hover:border-green-400">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      16
                    </td>
                    <td
                      scope="row"
                      className=" px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      Jesús Paladinez lopez gomez
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      CC. 1002634856
                    </td>
                    <td
                      scope="row"
                      className=" pl-16 px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      7:05 a.m
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      <td className="pl-8 px-4 text-center custom-checkbox">
                        <input type="checkbox" />
                      </td>
                    </td>
                  </tr>
                  <tr className=" bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600 hover:border-solid border-2 hover:border-green-400">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      15
                    </td>
                    <td
                      scope="row"
                      className=" px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      Jesús Paladinez lopez gomez
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      CC. 1002634856
                    </td>
                    <td
                      scope="row"
                      className=" pl-16 px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      7:05 a.m
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      <td className="pl-8 px-4 text-center custom-checkbox">
                        <input type="checkbox" />
                      </td>
                    </td>
                  </tr>
                  <tr className=" bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600 hover:border-solid border-2 hover:border-green-400">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      14
                    </td>
                    <td
                      scope="row"
                      className=" px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      Jesús Paladinez lopez gomez
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      CC. 1002634856
                    </td>
                    <td
                      scope="row"
                      className="pl-16 px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      7:05 a.m
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      <td className="pl-8 px-4 text-center custom-checkbox">
                        <input type="checkbox" />
                      </td>
                    </td>
                  </tr>
                  <tr className=" bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600 hover:border-solid border-2 hover:border-green-400">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      13
                    </td>
                    <td
                      scope="row"
                      className=" px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      Jesús Paladinez lopez gomez
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      CC. 1002634856
                    </td>
                    <td
                      scope="row"
                      className="pl-16 px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      7:05 a.m
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      <td className="pl-8 px-4 text-center custom-checkbox">
                        <input type="checkbox" />
                      </td>
                    </td>
                  </tr>
                  <tr className=" bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600 hover:border-solid border-2 hover:border-green-400">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      12
                    </td>
                    <td
                      scope="row"
                      className=" px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      Jesús Paladinez lopez gomez
                    </td>
                    <td
                      scope="row"
                      className=" px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      CC. 1002634856
                    </td>
                    <td
                      scope="row"
                      className="pl-16 px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      7:05 a.m
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      <td className="pl-8 px-4 text-center custom-checkbox">
                        <input type="checkbox" />
                      </td>
                    </td>
                  </tr>
                  <tr className=" bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600 hover:border-solid border-2 hover:border-green-400">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      11
                    </td>
                    <td
                      scope="row"
                      className=" px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      Jesús Paladinez lopez gomez
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      CC. 1002634856
                    </td>
                    <td
                      scope="row"
                      className="pl-16 px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      7:05 a.m
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      <td className="pl-8 px-4 text-center custom-checkbox">
                        <input type="checkbox" />
                      </td>
                    </td>
                  </tr>
                  <tr className="hover:border-solid border-2 hover:border-green-400 bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      9
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      Pablo Antonio Ortiz Gutierrez
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      CC. 1002634856
                    </td>
                    <td
                      scope="row"
                      className="pl-16 px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      7:03 a.m
                    </td>
                    <td className="pl-8 px-4 text-center custom-checkbox">
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr className=" hover:border-solid border-2 hover:border-green-400 bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      8
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      Jonier Gómez  lopez gomez
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      CC. 1002634856
                    </td>
                    <td
                      scope="row"
                      className="pl-16 px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      7:01 a.m
                    </td>
                    <td className="pl-8 px-4 text-center custom-checkbox">
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr className="hover:border-solid border-2 hover:border-green-400 bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      7
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      Andres Maca lopez gomez
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      CC. 1002634856
                    </td>
                    <td
                      scope="row"
                      className="pl-16 px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      7:00 a.m
                    </td>
                    <td className="pl-8 px-4 text-center custom-checkbox">
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr className="hover:border-solid border-2 hover:border-green-400 bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      6
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      Daniel Astaiza lopez gomez
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      CC. 1002634856
                    </td>
                    <td
                      scope="row"
                      className="pl-16 px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      6:59 a.m
                    </td>
                    <td className="pl-8 px-4 text-center custom-checkbox">
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr className="hover:border-solid border-2 hover:border-green-400 bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      5
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      Yeimy Carolina Dorado
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      CC. 1002634856
                    </td>
                    <td
                      scope="row"
                      className="pl-16 px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      6:58 a.m
                    </td>
                    <td className="pl-8 px-4 text-center custom-checkbox">
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr className="hover:border-solid border-2 hover:border-green-400 bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      4
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      Franco Reina lopez gomez
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      CC. 1002634856
                    </td>
                    <td
                      scope="row"
                      className="pl-16 px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      6:57 a.m
                    </td>
                    <td className="pl-8 px-4 text-center custom-checkbox">
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr className="hover:border-solid border-2 hover:border-green-400 bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      3
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      Juan Ochoa lopez gomez
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      CC. 1002634856
                    </td>
                    <td
                      scope="row"
                      className="pl-16 px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      6:56 a.m
                    </td>
                    <td className="pl-8 px-4 text-center custom-checkbox">
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr className="hover:border-solid border-2 hover:border-green-400 bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      2
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      Jorge Coral lopez gomez
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      CC. 1002634856
                    </td>
                    <td
                      scope="row"
                      className="pl-16  px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      6:55 a.m
                    </td>
                    <td className="pl-8 px-4 text-center custom-checkbox">
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr className="hover:border-solid border-2 hover:border-green-400 bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      1
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      Alexis Ceron lopez gomez
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left"
                    >
                      TI. 1002634856
                    </td>
                    <td
                      scope="row"
                      className="pl-16 px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center"
                    >
                      6:54 a.m
                    </td>
                    <td className="pl-8 px-4 text-center custom-checkbox">
                      <input type="checkbox" />
                    </td>
                  </tr>
                </div>
              </table>
            </div>
       </div>
    </div>
  );
};

export default Historial_Aprendiz;
