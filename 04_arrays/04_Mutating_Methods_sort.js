const products = [
    {
        id: 1,
        title: "Wireless Mouse",
        price: 799,
        rating: 4.3,
        createdAt: new Date().toISOString().split("T")[0],
        inStock: true,
    },
    {
        id: 2,
        title: "Keyboard",
        price: 3499,
        rating: 4.6,
        createdAt: new Date().toISOString().split("T")[0],
        inStock: false,
    },
    {
        id: 3,
        title: "USB-C Hub",
        price: 1299,
        rating: 4.5,
        createdAt: new Date().toISOString().split("T")[0],
        inStock: true,
    }
];

function sortProducts (products, sortBy, onlyInStock = true) {
    let sorted = [...products]; // avoid mutation

    // 1. Filter first
    if(onlyInStock) {
        sorted = sorted.filter(product => product.inStock);
    }

    switch(sortBy) {
        case "price_low_high":
            return sorted.sort((a, b) => a.price - b.price);

        case "price_high_low":
            return sorted.sort((a, b) => b.price - a.price);
        
        case "rating":
            return sorted.sort((a, b) => b.rating - a.rating);

        case "name":
            return sorted.sort((a, b) => a.title.localeCompare(b.title));

        default:
            return sorted;
    }

};

const userSelectedSort = "name";
const sortedProducts = sortProducts(products, userSelectedSort, true);
console.log(sortedProducts);