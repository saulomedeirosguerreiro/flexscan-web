import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';

import { GoBackLink } from './styles';

export default function GoBack({ to }) {
    return (
        <GoBackLink to={to}>
            <FaChevronLeft color="#008500" size={30} />
            <strong>Voltar</strong>
        </GoBackLink>
    );
}
