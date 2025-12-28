import { ShoppingCart } from "lucide-react";
import Product1Image from "../assets/product-1.png";
import Product2Image from "../assets/product-2.png";
import Product3Image from "../assets/product-3.png";
import Product4Image from "../assets/product-4.png";
import Container from "./common/Container";

const products = [
  {
    name: "Woman Apparel",
    price: "৳ 1,000.00 - ৳ 1,000.00",
    image: Product1Image,
  },
  {
    name: "Man Apparel",
    price: "৳ 1,000.00 - ৳ 10,000.00",
    image: Product2Image,
  },
  {
    name: "Sports Wear",
    price: "৳ 1,500.00 - ৳ 10,000.00",
    image: Product3Image,
  },
  {
    name: "Nightwear",
    price: "৳ 1,000.00 - ৳ 100,000.00",
    image: Product4Image,
  },
];

export default function ProductSection() {
  return (
    <div>
      <Container>
        <div className="flex justify-between items-center mt-20 mb-6">
          <h3 className="text-3xl font-bold">Our Apparels</h3>
          <p className="underline text-black cursor-pointer">
            See All Products
          </p>
        </div>
        <div>
          {/* Product items will go here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {products.map((product, index) => (
              <div key={index} className="w-72.5 h-80.25 p-2.5">
                <div>
                  <img
                    src={product.image}
                    alt=""
                    srcset=""
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h4 className="py-3 font-urbanist text-xl font-semibold">
                  {product.name}
                </h4>
                <p className="text-xl font-semibold mb-3.5">{product.price}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-secondary/20 text-sm text-secondary px-3.5 py-2.5 rounded flex items-center gap-2 cursor-pointer hover:bg-secondary hover:text-white transition-colors">
                    <ShoppingCart className="size-4.5 shrink-0" />
                    Add to Cart
                  </button>
                  <button className="bg-secondary text-sm text-white px-9 py-2.5 rounded cursor-pointer hover:bg-primary ">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
