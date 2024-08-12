const products = [
    {id:1, name:"product 1", description: "Product 1 for use in the market", category: "home", price: 200},
    { id:2, name:"product 2", description: "Product 2 for use in the market", category: "home", price: 400},
    {id:3, name:"product 3", description: "Product 3 for use in the market", category: "home", price: 600},
    { id:4, name:"product 4", description: "Product 4 for use in the market", category: "home", price: 800},
];

export default products;

export const fetchProduct = () => products;

export const addProduct = (product) => {
    // return new Promise((resolve) => {
      const newProduct = { ...product, id: products.length + 1 };
      products.push(newProduct);
    //   setTimeout(() => resolve(newProduct), 500); // Simulate a delay
    // });
  };

export const updateProduct = (id, updatedProduct) =>{
    const updatedList = products.map(product => product.id===id ?{...product,...updatedProduct}:product);
}

export const removeProduct =(id) =>{
    const updatedproducts= products.filter(product => product.id === id);
}