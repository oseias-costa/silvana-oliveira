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

