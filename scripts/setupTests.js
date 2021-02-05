import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-test-hook' });

window.matchMedia =
    window.matchMedia ||
    function () {
        return {
            matches: false,
            addListener: function () {},
            removeListener: function () {},
        };
    };
