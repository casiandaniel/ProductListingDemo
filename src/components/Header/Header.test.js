import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from './Header';

const setup = () => render(<Header title="Hello world">Children</Header>);

describe('Supplies header', () => {
    it('should render title', () => {
        setup();

        expect(screen.getByText(/Hello world/)).toBeInTheDocument();
    });

    it('should render children', () => {
        setup();

        expect(screen.getByText(/Children/)).toBeInTheDocument();
    });
});
