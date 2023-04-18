import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import SilvanaPhoto from '../../../public/silvana-forwho1.png'
import { Button } from '../global/Button'
import { data } from './_data'

export default function ForWho() {
    const list = data.map(item => {
        return <p key={item.id}>{item.text}</p>
    })

  return (
    <Container id='ParaQuem'>
        <Description>
            <h2>Para quem é esse curso</h2>
            <div>{list}</div>
            <Button href='#Beneficios'>saiba mais</Button>
        </Description>
        <Img src={SilvanaPhoto} alt='Foto da Artista Silvana Oliveira' />
    </Container>
  )
}

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 133px;
    margin-bottom: 133px;
    @media(max-width: 740px){
        flex-direction: column-reverse;
        margin-top: 23px;
        margin-bottom: 23px;
    }
`

const Img = styled(Image)`
    width: 350px;
    height: 466.66px;
    margin-left: 80px;
    @media(max-width: 740px){
        width: 250px;
        height: 333.33px;
        margin-left: 0px;
        margin-bottom: 30px;
        margin-top: 50px;
    }
`

const Description = styled.div`
    max-width: 430px;

    h2 {
        padding-bottom: 20px;
    }

    p {
        max-width: 300px;
        padding-top: 14px;
    }

    div{
        padding-bottom: 30px;
    }

    @media(max-width: 740px){
        a {
            margin-left: 0;
            margin-right: 0;
            text-align: center;
        }
    }
`