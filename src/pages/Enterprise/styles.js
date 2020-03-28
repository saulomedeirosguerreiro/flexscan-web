import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    margin: 20px 20px;

    div {
        strong {
            color: ${darken(0.2, '#999')};
        }
        button {
            background: none;
            border: none;

            svg {
                color: ${darken(0.2, '#BB86FC')};
            }
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Pagination = styled.div`
    align-self: center;
    a {
        color: #999;
        padding: 8px 16px;
    }

    a.active {
        background-color: ${darken(0.2, '#BB86FC')};
        color: white;
        border-radius: 5px;
    }

    a:hover:not(.active) {
        background-color: #ddd;
        border-radius: 5px;
    }
`;
