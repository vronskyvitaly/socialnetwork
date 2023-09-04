import React from 'react';
import  s from 'components/Header/Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <p className={s.logo}>Сетка</p>
        </header>
    );
};

