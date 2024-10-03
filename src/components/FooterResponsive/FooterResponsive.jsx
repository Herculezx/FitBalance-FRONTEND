import React from "react";

import linkedin from "../../assets/images/linkedin.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import email from "../../assets/images/email.png";
import github from "../../assets/images/github.png";

const FooterResponsive = () => {
  return (
    <div>
      <section className="mt-36">
        <div className="flex flex-col items-center justify-center bg-primaryColor sm:flex-row sm:items-center sm:justify-between sm:px-3  lg:px-12 2xl:justify-between 2xl:px-16">
          <h2 className="font-bold text-white py-3 text-2xl ">
            Fique Conectado Conosco!
          </h2>
          <div>
            <ul className="flex flex-row gap-4 justify-center items-center">
              <li>
                <a href="#">
                  <img src={linkedin} className="w-10 mb-4 sm:mt-4" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={facebook} className="w-10 mb-4 sm:mt-4" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagram} className="w-10 mb-4 sm:mt-4" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={email} className="w-10 mb-4 sm:mt-4" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={github} className="w-10 mb-4 sm:mt-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-bg-footer text-white ">
          <div>
            <div className="flex flex-col items-start justify-center gap-3  // sm:items-center sm:text-center  // lg:flex-row lg:items-center lg:pt-8">
              <div className="mt-3 lg:mt-0">
                <a
                  href="#"
                  className="underline font-bold text-xl ml-5 underline-offset-8 decoration-primaryColor // sm:ml-0 //"
                >
                  FitMind
                </a>
                <p className="text-md my-3 ml-5 border-solid border-b border-white w-80 pb-4 // sm:ml-0 // lg:border-none">
                  A empresa que faz acontecer a diferença em sua vida, tanto
                  como fisíca, quanto também mental.
                </p>
              </div>

              <div className="flex flex-col gap-3 ">
                <a
                  href="#"
                  className="underline font-bold text-xl ml-5 underline-offset-8 decoration-primaryColor // sm:ml-0 //"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="underline font-bold text-xl ml-5 underline-offset-8 decoration-primaryColor // sm:ml-0 //"
                >
                  Sobre Nós
                </a>
                <a
                  href="#"
                  className="underline font-bold text-xl ml-5 mb-3 underline-offset-8 decoration-primaryColor border-solid border-b border-white w-80 pb-4 // sm:ml-0 // lg:border-none"
                >
                  Fale Conosco
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="underline font-bold text-xl ml-5 underline-offset-8 decoration-primaryColor // sm:ml-0 //"
                >
                  Contato
                </a>
                <p className="text-md my-3 ml-5 border-solid border-b border-white w-80 pb-4 // sm:ml-0 // lg:border-none">
                  Rua Paulo Mendes Guerra, 249, Barueri, SP
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-start // sm:justify-center ">
            <div className="text-center mt-2 lg:border-solid lg:border-white lg:border-t lg:w-96 lg:flex lg:items-center lg:justify-center lg:m-0">
              <p className="ml-5 pb-5 text-md font-light // sm:ml-0 // lg:mt-2">
                ©2024 FitBalance. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterResponsive;
