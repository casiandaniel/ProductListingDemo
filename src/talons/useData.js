export const getAllCategories = async () => {
    return await fetch(
        'https://fakestoreapi.com/products/categories'
    ).then((response) => response.json().then((json) => json));
};

export const getProductsByCategory = async (category) => {
    return await fetch(
        `https://fakestoreapi.com/products/category/${category}`
    ).then((result) => result.json().then((json) => json));
};

export const getProductDetails = async (productId) => {
    return await fetch(
        `https://fakestoreapi.com/products/${productId}`
    ).then((result) => result.json().then((json) => json));
};
