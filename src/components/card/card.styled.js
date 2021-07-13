import styled, { keyframes } from 'styled-components';
import { flipInY } from 'react-animations'; import { colors } from '../../colors';

export const Container = styled.div`
    padding: 2rem;
    background-color: ${colors.primary};
    border-color: ${colors.secondary};
    border-style: solid;
    border-width: 0.3rem;
    border-radius: 10%;
    margin: 0.5rem;
    perspective: 1000px;
    height: 10rem;
    width: 10rem;
    transition: all 1s ease;

    &:hover {
        animation-duration: 0.1s;
        background-color: rgb(74, 87, 74);
        
        img{
            transform: scale(1.1);

        }
    }

    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 9rem;
        transition: all 1s ease;
    }
    div{
        transition: all 1s ease;
        font-size: 1.5rem;
        text-transform: capitalize;
        text-align: center;
        color: ${colors.darkPurple};

        div {
            font-size: 1rem;
        }

    }
`;

export const ContainerFlipped = styled.div`
    padding: 2rem;
    background-color: ${colors.primary};
    border-color: ${colors.secondary};
    border-style: solid;
    border-width: 0.3rem;
    border-radius: 10%;
    margin: 0.5rem;
    perspective: 1000px;
    height: 10rem;
    width: 10rem;
    animation: 0.5s ${keyframes`${flipInY}`};
    
    div {
        transition: 1s ease;
        &:first-child{
            position: absolute;
            transition: 1s ease;
            font-size: 1.5rem;
            text-align: center;
            color: ${colors.darkPurple};

            img {
                position: absolute;
                opacity: 0.2;
                display: inline-table;
                width: 10rem;
            }
        }
        text-align: justify;
        text-transform: capitalize;

    }

    &:hover {
        animation-duration: 0.1s;
        background-color: rgb(74, 87, 74);
        
        img{
            transform: scale(1.1);

        }
    }

    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 9rem;
        transition: 1s ease;
    }

`;
