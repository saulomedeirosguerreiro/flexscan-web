import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import FormContainer from '../../../components/FormContainer';
import GoBack from '../../../components/GoBack';

export default function CreateApp({ match }) {
    const { id } = match.params;

    const isEdit = !!id;
    function handleSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <GoBack to="/service" />
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <legend>
                        <h1>Serviço</h1>
                    </legend>
                    <label htmlFor="name">Nome</label>
                    <Input
                        name="name"
                        id="name"
                        type="text"
                        size="50"
                        required
                    />
                    <label htmlFor="ip">Descrição</label>
                    <Input name="ip" id="ip" type="text" size="50" />
                    <button type="submit">{isEdit ? 'Editar' : 'Criar'}</button>
                </Form>
            </FormContainer>
        </>
    );
}
