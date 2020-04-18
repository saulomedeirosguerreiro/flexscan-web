import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import FormContainer from '../../../components/FormContainer';
import GoBack from '../../../components/GoBack';
import api from '../../../services/api';

export default function ActionService({ match }) {
    const { id } = match.params;
    const history = useHistory();
    const isEdit = !!id;
    const [serviceName, setServiceName] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    useEffect(() => {
        async function loadService() {
            if (id) {
                const response = await api.get(`/services/${id}`);
                const { name, description } = response.data;
                setServiceName(name);
                setServiceDescription(description);
            }
        }
        loadService();
    }, [id]);

    async function handleSubmit(data, { resetForm }) {
        try {
            if (isEdit) {
                await api.put(`/services/${id}`, data);
            } else {
                await api.post('/services', data);
            }
            toast.success(
                `Serviço ${isEdit ? 'Editado' : 'Criado'} com Sucesso`
            );
            if (!isEdit) resetForm();
            history.goBack();
        } catch (err) {
            toast.error(
                `Não foi possível  ${isEdit ? 'Editar' : 'Criar'} Serviço`
            );
        }
    }

    return (
        <>
            <GoBack to="/service" />
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <legend>
                        <h1>Serviço</h1>
                    </legend>
                    <label htmlFor="name">Nome</label>
                    <Input
                        name="name"
                        id="name"
                        type="text"
                        size="50"
                        required
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                    />
                    <label htmlFor="description">Descrição</label>
                    <Input
                        name="description"
                        id="description"
                        type="text"
                        size="50"
                        value={serviceDescription}
                        onChange={(e) => setServiceDescription(e.target.value)}
                    />
                    <button type="submit">{isEdit ? 'Editar' : 'Criar'}</button>
                </Form>
            </FormContainer>
        </>
    );
}

ActionService.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }).isRequired,
    }).isRequired,
};
