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

  return (
    <>
      <MenuResponsive />
      <Header />
      <AreaFitBalance />
      <CardImportancia />


      {/* <Header />
      <MenuResponsive />
      <AreaFitBalance />
      <CardImportancia />
      <FooterResponsive /> */}
    </>
  )
}

export default App
