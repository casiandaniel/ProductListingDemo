import React from 'react';
import { node, string } from 'prop-types';
import { dataTestId } from '../../constants/constants';
import defaultStyles from './Header.css';

const Header = ({ title = '', wrapperClass = '', children }) => {
    return (
        <section
            className={`${defaultStyles.section} ${wrapperClass}`}
            data-test-id={`${dataTestId}-header`}
        >
            <h1 className={defaultStyles.title}>{title}</h1>
            {children && children}
        </section>
    );
};

Header.propTypes = {
    title: string,
    children: node,
    wrapperClass: string,
};

export default Header;
