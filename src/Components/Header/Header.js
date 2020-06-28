import React from 'react';
import logo from './logo.svg';
import './Header.css';

const Header = () => {
    return (
        <header className="App-header">
            <div className="header-wrapper">
                <img className="logo" src={logo} alt="logo"/>
                <h2>React Clock</h2>
            </div>

        </header>
    );
}

export default Header;
