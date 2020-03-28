import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <Link to="/">PÁGINA INICIAL</Link>
                    <Link to="/enterprise">EMPRESAS</Link>
                    <Link to="/app">APLICAÇÕES</Link>
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>
            </Content>
        </Container>
    );
}
