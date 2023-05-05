import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { data } from './_data'

export default function Modules() {
    const Items = data.map(item => {
        return(
            <Module key={item.id}>
                <div>
                    <p>Modulo {item.id}</p>
                    <h3>{item.title}</h3>
                    <div>
                        { item.text.map((textItem, index) => {
                                return <p className='description' key={index}>{textItem}</p>
                            }) 
                        }
                    </div>
                </div>
                <Img src={item.image} alt={item.title} />
            </Module>
        )
    })

  return (
    <Container>
        <h2>O QUE VOCE VAI APRENDER</h2>
        <Learn>{Items}</Learn>
    </Container>
  )
}

const Container = styled.section`
    margin-bottom: 60px;
    margin-top: 83px;
    text-align: center;
`

const Module = styled.div`
    background: #1E180F;
    box-shadow: 0px 4px 40px #000000;
    text-align: center;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 482.52px;
    margin: 10px;
    max-width: 250px;
    .description {
        font-size: 10pt;
    }

    h3 {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 20px;
        padding-right: 20px;
    }
`

const Learn = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 43px;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;

    @media(max-width: 740px){
        
    }
`

const Img = styled(Image)`
    width: 250px;
    height: 331.52px;
    padding-top: 15px;
    margin-bottom: 0;
`