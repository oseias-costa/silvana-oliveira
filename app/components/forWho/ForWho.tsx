import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import SilvanaPhoto from '../../../public/forwho-final.png'
import { Button } from '../global/Button'
import { data } from './_data'

export default function ForWho() {
    const list = data.map(item => {
        return <p key={item.id}>{item.text}</p>
    })

  return (
    <Container>
        <Description>
            <h2>Para quem é esse curso</h2>
            <div>{list}</div>
            <Button>saiba mais</Button>
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
    margin-top: 63px;
    @media(max-width: 740px){
        flex-direction: column-reverse;
        margin-top: 23px;
    }
`

const Img = styled(Image)`
    width: 500px;
    height: 446px;
    @media(max-width: 740px){
        width: 350px;
        height: 312.5px;
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