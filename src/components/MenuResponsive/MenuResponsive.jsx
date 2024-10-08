import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const MenuResponsive = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = useLocation().pathname;
  const [logado, setLogado] = useState(null);


  useEffect(() => {
    setLogado(localStorage.getItem("user"))
  }, [path])

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="overflow-x-hidden">
      <header className="flex flex-col items-center justify-center max-w-full">
        <div className="bg-primaryColor w-full flex items-center justify-between h-[9vh] px-4 ">
          <Link to="/" className="text-white font-bold text-2xl">
            FitBalance
          </Link>

          <div className="hidden md:flex md:items-center md:justify-end md:w-full md:gap-8 ">
            <Link to="/faleconosco" className="text-white font-bold hover:border-b-2 hover:border-bd duration-100 text-xl">
              Fale Conosco
            </Link>
            <Link to="/sobrenos" className="text-white font-bold hover:border-b-2 hover:border-bd duration-100 text-xl">
              Sobre Nós
            </Link>
            {(!!!logado) && 
              <Link to="/login" className="text-white hover:border-solid font-bold hover:border-b-2 duration-100 text-xl">
                Entrar
              </Link>
            }
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`md:hidden bg-primaryColor w-full transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
          <ul className="flex flex-col items-center gap-3 py-4 border-solid border-t-2 border-bd">
            <li>
              <Link to="/faleconosco" className="text-white font-bold hover:border-solid hover:border-b-2 duration-100 text-xl">
                Fale Conosco
              </Link>
            </li>
            <li>
              <Link to="/sobrenos" className="text-white hover:border-solid font-bold hover:border-b-2 duration-100 text-xl">
                Sobre Nós
              </Link>
            </li>
            {(!!!logado) && <li>
              <Link to="/login" className="text-white hover:border-solid font-bold hover:border-b-2 duration-100 text-xl">
                Entrar
              </Link>
            </li>}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default MenuResponsive;
