import React, { useState } from 'react';

import { Container, ContentContainer, Card, Content } from './styles';
import GoBack from '../../../components/GoBack';

export default function Detailed({ match }) {
    const { id } = match.params;

    const [services, setServices] = useState([
        {
            id: 1,
            name: 'Flexuc',
            version: '1.0.2',
            stability: 'Beta',
            date: '10/01/20',
        },
        {
            id: 2,
            name: 'FlexChannel',
            version: '1.3.2',
            stability: 'Beta',
            date: '09/04/20',
        },
        {
            id: 3,
            name: 'GoGreen',
            version: '1.7.2',
            stability: 'Beta',
            date: '05/02/20',
        },
        {
            id: 4,
            name: 'Flexuc',
            version: '1.0.2',
            stability: 'Alfa',
            date: '10/04/20',
        },
        {
            id: 5,
            name: 'FlexChannel',
            version: '1.3.2',
            stability: 'Beta',
            date: '10/04/20',
        },
        {
            id: 6,
            name: 'Flexia',
            version: '1.0.2',
            stability: 'Alfa',
            date: '1/02/ 20',
        },
    ]);
    return (
        <Container>
            <GoBack to="/" />
            <h1>Nome da Empresa</h1>
            <ContentContainer>
                {services.map((service) => (
                    <Card key={service.id}>
                        <h3>{service.name}</h3>
                        <Content>
                            <strong>Versão</strong>
                            <span>{service.version}</span>
                            <strong>Estabilidade</strong>
                            <span>{service.stability}</span>
                            <strong>Criado em</strong>
                            <span>{service.date}</span>
                        </Content>
                    </Card>
                ))}
            </ContentContainer>
        </Container>
    );
}
