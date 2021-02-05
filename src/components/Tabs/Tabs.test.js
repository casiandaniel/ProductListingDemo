import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { dataTestId } from '../../constants/constants';
import Tabs from './Tabs';

const items = ['electronics', 'jewelery', 'men clothing', 'women clothing'];

const onClick = jest.fn();

const setup = () =>
    render(
        <Tabs
            items={items}
            onSelect={(type) => onClick(type)}
            selected="electronics"
        />
    );

describe('Categories tabs', () => {
    it('should render component', () => {
        setup();
        expect(screen.getByTestId(`${dataTestId}-tabs`)).toBeInTheDocument();
    });

    it('should render 4 buttons', () => {
        setup();
        const buttons = screen.getAllByTestId(`${dataTestId}-tabs-button`);
        expect(buttons).toHaveLength(4);
    });

    it('should call onClick when clicked', () => {
        setup();
        const buttons = screen.getAllByTestId(`${dataTestId}-tabs-button`);

        buttons.forEach((button) => {
            fireEvent.click(button);
            expect(onClick).toBeCalled();
        });
    });
});
