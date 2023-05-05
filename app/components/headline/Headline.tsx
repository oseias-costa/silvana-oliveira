import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import SilvanaPhoto from '../../../public/silvana-headline-final.png'
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
                <Button target='_blank' href='https://pay.hotmart.com/X79643749S?checkoutMode=10&_hi=eyJjaWQiOiIxNjgwODk2NzY0MzQwNjQ2Mjg1NzUwMDQ5NDM5NTAwIiwiYmlkIjoiMTY4MDg5Njc2NDM0MDY0NjI4NTc1MDA0OTQzOTUwMCIsInNpZCI6IjZiM2JhM2VkMmRkODQyOGRiZDAzMmJkMDlmZjMwNTRkIn0%3D.1683243737280&bid=1683243739469'>Quero Aprender</Button>
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
    width: 550px;
    height: 491px;
    position: relative;
    top: 40px;
    left: 30px;
    z-index: -1;
    @media(max-width: 740px){
        top: 20px;
        left: 0px;
        width: 350px;
        height: 312.5px;
    }
`

const Description = styled.div`
    max-width: 430px;
    position: relative;
    right: 30px;
    
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
        bottom: 30px;
        right: 0px;
    }
`

const Logo = styled(Image)`
    width: 150px;
    height: 85px;
`