const URL = "https://dummyjson.com/products";

const fetchData = async (endpoint = "") => {
  const res = await fetch(`${URL}${endpoint}`);
  return res.json();
};

const getSingleProduct = async () => {
  const data = await fetchData("/1");
  console.log(data);
};

const getAllProduct = async () => {
  const data = await fetchData();
  console.log(data);
};

const getAllProductImage = async () => {
  const { products } = await fetchData();
  products.forEach(product => {
    console.log(product.images);
  });
};

const productStockCheck = async (id) => {
  const { stock } = await fetchData(`/${id}`);
  console.log(stock);
};

const totalProductAvailable = async () => {
  const { products } = await fetchData();
  const count = products.filter(
    p => p.availabilityStatus === "In Stock"
  ).length;

  console.log(count);
};

getAllProduct();
getSingleProduct();
getAllProductImage();
productStockCheck(7);
totalProductAvailable();
