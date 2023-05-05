"use client";
import styled from "styled-components"
import About from "./components/about/About";
import Benefits from "./components/benefits/Benefits";
import ForWho from "./components/forWho/ForWho";
import Headline from "./components/headline/Headline";
import Modules from "./components/modules/Modules";
import Price from "./components/price/Price";
import Spatula from "./components/spatula/Spatula";
import Testimony from "./components/testimony/Testimony";
import Video from "./components/video/Video";
import Warranty from "./components/warranty/Warranty";

export default function Home() {
  return (
    <Container>
      <Headline />
      <Video />
      <ForWho />
      <Benefits />
      <Spatula />
      <Modules />
      <Testimony />
      <About />
      <Price />
      <Warranty />
    </Container>
  )
}

const Container = styled.main`

 
`