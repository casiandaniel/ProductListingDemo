import React, { useEffect, useState, useCallback } from 'react';
import { oneOf, string } from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import defaultStyles from './productListing.css';
import { CATEGORY_TYPE } from '../constants/constants';
import Header from './Header';
import Tabs from './Tabs';
import ProductTile from './ProductTile';
import { getAllCategories, getProductsByCategory } from '../talons/useData';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const ProductListing = ({ title = 'Default Title', theme = 'nice' }) => {
    const [categories, setCategories] = useState([]);
    const [supplyType, setSupplyType] = useState(CATEGORY_TYPE.ELECTRONICS);
    const [products, setProducts] = useState([]);
    const [sort, setSort] = React.useState('price');
    const [direction, setDirection] = React.useState('asc');
    const classes = useStyles();

    const handleDirectionChange = (event) => {
        setDirection(event.target.value);
    };
    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    const setSelectedTab = useCallback((type) => {
        setSupplyType(type);
    }, []);

    useEffect(() => {
        getAllCategories().then((result) => {
            if (result && result.length) {
                setCategories(result);
            }
        });
    }, [getAllCategories]);

    useEffect(() => {
        getProductsByCategory(supplyType).then((result) => {
            if (result && result.length) {
                if (sort === 'price') {
                    result.sort((a, b) =>
                        direction === 'asc'
                            ? a.price - b.price
                            : b.price - a.price
                    );
                } else if (sort === 'name') {
                    result.sort((a, b) =>
                        direction === 'asc'
                            ? a.title.localeCompare(b.title)
                            : b.title.localeCompare(a.title)
                    );
                }
                setProducts(result);
            }
        });
    }, [supplyType, getProductsByCategory, sort, direction]);

    const renderProducts = useCallback(
        (items) =>
            items &&
            items.map((item) => (
                <ProductTile
                    item={item}
                    key={`${item.category}-${item.id}`}
                    onAddToCart={(quantity) => console.log(item, quantity)}
                />
            )),
        []
    );

    return (
        <div className={defaultStyles.root}>
            <Header
                wrapperClass={clsx(
                    defaultStyles.header,
                    theme === 'nice'
                        ? defaultStyles.niceTheme
                        : theme === 'dark'
                        ? defaultStyles.darkTheme
                        : ''
                )}
                title={title}
            >
                <Tabs
                    items={categories}
                    selected={supplyType}
                    onSelect={(type) => setSelectedTab(type)}
                />
            </Header>
            <div className={defaultStyles.toolbar}>
                <h3 className={defaultStyles.counter}>
                    <span>{`${products.length}`}</span> Products
                </h3>
                <div className={defaultStyles.sort}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">
                            Direction
                        </InputLabel>
                        <Select
                            labelId="direction-select-label"
                            id="direction-select"
                            value={direction}
                            onChange={handleDirectionChange}
                        >
                            <MenuItem value={'asc'}>Asc</MenuItem>
                            <MenuItem value={'desc'}>Desc</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">
                            Sort By
                        </InputLabel>
                        <Select
                            labelId="sort-select-label"
                            id="sort-select"
                            value={sort}
                            onChange={handleSortChange}
                        >
                            <MenuItem value={'price'}>Price</MenuItem>
                            <MenuItem value={'name'}>Name</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            {products.length && (
                <div className={defaultStyles.productsListing}>
                    {renderProducts(products)}
                </div>
            )}
        </div>
    );
};

ProductListing.propTypes = {
    title: string,
    theme: oneOf(['dark', 'nice']),
};

export default ProductListing;
