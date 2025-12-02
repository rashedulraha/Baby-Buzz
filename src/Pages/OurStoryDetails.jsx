import React from "react";
import { Link } from "react-router-dom";
import { IoBookSharp, IoPeople, IoHeart, IoStar } from "react-icons/io5";
import Container from "../Components/Container";

const OurStoryDetails = () => {
  return (
    <Container>
      <div className="min-h-screen px-4 sm:px-6 pb-20 pt-10">
        {/* Hero Image */}
        <div
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl"
          data-aos="fade-down">
          <img
            src="https://i.pinimg.com/1200x/da/85/21/da852102a5dd05d38b8793208c6bdec9.jpg"
            alt="ToyTopi Journey"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Title */}
        <div className="mb-10" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-4xl md:text-5xl font-bold text-base-content flex items-center gap-3">
            <IoBookSharp className="text-primary text-5xl" />
            Our Story
          </h1>
          <div className="w-24 h-1 bg-secondary mt-3 rounded-full"></div>
        </div>

        {/* The Beginning */}
        <div
          className="mb-12 bg-base-100 p-8 rounded-2xl shadow-lg border border-base-300"
          data-aos="fade-up"
          data-aos-delay="200">
          <h2 className="text-2xl md:text-3xl font-bold text-base-content mb-6">
            The Beginning of ToyTopia
          </h2>
          <p className="text-base-content/70 leading-relaxed text-lg mb-4">
            ToyTopia was born in 2020 from a simple idea: every child deserves
            access to toys that spark imagination, encourage creativity, and
            bring endless joy. Our founder, a former teacher and parent of
            three, noticed a gap in the market for high-quality, educational
            toys that were both fun and developmentally beneficial.
          </p>
          <p className="text-base-content/70 leading-relaxed text-lg">
            What started as a small online store with just 50 carefully selected
            products has now grown into a comprehensive toy destination with
            over 2,000 items, a physical showroom, and a team of passionate toy
            enthusiasts dedicated to helping you find the perfect toy for every
            child.
          </p>
        </div>

        {/* Mission / Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div
            className="bg-base-100 p-8 rounded-2xl border-2 border-secondary text-center shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-5 mx-auto">
              <IoHeart className="text-3xl text-base-content" />
            </div>
            <h3 className="text-2xl font-bold text-base-content mb-3">
              Our Mission
            </h3>
            <p className="text-base-content/70">
              To inspire creativity and learning through carefully selected toys
              that bring joy to children and peace of mind to parents.
            </p>
          </div>

          <div
            className="bg-base-100 p-8 rounded-2xl border-2 border-primary text-center shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-5 mx-auto">
              <IoStar className="text-3xl text-primary-content" />
            </div>
            <h3 className="text-2xl font-bold text-base-content mb-3">
              Quality Promise
            </h3>
            <p className="text-base-content/70">
              Every toy in our collection meets strict safety standards and is
              tested for durability, educational value, and fun factor.
            </p>
          </div>

          <div
            className="bg-base-100 p-8 rounded-2xl border-2 border-base-content/30 text-center shadow-lg"
            data-aos="fade-up"
            data-aos-delay="300">
            <div className="w-20 h-20 rounded-full bg-base-content/20 flex items-center justify-center mb-5 mx-auto">
              <IoPeople className="text-3xl text-base-content" />
            </div>
            <h3 className="text-2xl font-bold text-base-content mb-3">
              Community Focus
            </h3>
            <p className="text-base-content/70">
              We're building a vibrant community of toy lovers through events,
              workshops, and our annual ToyTopia Festival.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-12 text-center">
            Our Journey
          </h2>

          <div className="space-y-12">
            {/* 2020 */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-aos="fade-right">
              <img
                src="https://i.pinimg.com/736x/c1/e5/61/c1e5617726d1e96efb73ed6e5a495eeb.jpg"
                alt="2020 Launch"
                className="w-full h-56 object-cover rounded-xl shadow-lg"
              />
              <div className="md:col-span-2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  2020 - The Beginning
                </h3>
                <p className="text-base-content/70 leading-relaxed text-lg">
                  Despite the challenges of the pandemic, we launched ToyTopia
                  with a curated collection of 50 educational toys. Our focus on
                  quality and customer service helped us build a loyal customer
                  base from day one.
                </p>
              </div>
            </div>

            {/* 2021 */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-aos="fade-left">
              <div className="md:col-span-2 md:order-2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  2021 - Growing Fast
                </h3>
                <p className="text-base-content/70 leading-relaxed text-lg">
                  We expanded our collection to over 500 products and introduced
                  our popular "Toy of the Month" subscription box. Our team grew
                  to 15 passionate toy experts.
                </p>
              </div>
              <img
                src="https://i.pinimg.com/736x/b2/9d/6a/b29d6a654482922d55303d2a5ef37145.jpg"
                alt="2021 Growth"
                className="w-full h-56 object-cover rounded-xl shadow-lg md:order-1"
              />
            </div>

            {/* 2022 */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-aos="fade-right">
              <img
                src="https://i.pinimg.com/1200x/c7/65/f8/c765f826e168615af9b593bfb7d370f0.jpg"
                alt="2022 Store"
                className="w-full h-56 object-cover rounded-xl shadow-lg"
              />
              <div className="md:col-span-2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  2022 - Going Physical
                </h3>
                <p className="text-base-content/70 leading-relaxed text-lg">
                  We opened our first physical showroom and launched our
                  community outreach program, donating toys to children's
                  hospitals and schools in need.
                </p>
              </div>
            </div>

            {/* 2023 */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-aos="fade-left">
              <div className="md:col-span-2 md:order-2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  2023 - Community Celebration
                </h3>
                <p className="text-base-content/70 leading-relaxed text-lg">
                  We hosted our first annual ToyTopia Festival with over 5,000
                  families and expanded our line to include sustainable and
                  eco-friendly toys.
                </p>
              </div>
              <img
                src="https://i.pinimg.com/736x/2a/d5/c3/2ad5c3124938d3abb09fbcacd53729d1.jpg"
                alt="2023 Festival"
                className="w-full h-56 object-cover rounded-xl shadow-lg md:order-1"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="text-center py-16 bg-base-200/50 rounded-3xl"
          data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-6">
            Join Our Toy Community
          </h2>
          <p className="text-base-content/70 text-lg mb-10 max-w-2xl mx-auto px-4">
            Subscribe to our newsletter for exclusive deals, toy
            recommendations, and invitations to special events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-4 bg-secondary text-secondary-content font-bold rounded-xl hover:bg-secondary/90 transition shadow-lg text-lg">
              Explore Our Toys
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-primary-content transition text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurStoryDetails;
