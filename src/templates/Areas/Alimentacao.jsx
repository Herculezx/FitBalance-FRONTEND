import React, { useEffect, useState } from 'react'

//Components
import MenuResponsive from "../../components/MenuResponsive/MenuResponsive"
import FooterResponsive from '../../components/FooterResponsive/FooterResponsive'
import Dropdown from '../../components/DropDown'

//Imagens
import imgLogo from "../../assets/images/logoNew.png"
import ideia from "../../assets/images/ideia.jpg"

import balanceado from "../../assets/images/alimentacao/BalanceadoPronto.mp4"
import bulking from "../../assets/images/alimentacao/BulkingPronto.mp4"
import cetogenica from "../../assets/images/alimentacao/CetogenicaPronto.mp4"
import HiperProteica from "../../assets/images/alimentacao/HiperProteicaPronto.mp4"
import Hipocalorica from "../../assets/images/alimentacao/HipocaloricaPronto.mp4"
import JejumIntermitente from "../../assets/images/alimentacao/JejumIntermitentePronto.mp4"
import LowCarb from "../../assets/images/alimentacao/LowCarbPronto.mp4"
import PlantBased from "../../assets/images/alimentacao/PlantBasedPronto.mp4"
import { useNavigate } from 'react-router-dom'

const Alimentacao = () => {
  const navigate = useNavigate();

  const [isAtTop, setIsAtTop] = useState(false);
  const handleScroll = () => {
    const section = document.getElementById('minha-section');
    if (section.getBoundingClientRect().top <= 0) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <MenuResponsive id="MenuResponsive" />

      <div id="minha-section"
        className={`z-40 sticky top-0 flex flex-row  bg-white justify-between md:justify-center items-center ${isAtTop ? 'md:gap-52 , lg:gap-96 , py-2 , shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]' : 'gap-3'} transition-all duration-300 ease-in-out my-5`}>
        <div>
          <button type="button" onClick={() => {
            navigate('/home')
          }} className="btn btn-sm20 bg-3d  mx-1 fw-bold rounded shadow flex justify-center items-center gap-2 text-md text-white hover:bg-borda duration-300">
            <i className="bi bi-box-arrow-left // text-white"></i> Voltar
          </button>
        </div>
        <a href="#" className='text-center font-bold underline'>Bem-vindo à Nossa Página de Alimentação Saudável!</a>
      </div>

      <section className='mt-2 flex flex-col items-center md:grid md:grid-cols-custom'>
        <div className='md:col-start-2'>
          <div className='bg-3d rounded-2xl w-full flex flex-col'>
            <div className=' text-white p-5 text-center font-medium '>
              <h3>Estamos felizes em recebê-lo em nossa página dedicada a promover hábitos alimentares saudáveis e sustentáveis. Aqui, você encontrará uma variedade de orientações para ajudá-lo(a) a alcançar e manter uma vida mais saudável através da alimentação.</h3>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <p className='bg-borda rounded-[40px] mx-5 p-5 text-white font-bold text-center shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(53,224,105,0.15)]'>Nossa missão é fornecer informações claras e práticas que ajudem você a fazer escolhas alimentares que suportem seus objetivos de saúde e bem-estar. Navegue pelos tópicos, encontre as dicas que mais se adequam às suas necessidades e comece sua jornada rumo a uma vida mais saudável e vibrante.
                Estamos aqui para apoiar você a cada passo do caminho. Se tiver dúvidas ou precisar de orientação personalizada, não hesite em entrar em contato conosco. Vamos juntos transformar a sua alimentação e alcançar uma vida mais equilibrada e saudável!
              </p>
              <img src={imgLogo} alt="" className='w-72 my-5 rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]' />
            </div>
          </div>
        </div>
      </section> { /* Bem Vindo... */}

      <section className='mt-10 flex flex-col gap-10 items-center py-5'>
        <div className='md:w-[90%] md:border-y-2 md:py-20 md:rounded-[50px]'>
          <div className='flex flex-row text-center flex-wrap gap-5 justify-evenly items-center mb-10 font-bold underline text-xl text-wrap lg:text-3xl'>
            <h1 className='bg-3d w-2/3 py-4 text-white font-bold rounded-xl'>O Que Você Vai Encontrar Aqui</h1>
          </div>
          <div className='flex flex-col items-center justify-center gap-5'>
            <div className=''>
              <img src={ideia} alt="" className='w-72  border-2 rounded-[70px] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]' />
            </div>
            <div >
              <ul className='list-disc mx-5 text-left gap-3 flex flex-col'>
                <li className='font-normal text-md'><span className='font-bold underline underline-offset-2'>Dicas Práticas:</span> Aprenda a ler rótulos de alimentos para fazer escolhas mais informadas e descubra substituições inteligentes que podem tornar suas refeições mais nutritivas e saborosas.</li>
                <li className='font-normal text-md'><span className='font-bold underline underline-offset-2'>Mitos e Verdades:</span> Desmistifique dietas populares e obtenha informações baseadas em evidências para tomar decisões mais informadas sobre suas escolhas alimentares.</li>
                <li className='font-normal text-md'><span className='font-bold underline underline-offset-2'>Diretrizes Nutricionais:</span> Explore as recomendações sobre macronutrientes e micronutrientes essenciais para o seu bem-estar, como proteínas, carboidratos, gorduras, vitaminas e minerais.</li>
                <li className='font-normal text-md'><span className='font-bold underline underline-offset-2'>Dietas:</span>Encontre estratégias eficazes para atingir seus objetivos, seja para perder peso, ganhar peso, aumentar a energia ou melhorar a digestão.</li>
              </ul>
            </div>
          </div>
        </div>
      </section> {/* O que voce vai encontrar aqui */}

      <section className=' flex flex-col items-center md:grid md:grid-cols-custom'>
        <div className='md:col-start-2'>

          <div className='text-center mb-20 font-bold underline text-xl text-wrap border-t-2 pt-5 md:border-t-0 md:mt-0 md:pt-0 lg:text-3xl'>
            <h1>Dicas Práticas</h1>
          </div>

          <div className='py-5 bg-borda rounded-2xl w-full flex flex-col'>
            <div className=' text-white mx-5 text-center font-medium '>
              <h1 className='flex flex-col gap-5'>Como Ler Rótulos de Alimentos
                Ler rótulos de alimentos pode ser desafiador, mas é essencial para fazer escolhas alimentares mais saudáveis. <br />
                <span className='underline text-xl mb-5'>Aqui estão algumas dicas:</span>
              </h1>
            </div>

            <div className='rounded-[40px] p-5 text-white font-bold text-center md:shadow-[inset_-1px_-3px_7px_9px_rgba(55,_254,_162,_0.10)] md:mx-5'>
              <ul className='list-disc mx-5 text-left gap-3 flex flex-col'>
                <li className='font-normal text-md'><span className='font-bold underline underline-offset-2'>Ingredientes:</span> A lista de ingredientes é ordenada por quantidade, do maior para o menor. Escolha produtos com ingredientes mais naturais e menos processados. Evite alimentos com ingredientes que você não conhece ou que soem artificiais (por exemplo corantes artificiais).</li>
                <li className='font-normal text-md'><span className='font-bold underline underline-offset-2'>Tamanho da Porção:</span> Verifique o tamanho da porção indicado no rótulo e compare com a quantidade que você consome. Muitas vezes, o tamanho da porção é menor do que você imagina.</li>
                <li className='font-normal text-md'><span className='font-bold underline underline-offset-2'>Calorias e Gorduras:</span> Compare a quantidade de calorias e gorduras saturadas entre produtos semelhantes. Prefira produtos com menos gordura saturada e sem gordura trans.</li>
                <li className='font-normal text-md'><span className='font-bold underline underline-offset-2'>Açúcares e Sódio:</span> Atenção para a quantidade de açúcares adicionados e sódio. Idealmente, escolha alimentos com menos açúcares adicionados e com baixo teor de sódio.</li>
                <li className='font-normal text-md'><span className='font-bold underline underline-offset-2'>Fibra e Proteínas:</span> Alimentos ricos em fibra e proteínas são melhores para a saciedade e para a saúde digestiva. Verifique a quantidade de fibras e proteínas e escolha produtos que oferecem essas qualidades. Substituições Inteligentes.</li>
              </ul>
            </div>

          </div>
        </div>
      </section> {/* Dicas Práticas */}

      <section className='mt-10 flex flex-col gap-10 items-center py-5'>
        <div className='md:w-[90%] md:border-y-2 md:py-20 md:rounded-[50px]'>

          <div className='flex flex-row flex-wrap gap-5 justify-evenly items-center mb-20 font-bold underline text-xl text-wrap lg:text-3xl'>
            <h1>Mitos e Verdades</h1>
            <h1 className='bg-3d p-4 text-white font-bold rounded-xl'>Desmistificando Dietas Populares:</h1>
          </div>

          <div className='flex flex-col items-center justify-center gap-20'>

            {/* <div className='bg-3d p-4 text-white font-bold rounded-xl'>
            </div> */}

            <ul className='list-disc mx-5 text-left gap-3 flex flex-col'>
              <li className='font-normal text-md'><span className='font-bold underline underline-offset-2'>Dietas Low-Carb</span> As dietas low-carb, como a dieta Atkins ou Keto, prometem perda rápida de peso através da redução de carboidratos. Embora possam resultar em perda de peso inicial, a longo prazo, muitas pessoas podem encontrar dificuldades para manter o peso. Além disso, a restrição excessiva de carboidratos pode levar a deficiências nutricionais. Carboidratos são importantes para a energia e o funcionamento cerebral. Uma abordagem balanceada pode ser mais sustentável e saudável. </li>
              <li className='font-normal text-md'><span className='font-bold underline underline-offset-2'>Dietas Detox</span>Dietas Detox: Muitas dietas detox prometem limpar o corpo de toxinas. No entanto, o corpo já possui sistemas eficazes de desintoxicação (como o fígado e os rins). Dietas extremamente restritivas ou de curto prazo podem não oferecer benefícios duradouros e podem causar efeitos colaterais. Em vez disso, focar em uma dieta equilibrada e rica em fibras pode ser mais eficaz para a saúde digestiva e o bem-estar geral.</li>
              <li className='font-normal text-md'><span className='font-bold underline underline-offset-2'>Dietas sem Glúten</span> A menos que você tenha doença celíaca ou sensibilidade ao glúten, não há evidências suficientes de que uma dieta sem glúten ofereça benefícios significativos para a saúde. Muitos produtos sem glúten podem ser processados e ter menos nutrientes do que suas contrapartes com glúten.</li>
            </ul>

          </div>

        </div>
      </section> {/* Mitos e Verdades */}

      <section className=' flex flex-col items-center md:grid md:grid-cols-custom'>

        <div className='md:col-start-2'>

          <div className='text-center mb-20 font-bold underline text-xl text-wrap border-t-2 pt-5 md:border-t-0 md:mt-0 md:pt-0 lg:text-3xl'>
            <h1>Diretrizes Nutricionais</h1>
          </div>

          <div className='py-5 bg-borda rounded-2xl w-full flex flex-col items-center gap-5'>

            <div className=' text-white mx-5 text-center text-2xl underline font-bold bg-3d py-4 w-72 rounded-xl'>
              <h1>Macronutrientes</h1>
            </div>

            <div className='rounded-[40px] p-5 text-white font-bold text-center md:shadow-[inset_-1px_-3px_7px_9px_rgba(55,_254,_162,_0.10)] md:mx-5'>
              <ul className='list-disc mx-5 text-left gap-3 flex flex-col'>
                <h1 className='font-normal text-md flex flex-col gap-2 border-b pb-3 rounded-md my-2'><span className='underline underline-offset-2 text-center border-primaryColor text-primaryColor font-bold text-xl my-3'>Proteínas:</span> Essenciais para a construção e reparo muscular, as proteínas também ajudam a manter a saciedade. <span> Fontes recomendadas incluem: </span> </h1>
                <li className='font-normal text-md'>Peixe: Rico em proteínas e ácidos graxos ômega-3.</li>
                <li className='font-normal text-md'>Frango: Opção magra e versátil.</li>
                <li className='font-normal text-md'>Tofu e Tempeh: Alternativas vegetais que oferecem proteínas completas.</li>
                <li className='font-normal text-md'>Legumes: Feijão, lentilhas e grão-de-bico são boas fontes de proteína para vegetarianos e veganos.</li>
                <h1 className='font-normal text-md flex flex-col gap-2 border-b pb-3 rounded-md my-2'><span className='underline underline-offset-2 text-center border-primaryColor text-primaryColor font-bold text-xl my-3'>Carboidratos:</span> Fornecem energia para o corpo e o cérebro. <span>Prefira:</span></h1>
                <li className='font-normal text-md'>Arroz Integral: Rico em fibras e nutrientes.</li>
                <li className='font-normal text-md'>Batata-doce: Oferece carboidratos complexos e vitaminas.</li>
                <li className='font-normal text-md'>Frutas: Fontes de carboidratos naturais e vitaminas.</li>
                <h1 className='font-normal text-md flex flex-col gap-2 border-b pb-3 rounded-md my-2'><span className='underline underline-offset-2 text-center border-primaryColor text-primaryColor font-bold text-xl my-3'>Gorduras:</span> Necessárias para a saúde celular e a absorção de vitaminas. <span>Opte por:</span></h1>
                <li className='font-normal text-md'>Abacate: Rico em gorduras monoinsaturadas.</li>
                <li className='font-normal text-md'>Nozes e Sementes: Fontes de ácidos graxos essenciais.</li>
                <li className='font-normal text-md'>Azeite de Oliva: Excelente para cozinhar e temperar saladas.</li>
              </ul>
            </div>

            <div className=' text-white mx-5 text-center text-2xl underline font-bold bg-3d py-4 w-72 rounded-xl'>
              <h1>Micronutrientes</h1>
            </div>

            <div className='rounded-[40px] p-5 text-white font-bold text-center md:shadow-[inset_-1px_-3px_7px_9px_rgba(55,_254,_162,_0.10)] md:mx-5'>
              <ul className='list-disc mx-5 text-left gap-3 flex flex-col'>
                <li className='font-normal text-md'><span className='font-bold underline underline-offset-2'>Vitaminas e Minerais:</span> Essenciais para diversas funções corporais:</li>
                <li className='font-normal text-md'><span className='font-bold underline underline-offset-2'>Vitamina A:</span> Importante para a visão e o sistema imunológico. Fontes: cenoura, batata-doce, espinafre.</li>
                <li className='font-normal text-md'><span className='font-bold underline underline-offset-2'>Vitamina C:</span> Ajuda na absorção de ferro e fortalece o sistema imunológico. Fontes: frutas cítricas, morangos, pimentão.</li>
                <li className='font-normal text-md'><span className='font-bold underline underline-offset-2'>Vitamina D:</span> Necessária para a saúde óssea. Fontes: exposição ao sol, alimentos fortificados, peixes gordurosos.</li>
                <li className='font-normal text-md'><span className='font-bold underline underline-offset-2'>Ferro:</span> Essencial para a formação de hemoglobina. Fontes: carne vermelha magra, espinafre, lentilhas.</li>
                <li className='font-normal text-md'><span className='font-bold underline underline-offset-2'>Cálcio:</span> Importante para a saúde óssea e dentária. Fontes: laticínios, vegetais de folhas verdes, tofu.</li>
                <li className='font-normal text-md'><span className='font-bold underline underline-offset-2'>Hidratação:</span> Beber água suficiente é vital para a saúde geral. A quantidade recomendada pode variar, mas uma boa meta é consumir pelo menos 2 litros de água por dia. A hidratação adequada suporta a digestão, a função renal e a regulação da temperatura corporal.</li>
              </ul>
            </div>
          </div>

        </div>

      </section> {/* Diretrizes Nutricionais */}

      <section className=' mt-10 flex flex-col items-center py-4'>
        <div className='md:py-20 md:rounded-[50px]'>

          <div className='mb-10 text-center font-bold text-xl underline lg:text-3xl'>
            <h1>Dietas</h1>
          </div>

          <div className='flex flex-col items-center'>

            <ul className='flex flex-col items-center'>
              <li>
                <Dropdown
                  titulo="Dieta Balanceada"
                  conteudo="Dieta Balanceada"
                  videoSrc={balanceado}
                  paragrafo="Se você está buscando equilíbrio, a dieta balanceada é perfeita! Ela mantém uma boa proporção de carboidratos, proteínas e gorduras, ideal para manter um estilo de vida saudável ao longo do tempo. Essa dieta deve ser bem rigorosa quanto às Proporções adequadas: Cada refeição deve ter uma boa distribuição de macronutrientes."
                />
              </li>
              <li>
                <Dropdown
                  titulo="Bulking"
                  conteudo="Bulking"
                  videoSrc={bulking}
                  paragrafo="Se o seu objetivo for ganhar massa muscular, a dieta bulking, ou hipercalórica, é o caminho! Ela aumenta bastante a ingestão de calorias, especialmente de carboidratos e proteínas, perfeita para treinos intensos. Nesta dieta deve haver um Superávit calórico: onde a principal característica da dieta bulking é a ingestão de mais calorias do que o corpo queima, geralmente um aumento de 250 a 500 calorias por dia. Geralmente, envolve consumir 5 a 7 refeições por dia para facilitar a ingestão calórica."
                />
              </li>
              <li>
                <Dropdown
                  titulo="Dieta Cetogênica"
                  conteudo="Dieta Cetogênica"
                  videoSrc={cetogenica}
                  paragrafo="Se você está buscando queimar gordura rápido, a dieta cetogênica é uma boa opção! Ela diminui os carboidratos e aumenta as gorduras saudáveis, fazendo seu corpo entrar em cetose e usar gordura como combustível. Uma das características dessa dieta seria Macronutrientes: que no geral, a distribuição dos macronutrientes é de cerca de 70-75% de gorduras, 20-25% de proteínas e apenas 5-10% de carboidratos. E alguns dos potenciais benefícios seriam a perda de peso: essa dieta pode ajudar na perda de peso rápida, já que a redução de carboidratos leva à queima de gordura armazenada, outra é o controle de açúcar no sangue: Pode ajudar a estabilizar os níveis de glicose, sendo benéfica para pessoas com diabetes tipo 2, e também o aumento da energia mental: Algumas pessoas que utilizaram essa dieta relataram melhora na clareza mental e na concentração devido ao uso de cetonas como fonte de energia."
                />
              </li>
              <li>
                <Dropdown
                  titulo="Dieta HiperProteíca"
                  conteudo="Dieta HiperProteica"
                  videoSrc={HiperProteica}
                  paragrafo="Se você quer ganhar massa muscular, a dieta hiperproteica é uma ótima escolha! Ela aumenta a ingestão de proteínas, com alimentos como frango e ovos, ajudando na recuperação dos músculos. Uma das características dessa dieta é o Aumento de proteínas: A ingestão de proteínas pode representar entre 25% e 35% das calorias diárias, dependendo dos objetivos individuais, e também a Redução de carboidratos: Muitas vezes, limita-se a ingestão de carboidratos, especialmente os refinados, para ajudar na perda de gordura. "
                />
              </li>
              <li>
                <Dropdown
                  titulo="Dieta HipoCalórica"
                  conteudo="Dieta HipoCalórica"
                  videoSrc={Hipocalorica}
                  paragrafo="Quer perder peso? A dieta hipocalórica pode ser a solução! Nela, você consome menos calorias do que gasta, focando em alimentos como vegetais e proteínas magras, o que faz seu corpo queimar gordura. A principal característica dessa dieta é a Redução calórica: Normalmente, essa dieta limita a ingestão diária de calorias, com valores que podem variar entre 1.200 e 1.800 calorias, dependendo do sexo, idade, nível de atividade física e objetivos."
                />
              </li>
              <li>
                <Dropdown
                  titulo="Jejum Intermitente"
                  conteudo="Jejum Intermitente"
                  videoSrc={JejumIntermitente}
                  paragrafo="Se você quer perder gordura ou controlar o apetite, a estratégia do temos o jejum intermitente pode te ajudar! Ela alterna períodos de jejum e alimentação, o que pode ser bom para o seu metabolismo. Algumas pessoas podem sentir fome ou irritabilidade nos primeiros dias, mas esses sintomas geralmente diminuem à medida que o corpo se adapta, e é importante manter-se hidratado durante o jejum, bebendo água, chá ou café sem açúcar."
                />
              </li>
              <li>
                <Dropdown
                  titulo="Dieta Low Carb"
                  conteudo="Dieta Low Carb"
                  videoSrc={LowCarb}
                  paragrafo="Se você não quer eliminar todos os carboidratos, a dieta low carb pode ser para você! Com ela você reduz a ingestão de carboidratos, mas ainda consome proteínas e gorduras saudáveis, priorizando alimentos naturais.É importante garantir que a dieta seja equilibrada e inclua uma variedade de alimentos para obter todos os nutrientes essenciais. "
                />
              </li>
              <li>
                <Dropdown
                  titulo="Plant Based"
                  conteudo="Plant Based"
                  videoSrc={PlantBased}
                  paragrafo="Se você está pensando em seguir uma alimentação à base de plantas, a dieta plant-based é rica em vegetais, legumes e grãos, e traz muitos benefícios, podendo ser adaptada para ganho de massa ou saúde geral. Algumas das características dessa dieta são a Limitação de alimentos processados: Encoraja a redução de alimentos processados e industrializados, que muitas vezes contêm aditivos, açúcares e gorduras não saudáveis. E a ampla Flexibilidade: Podendo variar de uma alimentação totalmente vegana (sem produtos de origem animal) a uma dieta que inclui alguns produtos animais, como laticínios ou ovos, em menor quantidade."
                />
              </li>
            </ul>

          </div>
        </div>

      </section> {/* Dietas */}

      <FooterResponsive />
    </div>
  )
}

export default Alimentacao 