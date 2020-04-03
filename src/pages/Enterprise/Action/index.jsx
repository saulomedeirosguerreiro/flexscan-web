import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAdd, MdEdit } from 'react-icons/md';
import { FaTrashAlt, FaEdit, FaAngleDoubleRight } from 'react-icons/fa';
import FormContainer from '../../../components/FormContainer';
import GoBack from '../../../components/GoBack';
import ModelTable from '../../../components/ModelTable';

import { Container } from './styles';

export default function CreateEnterprise({ match }) {
    const { id } = match.params;

    const isEdit = !!id;

    const [services, setServices] = useState([
        {
            id: 1,
            name: 'Flexuc',
            endpoint: 'http://127.0.0.1:5340/teste',
        },
        {
            id: 2,
            name: 'FlexChannel',
            endpoint: 'http://127.0.0.1:5040/teste',
        },
        {
            id: 3,
            name: 'GoGreen',
            endpoint: 'http://127.0.0.1:5040/teste',
        },
        {
            id: 4,
            name: 'Flexuc',
            endpoint: 'http://127.0.0.1:5240/teste',
        },
        {
            id: 5,
            name: 'Flexuc',
            endpoint: 'http://127.0.0.1:5040/teste',
        },
        {
            id: 6,
            name: 'FlexChannel',
            endpoint: 'http://127.0.0.1:5000/teste',
        },
    ]);

    function onDelete(identifier) {
        setServices(services.filter((service) => service.id !== identifier));
    }

    function handleSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <GoBack to="/enterprise" />
            <Container>
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
                        <fieldset>
                            <legend>Serviço:</legend>
                            <label htmlFor="service">Name</label>
                            <select id="service" name="service">
                                <option value="Flexuc">Flexuc</option>
                                <option value="FlexChannel">FlexChannel</option>
                                <option value="GoGreen">GoGreen</option>
                            </select>
                            <label htmlFor="ip">IP</label>
                            <Input name="ip" id="ip" type="text" size="50" />
                            <div>
                                <button type="button">
                                    {isEdit ? (
                                        <MdEdit color="#5eb81e;" size={20} />
                                    ) : (
                                        <MdAdd color="#5eb81e;" size={20} />
                                    )}
                                </button>
                            </div>
                        </fieldset>
                        <button type="submit">
                            {isEdit ? 'Editar' : 'Criar'}
                        </button>
                    </Form>

                    <FaAngleDoubleRight color="#008500" size={30} />
                    <ModelTable>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>IP</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service) => (
                                <tr key={service.id}>
                                    <td>{service.name}</td>
                                    <td>{service.endpoint}</td>
                                    <td>
                                        <button type="button">
                                            <FaEdit color="#008500" size={20} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => onDelete(service.id)}
                                        >
                                            <FaTrashAlt
                                                color="#008500"
                                                size={20}
                                            />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </ModelTable>
                </FormContainer>
            </Container>
        </>
    );
}
