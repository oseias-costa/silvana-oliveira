import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { data } from './_data'

export default function Benefits() {
    const benefitsItems = data.map(item => {
        return (
            <Item key={item.id}>
                <Icon src={item.image} alt={item.text} />
                <p>{item.text}</p>
            </Item>
        )
    })
  return (
    <Container id='Beneficios'>
        <h2>Quais os Benefícios da pintura</h2>
        <List>{benefitsItems}</List>
    </Container>
  )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 63px;

    h2 {
        padding-bottom: 23px;
    }
    @media(max-width: 740px){
        text-align: center;
        padding: 20px;

        h2 {
        padding-bottom: 3px;
        }
    }
    `

const List = styled.div`

`

const Item = styled.div`
    display: flex;
    padding-top: 43px;
    
    p {
        max-width: 600px;
        padding-left: 43px; 
    }
    @media(max-width: 740px){
        flex-direction: column;
        text-align: center;
        align-items: center;
        padding-top: 63px;

        p {
        max-width: 600px;
        padding-left: 0px; 
        padding-top: 20px; 
        }
    }
`

const Icon = styled(Image)`
    width: 86px;
    height: 86px;
`