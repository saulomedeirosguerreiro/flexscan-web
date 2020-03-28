import React from 'react';

import { Container, Card } from './styles';
import businessIcon from '../../assets/image/business-icon.png';

export default function Home() {
    return (
        <Container>
            <Card>
                <img src={businessIcon} alt="apodi" />
                <strong>Apodi</strong>
                <span>1</span>
            </Card>
            <Card>
                <img src={businessIcon} alt="Unimed Fortaleza" />
                <strong>Unimed Fortaleza</strong>
                <span>2</span>
            </Card>
            <Card>
                <img src={businessIcon} alt="Grupo Edson Queiroz" />
                <strong>Grupo Edson Queiroz</strong>
                <span>3</span>
            </Card>
            <Card>
                <img src={businessIcon} alt="M Dias branco" />{' '}
                <strong>M Dias branco</strong>
                <span>1</span>
            </Card>
            <Card>
                <img src={businessIcon} alt="Aviação Princesa" />
                <strong>Aviação Princesa</strong>
                <span>1</span>
            </Card>
            <Card>
                <img src={businessIcon} alt="Libercard" />
                <strong>Libercard</strong>
                <span>3</span>
            </Card>
            <Card>
                <img src={businessIcon} alt=" Unimed Ceará" />
                <strong>Unimed Ceará</strong>
                <span>4</span>
            </Card>
        </Container>
    );
}
