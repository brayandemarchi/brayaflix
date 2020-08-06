import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from '../../components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="BrayaFlix Logo" 
                className="Logo" />
            </a>

             {/* <ButtonLink className="ButtonLink" href="/" >
                Novo vídeo
            </ButtonLink>  */}
            <Button as="a" className="ButtonLink" href="/" >
                Novo vídeo +
            </Button>

        </nav>
    );
}

export default Menu;