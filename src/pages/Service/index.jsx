import React, { useState } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ModelTable from '../../components/ModelTable';
import { Container, Content, Pagination } from './styles';

export default function Service() {
    const [services, setServices] = useState([
        {
            id: 1,
            name: 'Flexuc',
            description: 'uma pequena descricao do serviço',
        },
        {
            id: 2,
            name: 'FlexChannel',
            description: 'uma pequena descricao do serviço',
        },
        {
            id: 3,
            name: 'GoGreen',
            description: 'uma pequena descricao do serviço',
        },
        {
            id: 4,
            name: 'Flexuc',
            description: 'uma pequena descricao do serviço',
        },
        {
            id: 5,
            name: 'Flexuc',
            description: 'uma pequena descricao do serviço',
        },
        {
            id: 6,
            name: 'Flexuc',
            description: 'uma pequena descricao do serviço',
        },
    ]);

    function onDelete(id) {
        setServices(services.filter((service) => service.id !== id));
    }

    return (
        <Container>
            <Content>
                <ModelTable>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => (
                            <tr key={service.id}>
                                <td>{service.name}</td>
                                <td>{service.description}</td>
                                <td>
                                    <Link to="/service/edit/1">
                                        <FaEdit color="#008500" size={20} />
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => onDelete(service.id)}
                                    >
                                        <FaTrashAlt color="#008500" size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </ModelTable>
                <Pagination>
                    <a href="http://www.google.com.br">1</a>
                    <a href="http://www.google.com.br" className="active">
                        2
                    </a>
                    <a href="http://www.google.com.br">3</a>
                    <a href="http://www.google.com.br">4</a>
                    <a href="http://www.google.com.br">5</a>
                    <a href="http://www.google.com.br">6</a>
                </Pagination>
            </Content>
            <div>
                <Link to="/service/create">
                    <strong>Criar Novo Serviço</strong>
                    <MdAddCircle size={80} />
                </Link>
            </div>
        </Container>
    );
}
