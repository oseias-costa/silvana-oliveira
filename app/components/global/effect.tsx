import Image from 'next/image'
import styled from 'styled-components'

export const EffectIconRigth = styled(Image)<{ num: number, numHeight: number }>`
    width: 150px;
    height: 214.28px;
    position: absolute;
    top: ${props => {
        const sum = props.num + props.numHeight
        return sum + 'px'
        }
    };
    right: 0;
    @media(max-width: 740px){
        width: 80px;
        height: 114.28px;
        right: -8px;
        top: ${props => {
        const sum = props.num + props.numHeight + 20
        return sum + 'px'
        }
    };
`

export const EffectIconLeft = styled(Image)<{ num: number, numHeight: number }>`
    width: 150px;
    height: 214.28px;
    position: absolute;
    top: ${props => {
        const sum = props.num + props.numHeight
        return sum + 'px'
        }
    };
    left: -20px;
    transform: rotate(180deg);

    @media(max-width: 740px){
        width: 80px;
        height: 114.28px;
        left: -8px;
        top: ${props => {
        const sum = props.num + props.numHeight + 280
        return sum + 'px'
        }
    };
    }
`