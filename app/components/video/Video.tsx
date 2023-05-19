"use client;"
import React from 'react'
import styled from 'styled-components'

export default function Video() {
  return (
    <Container>
        <Iframe
        src="https://www.youtube.com/embed/5gD4NGwupiM"
        title="Vídeo de Apresentação curso Silvana Oliveira"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen
        ></Iframe>
        <h2>Assista o Vídeo clicando acima</h2>
    </Container>
    
  )
}

const Container = styled.section`
    padding-top: 110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      padding-top: 20px;
    }

    @media(max-width: 740px) {
        padding-top: 65px;
    }
`

const Iframe = styled.iframe`
    width: 560px;
    height: 315px;

    @media(max-width: 740px) {
        width: 350px;
        height: 196.88px;
    }
`
