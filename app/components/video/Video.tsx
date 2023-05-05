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
    </Container>
    
  )
}

const Container = styled.section`
    padding-top: 110px;
    display: flex;
    justify-content: center;

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
