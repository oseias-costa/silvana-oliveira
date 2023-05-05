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
        <h2>R$ 67,49</h2>
        <p>ou R$ 674,90 à vista</p>
        <p>Toque no botão abaixo e aproveite essa oportunidade enquanto ela está disponível</p>
        <Button  href='https://pay.hotmart.com/X79643749S?checkoutMode=10&_hi=eyJjaWQiOiIxNjgwODk2NzY0MzQwNjQ2Mjg1NzUwMDQ5NDM5NTAwIiwiYmlkIjoiMTY4MDg5Njc2NDM0MDY0NjI4NTc1MDA0OTQzOTUwMCIsInNpZCI6IjZiM2JhM2VkMmRkODQyOGRiZDAzMmJkMDlmZjMwNTRkIn0%3D.1683243737280&bid=1683243739469' target='_blank'>Quero Aprender Hoje</Button>
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