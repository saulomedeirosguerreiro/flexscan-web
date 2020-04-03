import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    margin: 20px 20px;

    h1 {
        opacity: 0.7;
        text-align: center;
    }
`;

export const ContentContainer = styled.div`
    margin: 20px 20px;
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    padding: 10px;
`;
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: ${darken(0.2, '#5eb81e')};
    box-shadow: 2px 2px #5eb81e;
    padding: 20px;
    color: #fff;
    font-size: 14px;
    border-radius: 10px;

    h3 {
        color: #5eb81e;
    }
`;

export const Content = styled.div`
    opacity: 0.7;
    margin: 10px 5px;
    display: grid;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    grid-template-columns: repeat(2, 1fr);
`;
