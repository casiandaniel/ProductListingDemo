import React, { useState } from 'react';
import { shape, string, number, func } from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '@material-ui/core/Button';
import { dataTestId } from '../../constants/constants';
import defaultStyles from './ProductTile.css';

const ProductTile = ({ item = {}, addToCart }) => {
    const { title, price, description, image } = item;
    const [showDescription, setShowDescription] = useState(false);

    const handleClick = () => {
        addToCart ? addToCart() : console.log(`${title} added to cart`);
    };

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    const renderPrice = (price) =>
        new Intl.NumberFormat('it-IT', {
            style: 'currency',
            currency: 'EUR',
        }).format(price);

    const tileTitle = <h2 className={defaultStyles.title}>{title}</h2>;

    return (
        <section
            className={defaultStyles.section}
            data-test-hook={`${dataTestId}-product`}
        >
            <div className={defaultStyles.content}>
                <>
                    {tileTitle}
                    <p
                        onClick={() => toggleDescription()}
                        className={defaultStyles.label}
                    >
                        {showDescription ? 'See Less' : 'See More'}
                    </p>

                    <AnimatePresence initial={false}>
                        {showDescription && (
                            <motion.div
                                style={{ marginBottom: '30px' }}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ type: 'tween' }}
                            >
                                <p className={defaultStyles.description}>
                                    {description && description}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className={defaultStyles.priceContainer}>
                        {renderPrice(price)}
                    </div>
                    <div className={defaultStyles.actions}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleClick()}
                            data-test-hook={`${dataTestId}-product-addToCart`}
                        >
                            Buy
                        </Button>
                    </div>
                </>

                <AnimatePresence initial={false}>
                    {!showDescription && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ type: 'tween' }}
                        >
                            <img
                                className={defaultStyles.image}
                                src={image}
                                title={title}
                                alt={title}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

ProductTile.propTypes = {
    item: shape({
        id: number.isRequired,
        title: string.isRequired,
        price: number.isRequired,
        description: string,
        image: string,
        category: string,
    }),
    addToCart: func,
};

export default ProductTile;
