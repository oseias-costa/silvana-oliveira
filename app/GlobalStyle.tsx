"use client";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  border: none;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  background-color: #19130B;
}

:root {
  --golden: linear-gradient(0deg, rgba(170, 170, 173, 0.2), rgba(170, 170, 173, 0.2)), linear-gradient(270deg, #B2821F 49.81%, #E9CD4C 82.32%);
}

h1 {
  color: #D0D4DC;
  font-weight: 700;
  font-size: 32px;
  @media(max-width: 740px){
    font-size: 28px;
  }
}

h2 {
  background: linear-gradient(0deg, rgba(170, 170, 173, 0.2), rgba(170, 170, 173, 0.2)), linear-gradient(270deg, #B2821F 49.81%, #E9CD4C 82.32%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 500;
}

h3 {
  background: linear-gradient(0deg, rgba(170, 170, 173, 0.2), rgba(170, 170, 173, 0.2)), linear-gradient(270deg, #B2821F 49.81%, #E9CD4C 82.32%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700;
}

p {
  color: #D0D4DC;
  font-weight: 300;
  font-size: 15px;
}

strong {
  background: linear-gradient(0deg, rgba(170, 170, 173, 0.2), rgba(170, 170, 173, 0.2)), linear-gradient(270deg, #B2821F 49.81%, #E9CD4C 82.32%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700;
  font-size: 24px;
  font-size: 32px;
  @media(max-width: 740px){
    font-size: 28px;
  }
}
`