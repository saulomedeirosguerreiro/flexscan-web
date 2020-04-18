import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../../services/api';
import { Container, ContentContainer, Card, Content } from './styles';
import GoBack from '../../../components/GoBack';

export default function Detailed({ match }) {
    const { id } = match.params;
    const [services, setServices] = useState([]);
    const [enterpriseName, setEnterpriseName] = useState('');

    useEffect(() => {
        async function loadServices() {
            const response = await api.get(`/dashboards/card/${id}`);
            setEnterpriseName(response.data.name);
            setServices(response.data.services);
        }

        loadServices();
    }, [id]);

    return (
        <Container>
            <GoBack to="/" />
            <h1>{enterpriseName}</h1>
            <ContentContainer>
                {services.map((service) => (
                    <Card key={service._id}>
                        <h3>{service.name}</h3>
                        <Content>
                            <strong>Versão</strong>
                            <span>{service.version}</span>
                            <strong>Estabilidade</strong>
                            <span>{service.stability}</span>
                            <strong>Criado em</strong>
                            <span>{service.date}</span>
                            <strong>Descrição</strong>
                            <span>{service.description || 'N/A'}</span>
                        </Content>
                    </Card>
                ))}
            </ContentContainer>
        </Container>
    );
}

Detailed.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};
