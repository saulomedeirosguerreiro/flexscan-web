import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { MdAdd, MdEdit } from 'react-icons/md';
import { FaTrashAlt, FaEdit, FaAngleDoubleRight, FaUndo } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import FormContainer from '../../../components/FormContainer';
import GoBack from '../../../components/GoBack';
import ModelTable from '../../../components/ModelTable';
import api from '../../../services/api';

import { Container } from './styles';

export default function ActionEnterprise({ match }) {
    const { id } = match.params;
    const history = useHistory();
    const isEdit = !!id;

    const [enterpriseName, setEnterpriseName] = useState('');
    const [enterpriseDescription, setEnterpriseDescription] = useState('');

    const [isEditEnterpriseService, setIsEditEnterpriseService] = useState(
        false
    );

    const [enterpriseServices, setEnterpriseServices] = useState([]);

    const [services, setServices] = useState([]);

    const [enterpriseService, setEnterpriseService] = useState({
        temporaryKey: undefined,
        name: 'undefined',
        endpoint: '',
        description: '',
    });

    useEffect(() => {
        async function loadEnterpriseServices() {
            if (id) {
                const response = await api.get(`/enterprises/${id}`);
                const { name, description } = response.data;
                const currentServices = response.data.services.map((item) => ({
                    ...item,
                    temporaryKey: item._id,
                }));
                setEnterpriseServices(currentServices);
                setEnterpriseName(name);
                setEnterpriseDescription(description);
            }
        }
        loadEnterpriseServices();
    }, [id]);

    useEffect(() => {
        async function loadServices() {
            const response = await api.get('/services');
            setServices(response.data);
        }

        loadServices();
    }, []);

    async function handleSubmit(data, { resetForm }) {
        const dataWithServices = {
            ...data,
            services: enterpriseServices,
        };
        try {
            if (isEdit) {
                await api.put(`/enterprises/${id}`, dataWithServices);
            } else {
                await api.post('/enterprises', dataWithServices);
            }
            toast.success(
                `Empresa ${isEdit ? 'Editada' : 'Criada'} com Sucesso`
            );
            if (!isEdit) resetForm();
            history.goBack();
        } catch (err) {
            toast.error(
                `Não foi possível  ${isEdit ? 'Editar' : 'Criar'} Empresa`
            );
        }
    }

    function resetFieldSet() {
        setEnterpriseService({
            temporaryKey: undefined,
            name: 'undefined',
            endpoint: '',
            description: '',
        });
    }

    function isValidParameters(endpoint, name) {
        if (!endpoint || endpoint.trim() === '') {
            toast.error(`Campo IP é obrigatório`);
            return false;
        }
        if (name && name === 'undefined') {
            toast.error(`Campo Name é obrigatório`);
            return false;
        }

        return true;
    }

    function actionEnterpriseService() {
        const temporaryKey = isEditEnterpriseService
            ? enterpriseService.temporaryKey
            : `#${enterpriseServices.length + 1}`;
        const { name, endpoint, description } = enterpriseService;

        if (!isValidParameters(endpoint, name)) return;

        if (isEditEnterpriseService) {
            const index = enterpriseServices.findIndex(
                (es) => es.temporaryKey === temporaryKey
            );
            enterpriseServices[index] = {
                _id: enterpriseServices[index]._id,
                temporaryKey,
                name,
                endpoint,
                description,
            };
            setIsEditEnterpriseService(false);
        } else {
            setEnterpriseServices([
                ...enterpriseServices,
                {
                    temporaryKey,
                    name,
                    endpoint,
                    description,
                },
            ]);
        }

        resetFieldSet();
    }

    function fillOldEnterpriseService(oldEnterpriseService) {
        setIsEditEnterpriseService(true);
        const {
            temporaryKey,
            name,
            endpoint,
            description,
        } = oldEnterpriseService;

        setEnterpriseService({
            temporaryKey,
            name,
            endpoint,
            description,
        });
    }

    function changeEnterpriseService(e) {
        switch (e.target.id) {
            case 'service':
                setEnterpriseService({
                    ...enterpriseService,
                    name: e.target.value,
                });
                break;
            case 'ip':
                setEnterpriseService({
                    ...enterpriseService,
                    endpoint: e.target.value,
                });
                break;
            case 'servicedescription':
                setEnterpriseService({
                    ...enterpriseService,
                    description: e.target.value,
                });
                break;
            default:
                break;
        }
    }

    function onDeleteEnterpriseService(identifier) {
        setEnterpriseServices(
            enterpriseServices.filter((es) => es.temporaryKey !== identifier)
        );
    }

    return (
        <>
            <GoBack to="/enterprise" />
            <Container>
                <FormContainer>
                    <Form onSubmit={handleSubmit}>
                        <legend>
                            <h1>Empresa</h1>
                        </legend>
                        <label htmlFor="name">Nome</label>
                        <Input
                            name="name"
                            id="name"
                            type="text"
                            size="50"
                            required
                            onChange={(e) => setEnterpriseName(e.target.value)}
                            value={enterpriseName}
                        />
                        <label htmlFor="description">Descrição</label>
                        <Input
                            name="description"
                            id="description"
                            type="text"
                            size="50"
                            onChange={(e) =>
                                setEnterpriseDescription(e.target.value)
                            }
                            value={enterpriseDescription}
                        />
                        <fieldset>
                            <legend>Serviço:</legend>
                            <label htmlFor="service">Nome</label>
                            <select
                                id="service"
                                name="service"
                                onChange={changeEnterpriseService}
                                value={enterpriseService.name}
                            >
                                <option value="undefined">
                                    Escolha uma opção
                                </option>
                                {services.map((service) => (
                                    <option
                                        key={service._id}
                                        value={service.name}
                                    >
                                        {service.name}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="ip">IP</label>
                            <Input
                                name="ip"
                                id="ip"
                                type="text"
                                size="50"
                                onChange={changeEnterpriseService}
                                value={enterpriseService.endpoint}
                            />
                            <label htmlFor="servicedescription">
                                Descrição
                            </label>
                            <Input
                                name="servicedescription"
                                id="servicedescription"
                                type="text"
                                size="50"
                                onChange={changeEnterpriseService}
                                value={enterpriseService.description}
                            />
                            <div>
                                <button
                                    type="button"
                                    onClick={() => resetFieldSet()}
                                >
                                    <FaUndo color="#FFF" size={10} />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => actionEnterpriseService()}
                                >
                                    {isEditEnterpriseService ? (
                                        <MdEdit color="#FFF" size={20} />
                                    ) : (
                                        <MdAdd color="#FFF" size={20} />
                                    )}
                                </button>
                            </div>
                        </fieldset>
                        <button type="submit">
                            {isEdit ? 'Editar' : 'Criar'}
                        </button>
                    </Form>

                    <FaAngleDoubleRight color="#008500" size={30} />
                    <ModelTable>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>IP</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enterpriseServices.map((es) => (
                                <tr key={es.temporaryKey}>
                                    <td>{es.name}</td>
                                    <td>{es.endpoint}</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                fillOldEnterpriseService(es)
                                            }
                                        >
                                            <FaEdit color="#008500" size={20} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                onDeleteEnterpriseService(
                                                    es.temporaryKey
                                                )
                                            }
                                        >
                                            <FaTrashAlt
                                                color="#008500"
                                                size={20}
                                            />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </ModelTable>
                </FormContainer>
            </Container>
        </>
    );
}

ActionEnterprise.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }).isRequired,
    }).isRequired,
};
