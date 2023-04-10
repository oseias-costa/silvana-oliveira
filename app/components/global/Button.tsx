import styled from "styled-components";

export const Button = styled.a`
    background: var(--golden);
    padding-left: 26px;
    padding-right: 26px;
    padding-top: 8px;
    padding-bottom: 8px;
    color: #000;
    font-size: 14px;
    @media(max-width: 740px){
        display: block;
        margin-left: 20px;
        margin-right: 20px;
        padding-top: 13px;
        padding-bottom: 13px;
        font-size: 18px;
  }
`