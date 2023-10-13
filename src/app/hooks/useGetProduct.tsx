import { useEffect, useState } from "react";
import { getProducts } from "../utilities/utils";

interface Product {

    product_id: number;
    product_name: String;  
    description: String;
    price: number;
    image: String;
    is_available: Boolean;
    quantity_of_items: number;
    category: String;

}

const useGetProducts = () => {
  const [product, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
        const products = await getProducts();
        console.log({products:product})
        setProducts(products); 
    })();
  }, []);

  return { product };
};

export default useGetProducts;
