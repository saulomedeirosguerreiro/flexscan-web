import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';
import ModelTable from '../../components/ModelTable';
import { Container, Pagination, Content } from './styles';

export default function Enterprise() {
    return (
        <Container>
            <Content>
                <ModelTable>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Apodi</td>
                            <td>uma pequena descrição da empresa</td>
                            <td>
                                <button type="button">
                                    <FaEdit color="#3700B3" size={20} />
                                </button>
                                <button type="button">
                                    <FaTrashAlt color="#3700B3" size={20} />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Unimed Fortaleza</td>
                            <td>uma pequena descrição da empresa</td>
                            <td>
                                <FaEdit color="#3700B3" size={20} />
                                <FaTrashAlt color="#3700B3" size={20} />
                            </td>
                        </tr>
                        <tr>
                            <td>Grupo Edson Queiroz</td>
                            <td>uma pequena descrição da empresa</td>
                            <td>
                                <FaEdit color="#3700B3" size={20} />
                                <FaTrashAlt color="#3700B3" size={20} />
                            </td>
                        </tr>
                        <tr>
                            <td>M Dias Branco</td>
                            <td>uma pequena descrição da empresa</td>
                            <td>
                                <FaEdit color="#3700B3" size={20} />
                                <FaTrashAlt color="#3700B3" size={20} />
                            </td>
                        </tr>
                        <tr>
                            <td>Aviação Princesa</td>
                            <td>uma pequena descrição da empresa</td>
                            <td>
                                <FaEdit color="#3700B3" size={20} />
                                <FaTrashAlt color="#3700B3" size={20} />
                            </td>
                        </tr>

                        <tr>
                            <td>Libercard</td>
                            <td>uma pequena descrição da empresa</td>
                            <td>
                                <FaEdit color="#3700B3" size={20} />
                                <FaTrashAlt color="#3700B3" size={20} />
                            </td>
                        </tr>
                        <tr>
                            <td>Unimed Ceará</td>
                            <td>uma pequena descrição da empresa</td>
                            <td>
                                <FaEdit color="#3700B3" size={20} />
                                <FaTrashAlt color="#3700B3" size={20} />
                            </td>
                        </tr>
                    </tbody>
                </ModelTable>
                <Pagination>
                    <a href="#">1</a>
                    <a href="#" className="active">
                        2
                    </a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                </Pagination>
            </Content>
            <div>
                <button type="button">
                    <strong>Criar Nova Empresa</strong>
                    <MdAddCircle size={80} />
                </button>
            </div>
        </Container>
    );
}
