import { FC, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
interface IFetchProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

const App: FC = () => {
  const [productList, setProductList] = useState<IFetchProduct[]>([]);
  const getProduct = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/product");
      setProductList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-6  mt-5 container mx-auto">
        {productList.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            discountPercentage={item.discountPercentage}
            rating={item.rating}
            stock={item.stock}
            brand={item.brand}
            category={item.category}
            thumbnail={item.thumbnail}
          />
        ))}
      </div>
    </>
  );
};

export default App;
