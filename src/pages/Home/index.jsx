import React, { useState } from 'react';

import { Container, Card } from './styles';
import businessIcon from '../../assets/image/business-icon.png';

export default function Home() {
    const [enterprises, setEnterprises] = useState([
        {
            id: 1,
            name: 'Apodi',
            amount: 1,
        },
        {
            id: 2,
            name: 'Unimed Fortaleza',
            amount: 2,
        },
        {
            id: 3,
            name: 'Grupo Edson Queiroz',
            amount: 3,
        },
        {
            id: 4,
            name: 'M Dias Branco',
            amount: 1,
        },
        {
            id: 5,
            name: 'Aviação Princesa',
            amount: 1,
        },
        {
            id: 6,
            name: 'Libercard',
            amount: 3,
        },
        {
            id: 7,
            name: 'Unimed Ceará',
            amount: 4,
        },
    ]);
    return (
        <Container>
            {enterprises.map((enterprise) => (
                <Card key={enterprise.id} to={`/enterprise/${enterprise.id}`}>
                    <img src={businessIcon} alt={enterprise.name} />
                    <strong>{enterprise.name}</strong>
                    <span>{enterprise.amount}</span>
                </Card>
            ))}
        </Container>
    );
}
