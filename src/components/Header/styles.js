import styled from 'styled-components';

export const Container = styled.header`
    height: 64px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
    background: #2f8f03;
    nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 64px;

        a {
            margin: 0 20px;
            font-weight: bold;
            color: #fff;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CurrentPageContainer = styled.div`
    background: #fff;
    opacity: 0.5;
    margin: 0.5em 1em 1em 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 200px;
    border-bottom-right-radius: 90px;
    border-top-right-radius: 90px;

    svg {
        margin-right: 10px;
    }
`;
