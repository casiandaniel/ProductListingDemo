import React, { useMemo } from 'react';
import { func, arrayOf, string } from 'prop-types';
import { dataTestId } from '../../constants/constants';
import defaultStyles from './Tabs.css';

const Tabs = ({ items, selected, onSelect }) => {
    const renderButtons = useMemo(
        () =>
            items.map((item) => {
                const activeClass =
                    selected === item ? defaultStyles.selected : '';
                return (
                    <button
                        className={`${defaultStyles.button} ${activeClass}`}
                        onClick={() => onSelect(item)}
                        key={item}
                        data-test-hook={`${dataTestId}-tabs-button`}
                    >
                        {item}
                    </button>
                );
            }),
        [selected, items]
    );

    return (
        <section
            className={defaultStyles.section}
            data-test-hook={`${dataTestId}-tabs`}
        >
            {renderButtons}
        </section>
    );
};

Tabs.propTypes = {
    items: arrayOf(string.isRequired).isRequired,
    selected: string.isRequired,
    onSelect: func.isRequired,
};

export default Tabs;
