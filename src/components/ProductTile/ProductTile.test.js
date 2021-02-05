import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductTile from './ProductTile';
import { dataTestId } from '../../constants/constants';

const mockData = {
    id: 1,
    title: 'Test',
    price: 300,
    category: 'test',
    description: 'test',
    image: '...',
};

const onClick = jest.fn();
const setup = () => render(<ProductTile item={mockData} addToCart={onClick} />);

describe('Product tile', () => {
    it('should render component', () => {
        setup();
        expect(screen.getByTestId(`${dataTestId}-product`)).toBeInTheDocument();
    });

    it('should not render product price', () => {
        setup();
        expect(
            screen.getByText(new RegExp(mockData.price))
        ).toBeInTheDocument();
    });

    it('should add product to cart', () => {
        setup();

        const button = screen.getByTestId(`${dataTestId}-product-addToCart`);

        fireEvent.click(button);

        expect(onClick).toBeCalled();
    });
});
