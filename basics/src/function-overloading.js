const PRODUCTS = [
    {
        productId: 1233,
        productName: "Apple 6",
        price: 40000,
        stock: 120,
        companyName: "Apple"
    },
    {
        productId: 1234,
        productName: "IPAD",
        price: 90000,
        stock: 100,
        companyName: "Apple"
    },
    {
        productId: 1235,
        productName: "Samsung s90",
        price: 60000,
        stock: 150,
        companyName: "Samsung"
    }
];
function searchProducts(propertyName) {
    const availableProducts = [...PRODUCTS]; //ctreates local copy
    //const availableProducts = PRODUCTS; // refers to the same Object, will get affected
    const foundProducts = [];
    if (typeof propertyName === "number") {
        for (const prod of availableProducts) {
            if (prod.stock === propertyName)
                foundProducts.push(prod.productName);
        }
    }
    else {
        for (const prod of availableProducts) {
            if (prod.companyName === propertyName)
                foundProducts.push(prod.productName);
        }
    }
    return foundProducts;
}
console.log(searchProducts(120));
console.log(searchProducts("Apple"));
//# sourceMappingURL=function-overloading.js.map