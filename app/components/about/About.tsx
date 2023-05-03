import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { data } from './_data'
import Silvana from '../../../public/silvana-oliveira.png'

export default function About() {
    const arts = data.map(item => {
        return <ImgArts src={item.image} alt='Obra feita pela artista Silvana Oliveira' key={item.id} />
    })
  return (
    <Container>
        <h2>Sobre a Artista</h2>
        <Artist>
            <Image src={Silvana} alt='Artista Silvana Oliveira' width={350} height={466} />
            <Description>
                <p>SILVANA OLIVEIRA</p>
                <p>Artista plástica autodidata. Há mais de trinta anos atuando no mercado, com Galeria de artes própria e Escola de pintura, tem seus trabalhos vendidos por todo o Brasil, por retratar em telas, histórias de vida e trajetórias de grandes empresas nos trabalhos corporativos, eternizando momentos que cada olhar desejaria viver para sempre. Silvana também desenvolve produtos com arte aplicada que carregam a sua grife Silviê, em peças de vestuário e moda casa.</p>
                <p>Sua ligação com a arte começou quando ainda menina, pintava alguns retalhos de panos que sua mãe lhe dava. Na adolescência trabalhava como babá, mas já tinha muitos sonhos. De família humilde sem perspectivas de futuro na sua cidade, aos 16 anos mudou-se para Passo Fundo em busca de emprego. Na cidade grande sentia-se muito só, desenhar lhe acalmava e preenchia, então iniciou suas primeiras pinturas em tela, logo começou a expor e vender na loja onde trabalhava como balconista. Sempre dedicada e entusiasmada, recebeu o apoio de amigas que a incentivaram a ministrar aulas de pintura, transformando sua sala em ateliê. </p>
                <p>Trabalhava durante o dia e dava aulas à noite. Foi também gerente de Joalheria e seguiu essa rotina por longos anos, até sentir que já poderia viver bem e apenas da sua arte. Foi em 2006 que Silvana teve seu grande sonho alcançado, quando inaugurou sua própria Galeria de Artes onde mantém exposição permanente e também a Escola de pintura. Sua carreira internacional conta com exposições de destaque em diversos países como: Barcelona e Madri-Espanha, Berlim-Alemanha, Paris e Toulouse-França, Roma-Itália, Viena-Áustria, Nova Iorque-EUA e em Lisboa-Portugal onde recebeu medalha de ouro.</p>
                <p>`&quot;` Lute pelos seus sonhos, eles dão colorido e impulsionam a vida, foque nos seus desejos e seja perseverante, um dia você alcançará o que tanto almeja.`&quot;`</p>
            </Description>
        </Artist>
        <p className='subtitle'>conheça algumas Obras da artista</p>
        <ArtsContainer>{arts}</ArtsContainer>
    </Container>
  )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 63px;

    .subtitle{
       padding-bottom: 43px; 
       font-size: 15pt;
    }

    @media(max-width: 740px){
        text-align: center;
    }
`

const Artist = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-bottom: 63px;
    padding-top: 63px;
`

const Description = styled.div`
    max-width: 650px;
    padding-left: 63px;

    p:nth-child(1){
        font-size: 16pt;
        font-weight: 500;
    }

    p:nth-child(2){
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 10pt;
    }

    p:nth-child(3){
        font-size: 10pt;
    }

    p:nth-child(4){
        font-size: 10pt;
        padding-top: 15px;
    }

    p:nth-child(5){
        font-size: 10pt;
        padding-top: 15px;
    }

    @media(max-width: 740px){
        padding: 20px;
        text-align: center;
    }
`

const ImgArts = styled(Image)`
    width: 270px;
    height: 391.53px;
`

const ArtsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`