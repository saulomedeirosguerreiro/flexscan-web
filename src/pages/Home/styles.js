import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px 20px;
    display: grid;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    grid-template-columns: repeat(5, 1fr);
    padding: 10px;
`;
export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #3700b3;
    box-shadow: 2px 2px #6200ee;
    padding: 20px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    border-radius: 10px;
    height: 100%;

    img {
        border-radius: 5px;
        width: 50px;
        height: 50px;
    }

    span {
        background: #6200ee;
        padding: 8px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        font-weight: bold;
        font-size: 12px;
    }
`;
