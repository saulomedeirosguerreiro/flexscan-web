import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ModelTable from '../../components/ModelTable';
import { Container, Content, Pagination } from './styles';

export default function App() {
    return (
        <Container>
            <Content>
                <ModelTable>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>IP</th>
                            <th>Empresa</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Flexuc</td>
                            <td>http://locahost:8080/teste/flexuc</td>
                            <td>M Dias Branco</td>
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
                            <td>FlexChannel</td>
                            <td>http://locahost:8080/teste/flexchannel</td>
                            <td>M Dias Branco</td>
                            <td>
                                <FaEdit color="#3700B3" size={20} />
                                <FaTrashAlt color="#3700B3" size={20} />
                            </td>
                        </tr>
                        <tr>
                            <td>GoGreen</td>
                            <td>http://locahost:8080/teste/gogreen</td>
                            <td>M Dias Branco</td>
                            <td>
                                <FaEdit color="#3700B3" size={20} />
                                <FaTrashAlt color="#3700B3" size={20} />
                            </td>
                        </tr>
                        <tr>
                            <td>Flexuc</td>
                            <td>http://locahost:8080/teste/flexuc</td>
                            <td>M Dias Branco</td>
                            <td>
                                <FaEdit color="#3700B3" size={20} />
                                <FaTrashAlt color="#3700B3" size={20} />
                            </td>
                        </tr>
                        <tr>
                            <td>Flexuc</td>
                            <td>http://locahost:8080/teste/flexuc</td>
                            <td>Unimed Fortaleza</td>
                            <td>
                                <FaEdit color="#3700B3" size={20} />
                                <FaTrashAlt color="#3700B3" size={20} />
                            </td>
                        </tr>
                        <tr>
                            <td>Flexuc</td>
                            <td>http://locahost:8080/teste/flexuc</td>
                            <td>Unimed Ceará</td>
                            <td>
                                <FaEdit color="#3700B3" size={20} />
                                <FaTrashAlt color="#3700B3" size={20} />
                            </td>
                        </tr>
                    </tbody>
                </ModelTable>
                <Pagination>
                    <a href="http://www.google.com.br">1</a>
                    <a href="http://www.google.com.br" className="active">
                        2
                    </a>
                    <a href="http://www.google.com.br">3</a>
                    <a href="http://www.google.com.br">4</a>
                    <a href="http://www.google.com.br">5</a>
                    <a href="http://www.google.com.br">6</a>
                </Pagination>
            </Content>
            <div>
                <Link to="/app/create">
                    <strong>Criar Nova Aplicação</strong>
                    <MdAddCircle size={80} />
                </Link>
            </div>
        </Container>
    );
}
