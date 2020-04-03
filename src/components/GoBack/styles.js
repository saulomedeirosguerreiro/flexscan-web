import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
    display: flex;
    align-items: center;
    margin: 20px;

    strong {
        font-size: 18px;
        color: #2f8f03;
    }
`;
