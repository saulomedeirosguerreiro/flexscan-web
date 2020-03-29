import styled from 'styled-components';
import { darken } from 'polished';

export default styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    max-height: 900px;

    form {
        display: flex;
        flex-direction: column;

        h1 {
            opacity: 0.4;
        }

        label {
            margin: 5px 0px;
            color: ${darken(0.2, '#999')};
        }

        input {
            margin-bottom: 5px;
        }

        button {
            color: #fff;
            background: ${darken(0.2, '#BB86FC')};
            font-weight: bold;
            height: 30px;
            margin-top: 5px;
        }
    }
`;
