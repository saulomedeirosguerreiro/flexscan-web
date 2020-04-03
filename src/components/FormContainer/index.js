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
            background: #5eb81e;
            font-weight: bold;
            height: 30px;
            margin-top: 5px;
        }

        fieldset {
            display: flex;
            padding: 10px;

            select {
                width: 100%;
            }
            div {
                width: 100%;
                display: flex;
                justify-content: flex-end;

                button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 25px;
                    height: 25px;
                }
            }
        }
    }
`;
