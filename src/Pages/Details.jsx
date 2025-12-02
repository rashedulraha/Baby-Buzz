import {
  FaUser,
  FaEnvelope,
  FaTag,
  FaShoppingCart,
  FaArrowLeft,
} from "react-icons/fa";
import useProductFetch from "../Hook/useProductFetch";
import Container from "../Components/Container";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Details = () => {
  const [findProduct, setFindProduct] = useState(null);
  const { id } = useParams();
  const { product } = useProductFetch();
  const productData = product?.data;

  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 50 });
  }, []);

  useEffect(() => {
    const product = productData?.find((p) => p?.toyId == id);
    setFindProduct(product);
  }, [productData, id]);

  const {
    toyName,
    sellerName,
    sellerEmail,
    price,
    availableQuantity,
    description,
    pictureURL,
    subCategory,
  } = findProduct || {};

  return (
    <div className="pb-20 pt-10">
      <Container>
        {/* Back Button */}
        <div data-aos="fade-down">
          <Link
            to="/seller"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mb-8 transition">
            <FaArrowLeft />
            Back to all seller products
          </Link>
        </div>

        <div
          className="bg-base-100 rounded-2xl overflow-hidden shadow-xl"
          data-aos="fade-up">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2 flex items-center justify-center bg-base-200/30 p-6">
              <div
                className="relative w-full max-w-md"
                data-aos="fade-right"
                data-aos-delay="100">
                <img
                  src={pictureURL || "/placeholder.jpg"}
                  alt={toyName}
                  className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-content py-1 px-4 rounded-full text-sm font-semibold shadow-md">
                  {subCategory}
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 p-6 md:p-10 space-y-6">
              {/* Title */}
              <div data-aos="fade-up" data-aos-delay="100">
                <h1 className="text-3xl md:text-4xl font-bold text-primary">
                  {toyName}
                </h1>
              </div>

              {/* Description */}
              <p
                className="text-base-content/80 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="150">
                {description}
              </p>

              {/* Seller Info */}
              <div
                className="space-y-4"
                data-aos="fade-up"
                data-aos-delay="200">
                <div className="flex items-center">
                  <FaUser className="text-primary mr-3 text-lg" />
                  <div>
                    <p className="text-sm text-base-content/60">Seller</p>
                    <p className="font-medium text-base-content">
                      {sellerName}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaEnvelope className="text-primary mr-3 text-lg" />
                  <div>
                    <p className="text-sm text-base-content/60">Contact</p>
                    <p className="font-medium text-base-content">
                      {sellerEmail}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaTag className="text-primary mr-3 text-lg" />
                  <div>
                    <p className="text-sm text-base-content/60">Category</p>
                    <p className="font-medium text-base-content">
                      {subCategory}
                    </p>
                  </div>
                </div>
              </div>

              {/* Price & Stock */}
              <div
                className="bg-base-200/50 rounded-xl p-6 space-y-4"
                data-aos="fade-up"
                data-aos-delay="250">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-base-content/70">Price</p>
                    <p className="text-3xl font-bold text-primary">${price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-base-content/70">Available</p>
                    <p className="text-2xl font-bold text-success">
                      {availableQuantity} pcs
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    className="flex-1 btn bg-primary hover:bg-primary/90 text-primary-content font-medium border-none shadow-md hover:shadow-lg transition-all"
                    data-aos="fade-up"
                    data-aos-delay="300">
                    <FaShoppingCart className="mr-2" />
                    Add to Wishlist
                  </button>
                  <button
                    className="flex-1 btn bg-secondary hover:bg-secondary/90 text-secondary-content font-medium shadow-md hover:shadow-lg transition-all"
                    data-aos="fade-up"
                    data-aos-delay="350">
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Extra Info */}
              <div
                className="grid grid-cols-2 gap-4 text-center"
                data-aos="fade-up"
                data-aos-delay="400">
                <div className="bg-base-200/40 p-4 rounded-lg">
                  <p className="text-sm text-base-content/60">Delivery</p>
                  <p className="font-medium text-base-content">
                    2-3 Business Days
                  </p>
                </div>
                <div className="bg-base-200/40 p-4 rounded-lg">
                  <p className="text-sm text-base-content/60">Warranty</p>
                  <p className="font-medium text-base-content">2 Months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Details;
