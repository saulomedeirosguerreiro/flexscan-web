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

export const Content = styled.div``;
