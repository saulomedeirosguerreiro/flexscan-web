import React, { useState, useEffect } from 'react';

import { Container, Card } from './styles';
import businessIcon from '../../assets/image/business-icon.png';
import api from '../../services/api';

export default function Home() {
    const [enterprises, setEnterprises] = useState([]);

    useEffect(() => {
        async function loadEnterprises() {
            const response = await api.get('/enterprises');
            const data = response.data.map((enterprise) => ({
                ...enterprise,
                amount: enterprise.services.length,
            }));

            setEnterprises(data);
        }

        loadEnterprises();
    }, []);

    return (
        <Container>
            {enterprises.map((enterprise) => (
                <Card key={enterprise._id} to={`/enterprise/${enterprise._id}`}>
                    <img src={businessIcon} alt={enterprise.name} />
                    <strong>{enterprise.name}</strong>
                    <span>{enterprise.amount}</span>
                </Card>
            ))}
        </Container>
    );
}
