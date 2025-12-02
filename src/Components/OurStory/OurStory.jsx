import React from "react";
import { Link } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";

const OurStory = () => {
  return (
    <section className="py-12 px-6 bg-base-200/30 rounded-3xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3 text-primary">
        <IoBookSharp className="text-4xl" />
        Our Story
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <p className="text-base-content/70 text-lg leading-relaxed mb-6">
            Welcome to ToyTopia, where we bring the joy of play to every child.
            Founded in 2020, our mission is to provide the best toys and foster
            a vibrant community for toy enthusiasts. Discover our journey and
            join us!
          </p>

          <Link
            to="/our-story-details"
            className="btn bg-secondary hover:bg-primary text-secondary-content font-semibold border-none shadow-lg hover:shadow-xl transition-all">
            Read More
          </Link>
        </div>

        <div className="order-1 md:order-2">
          <img
            src="https://i.pinimg.com/1200x/da/85/21/da852102a5dd05d38b8793208c6bdec9.jpg"
            alt="Our Story"
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
