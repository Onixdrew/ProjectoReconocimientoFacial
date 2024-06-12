import React from "react";
import CarnetAprendiz from "../components/carnet";
import Footer from "../components/footer";
import Navbarla from "../components/navbar";

const Inicio_Aprendiz = () => {
  return (
    <>
      <div>
        <Navbarla />

        <div className="flex flex-col  lg:flex-row justify-center items-start mt-[15vh] lg:mt-[20vh] sm:mt-[17vh]  min-mt-10 md:mt-[20vh] flex-wrap px-4 space-y-5 lg:space-y-0 lg:space-x-10">
          <div className="flex-shrink-0">
            <CarnetAprendiz />
          </div>

          <div className="mt-5 lg:mt-0 lg:ml-10 lg:w-1/2">
            <h1 className="text-xl font-semibold text-center text-center ">Novedades</h1>
            <p className="mt-3 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, et,
              ad nemo esse consequuntur officiis delectus repellendus qui
              quisquam doloribus voluptate ab suscipit! Velit., autem.
            </p>
            <p className="mt-3 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, et,
              ad nemo esse consequuntur officiis delectus repellendus voluptatum
              ea autem alias odio minima, qui quisquam doloribus voluptate ab
              suscipit! Velit., autem.
            </p>
            <p className="mt-3 text-justify border-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, et,
              ad nemo esse consequuntur officiis delectus repellendus voluptatum
              ea autem alias odio minima, qui quisquam doloribus voluptate ab
              suscipit! Velit., autem.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[40vw] space-y-10 text-center mx-auto mt-8 px-4 lg:px-0">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            rem ducimus vero numquam? Quibusdam dolore odit rem. Explicabo
            cupiditate dolor fugiat odio libero iste, cumque praesentium saepe
            ut ratione perspiciatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            rem ducimus vero numquam? Quibusdam dolore odit rem. Explicabo
            cupiditate dolor fugiat odio libero iste, cumque praesentium saepe
            ut ratione perspiciatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            rem ducimus vero numquam? Quibusdam dolore odit rem. Explicabo
            cupiditate dolor fugiat odio libero iste, cumque praesentium saepe
            ut ratione perspiciatis.
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Inicio_Aprendiz;
