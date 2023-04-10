import React from 'react'
import styled from 'styled-components'
import { Button } from '../global/Button'
import Methods from '../../../public/methods.png'
import Image from 'next/image'

export default function Price() {
  return (
    <Container>
        <h2>Investimento</h2>
        <p>por apenas em 12x de :</p>
        <h2>R$ 19,95</h2>
        <p>ou R$ 199,90 à vista</p>
        <p>Toque no botão abaixo e aproveite essa oportunidade enquanto ela está disponível</p>
        <Button>Quero Aprender Hoje</Button>
        <Img src={Methods} alt='Métodos de Pagamento Curso Silvia Oliveira' />
    </Container>
  )
}

const Container = styled.section`
  padding-top: 73px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2:nth-child(1) {
    font-size: 32px;
    padding-bottom: 43px;
  }

  h2:nth-child(3) {
    font-size: 48px;
  }

  p:nth-child(4) {
    padding-bottom: 43px;
  }

  p:nth-child(5) {
    padding-bottom: 8px;
    max-width: 400px;
    text-align: center;
  }
`

const Img = styled(Image)`
  width: 400px;
  height: 34.5px;
  margin-top: 10px;

  @media(max-width: 740px){
    width: 300px;
    height: 25.87px;
    margin-top: 10px;
  }

`