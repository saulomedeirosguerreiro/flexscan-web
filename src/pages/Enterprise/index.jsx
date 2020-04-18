import React, { useState, useEffect } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ModelTable from '../../components/ModelTable';
import api from '../../services/api';
import { Container, Pagination, Content } from './styles';

export default function Enterprise() {
    const [enterprises, setEnterprises] = useState([]);

    useEffect(() => {
        async function loadEnterprises() {
            const response = await api.get('/enterprises');
            setEnterprises(response.data);
        }

        loadEnterprises();
    }, []);

    async function onDelete(id) {
        try {
            await api.delete(`/enterprises/${id}`);
            setEnterprises(
                enterprises.filter((enterprise) => enterprise._id !== id)
            );
            toast.success('Empresa Removida com Sucesso');
        } catch (err) {
            toast.error('Falha na Remoção da Empresa');
        }
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
                            <tr key={enterprise._id}>
                                <td>{enterprise.name}</td>
                                <td>{enterprise.description}</td>
                                <td>
                                    <Link
                                        to={`/enterprise/edit/${enterprise._id}`}
                                    >
                                        <FaEdit color="#008500" size={20} />
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => onDelete(enterprise._id)}
                                    >
                                        <FaTrashAlt color="#008500" size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </ModelTable>
                <Pagination>
                    <a href="substituir" className="active">
                        1
                    </a>
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
