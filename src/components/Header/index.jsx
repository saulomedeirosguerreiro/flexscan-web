import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBattleNet } from 'react-icons/fa';
import { Container, Content, CurrentPageContainer } from './styles';

export default function Header() {
    const location = useLocation();

    function getCurrentPageName(path) {
        switch (path) {
            case '/':
                return 'Página Inicial';
            case '/enterprise':
                return 'Empresas';
            case '/service':
                return 'Serviços';
            case '/dashboard':
                return 'Dashboard';
            case '/enterprise/create':
                return 'Nova Empresa';
            case '/service/create':
                return 'Novo Serviço';
            default:
                if (path.includes('edit')) {
                    if (path.includes('enterprise')) return 'Editar Empresa';
                    if (path.includes('service')) return 'Editar Empresa';
                }
                return 'Detalhado';
        }
    }

    const currentPageName = useMemo(
        () => getCurrentPageName(location.pathname),
        [location.pathname]
    );

    return (
        <Container>
            <Content>
                <CurrentPageContainer>
                    <FaBattleNet color="#000" size={30} />
                    <h2>{currentPageName}</h2>
                </CurrentPageContainer>
                <nav>
                    <Link to="/">PÁGINA INICIAL</Link>
                    <Link to="/enterprise">EMPRESAS</Link>
                    <Link to="/service">SERVIÇOS</Link>
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>
            </Content>
        </Container>
    );
}
