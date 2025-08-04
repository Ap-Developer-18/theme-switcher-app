import { useEffect } from "react";
import { fetchProducts } from "../redux/productSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Products = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="max-w-[1140px] mx-auto px-4 py-36">
      <div className="mb-8 w-full relative">
        <span className="absolute  -top-8 left-4 md:-left-10">
          <svg
            width="43"
            height="48"
            viewBox="0 0 43 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.8203 36.1915C33.4368 32.2463 32.5614 16.4656 41 2"
              className="stroke-primary"
              stroke-width="4"
              stroke-linecap="round"
            ></path>
            <path
              d="M28.2048 37.6028C23.808 37.051 16.4951 27.694 15.491 15.1505"
              className="stroke-primary"
              stroke-width="4"
              stroke-linecap="round"
            ></path>
            <path
              d="M26.3995 45.1488C16.7293 46.7121 3.58003 41.4519 2.20214 36.1915"
              className="stroke-primary"
              stroke-width="4"
              stroke-linecap="round"
            ></path>
          </svg>
        </span>
        <h3 className="main-heading text-center lg:text-start">Our Mission</h3>
        <p className="paragraph !text-secondary pt-2 text-center lg:text-start">
          Our mission at Xinate, LLC is to inspire, innovate, and create
          experiences that leave a lasting impact. We are driven by a commitment
          to excellence and a vision of contributing to positive change in the
          industries we operate in.
        </p>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white/20 flex flex-col justify-between backdrop-blur-lg p-4 rounded-xl border border-white"
          >
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="h-[200px] w-full object-cover object-center rounded-xl"
              />
              <h3 className="text-lg font-bold mt-4 text-secondary">
                {product.title}
              </h3>
              <p className="text-sm text-secondary mt-2">
                {product.description.slice(0, 100)}...
              </p>
            </div>
            <p className="mt-2 font-semibold text-secondary">
              ₹{product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
