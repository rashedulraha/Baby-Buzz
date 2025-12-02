import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome, FaArrowLeft } from "react-icons/fa";
import Container from "../Components/Container";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <Container>
        <div
          className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100">
          {/* Large 404 Background */}
          <div className="mb-8 relative">
            <h1 className="text-9xl md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary opacity-20 absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none">
              404
            </h1>
            <h1 className="text-7xl md:text-9xl font-bold text-base-content relative">
              404
            </h1>
          </div>

          {/* Warning Icon with Bounce */}
          <div className="mb-8 animate-bounce">
            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-primary-content shadow-2xl">
              <FaExclamationTriangle className="text-5xl" />
            </div>
          </div>

          {/* Message */}
          <h2 className="text-3xl md:text-5xl font-bold text-base-content mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-base-content/70 text-lg mb-10 max-w-lg leading-relaxed">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-content font-semibold rounded-lg hover:bg-primary/90 transition shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200">
              <FaHome />
              Back to Home
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 border border-base-content/30 text-base-content font-semibold rounded-lg hover:bg-base-200 transition"
              data-aos="fade-up"
              data-aos-delay="300">
              <FaArrowLeft />
              Go Back
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
