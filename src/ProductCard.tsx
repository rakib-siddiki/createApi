interface IProductCardProps {
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
const ProductCard = (props: IProductCardProps) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  } = props;

  return (
    <div className="group max-w-sm flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl overflow-hidden">
       <img className="w-full h-full object-cover " src={thumbnail} alt={title} />
      </div>
      <div className="p-4 md:p-6 w-auto ">
        {" "}
        <div className="font-bold text-xl mb-2 text-gray-300">{title}</div>
        <p className=" text-base text-gray-300">{description}</p>
        <p className="text-gray-300 text-base mt-2">
          <span className="font-bold">Price:</span> ${price.toFixed(2)}
        </p>
        <p className="text-gray-300 text-base">
          <span className="font-bold">Discount:</span>{" "}
          {discountPercentage.toFixed(2)}%
        </p>
        <p className="text-gray-300 text-base">
          <span className="font-bold">Rating:</span> {rating}
        </p>
        <p className="text-gray-300 text-base">
          <span className="font-bold">Stock:</span> {stock}
        </p>
        <p className="text-gray-300 text-base">
          <span className="font-bold">Brand:</span> {brand}
        </p>
        <p className="text-gray-300 text-base">
          <span className="font-bold">Category:</span> {category}
        </p>
      </div>
      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
        <a
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          View sample
        </a>
        <a
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          Add To Cart
        </a>
      </div>
    </div>
    /* End Card Blog */
  );
  // <!-- End Card Blog -->
};

export default ProductCard;
