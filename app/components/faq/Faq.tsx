import React from 'react'
import styled from 'styled-components'
import { data } from './_data'

export default function Faq() {
    const Reponse = data.map(item => {
        return(
            <Response key={item.id}>
                <p>{item.ask}</p>
                <p>{item.response}</p>
            </Response>
        )
    })

  return (
    <Container>
        <h2>Perguntas Frequêntes</h2>
        <Asks>{ Reponse }</Asks>
    </Container>
  )
}

const Container = styled.section`
    padding-top: 40px;
    padding-bottom: 40px;
    h2 {
        text-align: center;
    }
`
const Asks = styled.div`
    @media(max-width: 740px){
        margin-left: 20px;
        margin-right: 20px;
    }
`

const Response = styled.div`
    max-width: 800px;
    margin: 15px auto;
    padding: 20px;

    background: #1E180F;
    box-shadow: 0px 4px 40px #000000;
    padding-top: 20px;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 482.52px; */

    p{
        &:nth-child(1){
            font-weight: 500;
            padding-bottom: 10px;
            color: #B2821F;
            font-size: 11pt;
        }

        &:nth-child(2){
            font-weight: 300;
            font-size: 10pt;
        }
    }
`



