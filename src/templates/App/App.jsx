import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FaleConosco from '../Mensagem/FaleConosco'
import './App.css'

import Header from "../../components/Header/Header";
import AreaFitBalance from "../../components/AreaFitBalance/AreaFitBalance";
import CardImportancia from "../../components/CardImportancia/CardImportancia";
import Footer from "../../components/Footer/Footer";
import MenuResponsive from '../../components/MenuResponsive/MenuResponsive';
import FooterResponsive from '../../components/FooterResponsive/FooterResponsive';
import Sidebar from '../../components/Menu/Sidebar';
import { useEffect } from 'react';


function App() {

  const path = useLocation().pathname;
  const [logado, setLogado] = useState(null);


  useEffect(() => {
    setLogado(localStorage.getItem("user"))
  }, [path])

  return (
    <>
      <MenuResponsive />
      <Header />
      {!(logado) && <AreaFitBalance />}

      {(logado) &&
        <>
          <div className='flex justify-center items-center mt-20 '>
            <a href={'/home'} className='bg-borda w-80 text-center text-white font-bold p-2 text-3xl rounded-2xl '>Ir para Home</a>
          </div>
        </>
      }

      {(logado) &&
          <Sidebar />
      }
      <CardImportancia />
      <FooterResponsive />

      {/* <Header />
      <MenuResponsive />
      <AreaFitBalance />
      <CardImportancia />
      <FooterResponsive /> */}
    </>
  )
}

export default App
