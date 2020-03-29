import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import FormContainer from '../../../components/FormContainer';
import { GoBackContainer } from './styles';

export default function CreateEnterprise() {
    function handleSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <GoBackContainer>
                <FaChevronLeft color="#3700B3" size={30} />
                <Link to="/enterprise">
                    <strong>Voltar</strong>
                </Link>
            </GoBackContainer>
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <legend>
                        <h1>Empresa</h1>
                    </legend>
                    <label htmlFor="name">Nome</label>
                    <Input name="name" id="name" type="text" size="50" />
                    <label htmlFor="description">Descrição</label>
                    <Input
                        name="description"
                        id="description"
                        type="text"
                        size="50"
                    />
                    <button type="submit">Criar</button>
                </Form>
            </FormContainer>
        </>
    );
}
