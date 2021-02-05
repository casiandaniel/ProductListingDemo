import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { ProductListing } from './index';

export default {
    title: 'Product Listing DEMO',
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
        },
    },
};

export const mobile = () => <ProductListing title="Candy Shop" theme="dark" />;

mobile.story = {
    parameters: {
        viewport: {
            defaultViewport: 'iphone6',
        },
    },
};

export const desktop = () => <ProductListing title="Candy Shop" theme="nice" />;
