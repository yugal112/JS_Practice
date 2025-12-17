const URL = "https://dummyjson.com/products";

// helper function
const fetchData = async (endpoint = "") => {
  const res = await fetch(`${URL}${endpoint}`);
  return res.json();
};

// Single Product
const getSingleProduct = async () => {
  const data = await fetchData("/1");
  console.log(data);
};

// All Products
const getAllProduct = async () => {
  const data = await fetchData();
  console.log(data);
};

// All Product Images
const getAllProductImage = async () => {
  const { products } = await fetchData();
  products.forEach(product => {
    console.log(product.images);
  });
};

// Product Stock Check
const productStockCheck = async (id) => {
  const { stock } = await fetchData(`/${id}`);
  console.log(stock);
};

// Total Product Available
const totalProductAvailable = async () => {
  const { products } = await fetchData();
  const count = products.filter(
    p => p.availabilityStatus === "In Stock"
  ).length;

  console.log(count);
};

// function calls
getAllProduct();
getSingleProduct();
getAllProductImage();
productStockCheck(7);
totalProductAvailable();
