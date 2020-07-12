import React from 'react';
import logo from '../../assets/logo.svg';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Colete meu Lixo" />
                </header>
                <main>
                    <h1>Sua coleta de lixo inteligente</h1>
                    <p>Ajudamos as pessoas a saberem quando e onde seu lixo será coletado.</p>
                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Marque seu ponto de coleta</strong>
                    </Link>
                </main>
            </div>
        </div>
    )
}
export default Home;