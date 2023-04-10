import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import WarrantyIcon from '../../../public/warranty.png'

export default function Warranty() {
  return (
    <Container>
        <Icon>
            <IconImg src={WarrantyIcon} alt='' />
            <h2>garantia</h2>
            <h2>7 dias</h2>
        </Icon>
        <Description>
            <p>risco zero por 7 dias</p>
            <p>Se dentro de 7 dias você solicitar reembolso, eu te envio o dinheiro de volta na hora! Isso significa que você pode entrar, assistir todas as aulas, e se mesmo assim ainda achar que este treinamento não vai impactar de forma positiva a sua vida, poderá enviar um e-mail e solicitar o reembolso sem qualquer justificativa que eu devolverei todo o seu investimento! Dou essa garantia porque tenho certeza que todo esse conhecimento poderá dar você habilidades necessárias para pintar lindas telas.</p>
        </Description>
    </Container>
  )
}

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-top: 73px;
    padding-bottom: 43px;
`

const Icon = styled.div`
    text-align: center;
`

const IconImg = styled(Image)`
    width: 72px;
    height: 72px;
`

const Description = styled.div`
    max-width: 750px;
    padding-left: 46px;

    p:nth-child(1) {
        font-size: 16pt;
        padding-bottom: 18px;
    }
    p:nth-child(2) {
            font-size: 10pt;        
        }

    @media(max-width: 740px) {
        padding: 20px;
        text-align: center;
    }
`