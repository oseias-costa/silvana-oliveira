import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import SpatulaImg from '../../../public/spatula-image.png'

export default function Spatula() {
  return (
    <Container>
        <Img src={SpatulaImg} alt='' />
        <div>
            <p>Por quê pintar com espátula?</p>
            <p>Pela sensação de liberdade que a técnica proporciona nos traços soltos e movimentos gestuais deixando a pintura mais impressionista com camadas grossas de tintas, causando uma sensação de realidade.</p>
            <p>Especializada em pintura à óleo com espátula, há dez anos abandonou de vez os pincéis, fazendo pinturas com traços soltos e gestuais, por gostar do Impressionismo e da liberdade que a técnica de pintar com espátula proporciona.</p>
            <p>Com todo esse tempo atuando como artista profissional e professora de pintura, desenvolveu uma metodologia que tem ajudado alunos de todas as idades a despertarem seu lado artístico e desfrutar desse fascinante mundo das artes. Com este método até mesmo iniciantes que realmente desejam aprender, podem pintar o que quiserem de maneira objetiva, clara e didática.
Meu objetivo é ajudar o aluno a acabar completamente com o bloqueio que impede pintores iniciantes ou experientes, de potencializarem suas capacidades e deslancharem na pintura com autonomia e de forma prazerosa.</p>
        </div>

    </Container>
  )
}

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #F4EEEE;
    margin-top: 73px;
    padding-top: 73px;
    padding-bottom: 73px;

    div > p{
        color: #19130B;
        padding: 20px;
        max-width: 500px;
    }

    div > p:nth-child(1){
        font-weight: 500;
        font-size: 24px;
        padding-bottom: 20px;
    }
    div > p:nth-child(2){
        max-width: 500px;
    }
`

const Img = styled(Image)`
    width: 550px;
    height: 412.5px;

    @media(max-width: 740px) {
        width: 350px;
        height: 263.1px;
    }
`

