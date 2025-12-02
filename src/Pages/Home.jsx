import { FaStar, FaBoxOpen } from "react-icons/fa";
import useProductFetch from "../Hook/useProductFetch";
import Container from "../Components/Container";
import Card from "../Components/Card/Card";
import useArrivalsFetch from "../Hook/useArrivalsFetch";
import Arrival from "../Components/Card/Arrival";
import OurStory from "../Components/OurStory/OurStory";
import Carousel from "../Components/Carousel/Carousel";

const Home = () => {
  const { product } = useProductFetch();
  const sliceData = product.data?.slice(0, 8);

  const { Arrivals } = useArrivalsFetch();
  const ArrivalsData = Arrivals?.data;

  return (
    <div className="min-h-screen bg-base-100">
      <Container>
        <div data-aos="fade-down">
          <Carousel />
        </div>

        <section className="py-12 md:py-16">
          <div className="flex items-center gap-3 mb-8" data-aos="fade-up">
            <FaStar className="text-primary text-3xl" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Popular Toys
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sliceData?.map((cardData, index) => (
              <div
                key={cardData?.id}
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}>
                <Card cardData={cardData} />
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="flex items-center gap-3 mb-8" data-aos="fade-up">
            <FaBoxOpen className="text-secondary text-3xl" />
            <h2 className="text-3xl md:text-4xl font-bold text-base-content">
              New Arrivals
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ArrivalsData?.map((item, index) => (
              <div
                key={item?.id}
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}>
                <Arrival Arrivals={item} />
              </div>
            ))}
          </div>
        </section>

        <div data-aos="fade-up">
          <OurStory />
        </div>
      </Container>
    </div>
  );
};

export default Home;
