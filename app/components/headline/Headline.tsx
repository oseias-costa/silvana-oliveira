import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import SilvanaPhoto from '../../../public/silvana-headline.png'
import SilvanaLogo from '../../../public/logo-silvana.png'
import { Button } from '../global/Button'

export default function Headline() {
  return (
    <Container>
        <div>
            <Img src={SilvanaPhoto} alt='' />
        </div>
        <div>
            <Description>
                <Logo src={SilvanaLogo} alt='Logo Artista Silvana Oliveira' />
                <h2>EXPLORE SUA CRIATIVIDADE</h2>
                <h1>Pinte lindas  telas impressionistas com o curso on-line</h1>
                <strong>Silvana Oliveira</strong>
                <p>Descubra os segredos da pintura com espátula, nos traços soltos e foco na liberdade</p>
                <Button>Quero Aprender</Button>
            </Description>
        </div>
    </Container>
  )
}

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
const Img = styled(Image)`
    width: 450px;
    height: 511px;
    @media(max-width: 740px){
        width: 350px;
        height: 398px;
    }
`

const Description = styled.div`
    max-width: 430px;
    
    h2 {
        font-size: 18px;
    }
    p {
        font-size: 14px;
        padding-top: 18px;
        padding-bottom: 18px;
    }
    @media(max-width: 740px){
        text-align: center;
        position: relative;
        bottom: 70px;
    }
`

const Logo = styled(Image)`
    width: 150px;
    height: 85px;
`