import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../global/Button'
import { data } from './_data'
import Quotation from '../../../public/quotation.png'
import Image from 'next/image'

export default function Testimony() {

    const blocks = data.map(item => {
        return(
            <Block key={item.id}>
                <Image src={Quotation} alt='Depoimentos do Curso Silvana Oliveira' width={64} height={64} />
                <p>{item.content}</p>
                <p>{item.author}</p>
            </Block>
        )
    })
  return (
    <Container>
        <p>o que os alunos falam do curso</p>
        <Blocks>{blocks}</Blocks>
        <Button  href='https://pay.hotmart.com/X79643749S?checkoutMode=10&_hi=eyJjaWQiOiIxNjgwODk2NzY0MzQwNjQ2Mjg1NzUwMDQ5NDM5NTAwIiwiYmlkIjoiMTY4MDg5Njc2NDM0MDY0NjI4NTc1MDA0OTQzOTUwMCIsInNpZCI6IjZiM2JhM2VkMmRkODQyOGRiZDAzMmJkMDlmZjMwNTRkIn0%3D.1683243737280&bid=1683243739469' target='_blank'>Quero começar hoje</Button>
    </Container>
  )
}

const Container = styled.section`
    margin: 0 auto;
    background-color: #F4EEEE;
    padding-top: 73px;
    padding-bottom: 73px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        color: #19130B;
    }

    p:nth-child(1){
        font-weight: 500;
        font-size: 24px;
        margin: 20px;
    }
`

const Blocks = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 26px;
`

const Block = styled.div`
    max-width: 350px;
    margin: 20px;

    p{
        color: #19130B;
    }

    p:nth-child(2){
        font-weight: 300;
        font-size: 10pt;
        padding-bottom: 10px;
        padding-top: 10px;
    }

    p:nth-child(3){
        font-weight: 700;
    }
`