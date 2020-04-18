import React, { useState, useEffect } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ModelTable from '../../components/ModelTable';
import { Container, Content, Pagination } from './styles';
import api from '../../services/api';

export default function Service() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        async function loadServices() {
            const response = await api.get('/services');
            setServices(response.data);
        }

        loadServices();
    }, []);

    async function onDelete(id) {
        try {
            await api.delete(`/services/${id}`);
            setServices(services.filter((service) => service._id !== id));
            toast.success('Serviço Removido com Sucesso');
        } catch (err) {
            toast.error('Falha na Remoção do Serviço');
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
                        {services.map((service) => (
                            <tr key={service._id}>
                                <td>{service.name}</td>
                                <td>{service.description}</td>
                                <td>
                                    <Link to={`/service/edit/${service._id}`}>
                                        <FaEdit color="#008500" size={20} />
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => onDelete(service._id)}
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
                <Link to="/service/create">
                    <strong>Criar Novo Serviço</strong>
                    <MdAddCircle size={80} />
                </Link>
            </div>
        </Container>
    );
}
