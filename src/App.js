import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';

function App() {
    return (
        <BrowserRouter basename="flexscan">
            <Header />
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={2000} />
        </BrowserRouter>
    );
}

export default App;
