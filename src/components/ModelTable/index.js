import styled from 'styled-components';
import { darken } from 'polished';

export default styled.table`
    border-collapse: collapse;
    width: 70%;
    margin: 20px 20px;

    td,
    th {
        text-align: left;
        padding: 8px;
    }

    td {
        color: ${darken(0.2, '#999')};
        border-bottom: 1px solid #dddddd;

        button {
            background: none;
            border: none;
        }
    }

    th {
        color: ${darken(0.2, '#BB86FC')};
        border-bottom: 3px solid #dddddd;
    }

    svg {
        margin: 0px 20px;
    }
`;
