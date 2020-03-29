import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import FormContainer from '../../../components/FormContainer';
import { GoBackContainer } from './styles';

export default function CreateApp() {
    function handleSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <GoBackContainer>
                <FaChevronLeft color="#3700B3" size={30} />
                <Link to="/app">
                    <strong>Voltar</strong>
                </Link>
            </GoBackContainer>
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <legend>
                        <h1>Aplicação</h1>
                    </legend>
                    <label htmlFor="name">Nome</label>
                    <Input name="name" id="name" type="text" size="50" />
                    <label htmlFor="ip">Descrição</label>
                    <Input name="ip" id="ip" type="text" size="50" />
                    <label htmlFor="enterprise">Empresa</label>
                    <select id="enterprise" name="enterprise">
                        <option value="M diasBranco">M dias Branco</option>
                        <option value="Unimed Fortaleza">
                            Unimed Fortaleza
                        </option>
                        <option value="Libercard">Libercard</option>
                        <option value="Unimed Ceará">Unimed Ceará</option>
                    </select>
                    <button type="submit">Criar</button>
                </Form>
            </FormContainer>
        </>
    );
}
