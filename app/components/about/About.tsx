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
                <p>autodidata, se dedica a pintura há mais 30 anos, em 2006 realizou um grande sonho de ter a própria galeria de artes e a escola de pintura onde ensina alunos de todas as idades a se descobrirem nesse fascinante mundo das artes.</p>
                <p>em 2012 teve a oportunidade de expor num dos museus mais famosos do mundo, no carrosel do louvre, na frança. também representou seu estado no xvi circuito internacional de arte brasileira que aconteceu na áustria, espanha e Portugal. participou de outras exposições de destaque em berlim (alemanha), madri, barcelona (espanha), toulouse (frança), roma (Itália), Nova Iorque (EUA), montemor-0-novo e lisboa (Portugal) onde recebeu medalha de ouro.</p>
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
    max-width: 450px;
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

    @media(max-width: 740px){
        padding: 20px;
        text-align: center;
    }
`

const ImgArts = styled(Image)`
    width: 160px;
    height: 232px;
`

const ArtsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`