import React, { useState } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ModelTable from '../../components/ModelTable';
import { Container, Pagination, Content } from './styles';

export default function Enterprise() {
    const [enterprises, setEnterprises] = useState([
        {
            id: 1,
            name: 'Apodi',
            description: 'uma pequena descrição da empresa',
        },
        {
            id: 2,
            name: 'Unimed Fortaleza',
            description: 'uma pequena descrição da empresa',
        },
        {
            id: 3,
            name: 'Grupo Edson Queiroz',
            description: 'uma pequena descrição da empresa',
        },
        {
            id: 4,
            name: 'M Dias Branco',
            description: 'uma pequena descrição da empresa',
        },
        {
            id: 5,
            name: 'Aviação Princesa',
            description: 'uma pequena descrição da empresa',
        },
        {
            id: 6,
            name: 'Libercard',
            description: 'uma pequena descrição da empresa',
        },
        {
            id: 7,
            name: 'Unimed Ceará',
            description: 'uma pequena descrição da empresa',
        },
    ]);

    function onDelete(id) {
        setEnterprises(
            enterprises.filter((enterprise) => enterprise.id !== id)
        );
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
                        {enterprises.map((enterprise) => (
                            <tr key={enterprise.id}>
                                <td>{enterprise.name}</td>
                                <td>{enterprise.description}</td>
                                <td>
                                    <Link
                                        to={`/enterprise/edit/${enterprise.id}`}
                                    >
                                        <FaEdit color="#008500" size={20} />
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => onDelete(enterprise.id)}
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
                <Link to="/enterprise/create">
                    <strong>Criar Nova Empresa</strong>
                    <MdAddCircle size={80} />
                </Link>
            </div>
        </Container>
    );
}
