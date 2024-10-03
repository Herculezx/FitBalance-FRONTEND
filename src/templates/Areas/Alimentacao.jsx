import React from 'react'

import MenuResponsive from "../../components/MenuResponsive/MenuResponsive"
import Header from "../../components/Header/Header"
import FooterResponsive from '../../components/FooterResponsive/FooterResponsive'

import imgLogo from "../../assets/images/logoNew.png"

const Alimentacao = () => {
  return (
    <div>
      <MenuResponsive />

      <section>
        <div>
          <h1>Bem-vindo à Nossa Página de Alimentação Saudável!</h1>
        </div>
        <div>
          <div>
            <h3>Estamos felizes em recebê-lo em nossa página dedicada a promover hábitos alimentares saudáveis e sustentáveis. Aqui, você encontrará uma variedade de orientações para ajudá-lo(a) a alcançar e manter uma vida mais saudável através da alimentação.</h3>
          </div>
          <div>
            <p>Nossa missão é fornecer informações claras e práticas que ajudem você a fazer escolhas alimentares que suportem seus objetivos de saúde e bem-estar. Navegue pelos tópicos, encontre as dicas que mais se adequam às suas necessidades e comece sua jornada rumo a uma vida mais saudável e vibrante.
              Estamos aqui para apoiar você a cada passo do caminho. Se tiver dúvidas ou precisar de orientação personalizada, não hesite em entrar em contato conosco. Vamos juntos transformar a sua alimentação e alcançar uma vida mais equilibrada e saudável!
            </p>
            <img src={imgLogo} alt="" />
          </div>
        </div>
      </section>

      <section>
        <div>
          <h1>O Que Você Vai Encontrar Aqui</h1>
        </div>
        <div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </section>

      <FooterResponsive />
    </div>
  )
}

export default Alimentacao 