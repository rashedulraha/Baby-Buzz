import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaGoogle,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
} from "react-icons/fa";
import Container from "../Components/Container";
import CommonButton from "../Components/CommonButton/CommonButton";
import AuthContext from "../AuthContext/AuthContext";
import { toast } from "react-toastify";
import WithGoogle from "../Components/CommonButton/WithGoogle";

const Login = () => {
  const navigate = useNavigate();
  const { LoginUser, loading } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    LoginUser(email, password)
      .then((userInformation) => {
        if (!userInformation?.user?.emailVerified) {
          toast.error("Please verify your email (check inbox)");
          return;
        }
        navigate("/");
      })
      .catch(() => {});
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      {loading ? (
        <span className="loading loading-spinner text-primary text-5xl"></span>
      ) : (
        <Container>
          <div className="flex justify-center">
            <div
              className="w-full max-w-md bg-base-100 rounded-2xl border border-base-300 p-8 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="100">
              <div className="mb-6">
                <Link
                  to="/"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition"
                  data-aos="fade-down">
                  <FaArrowLeft className="mr-2" />
                  Back
                </Link>
              </div>

              <h2 className="text-3xl font-bold text-center text-primary mb-2">
                Login to Your Account
              </h2>
              <p className="text-center text-base-content/70 mb-8">
                Welcome back! Please enter your credentials
              </p>

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-base-content/80 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50" />
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-4 py-3 input input-bordered focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-base-content/80 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50" />
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="••••••••"
                      className="w-full pl-10 pr-12 py-3 input input-bordered focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/60 hover:text-primary transition">
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary checkbox-sm"
                    />
                    <span className="ml-2 text-sm text-base-content/80">
                      Remember me
                    </span>
                  </label>
                  <Link
                    to="/user/forgotPassword"
                    className="text-sm text-accent hover:text-primary transition">
                    Forgot Password?
                  </Link>
                </div>

                <CommonButton type="submit" name="Login" />
              </form>

              <div className="my-6 relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-base-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-base-100 text-base-content/60">
                    Or continue with
                  </span>
                </div>
              </div>

              <WithGoogle />

              <p className="mt-6 text-center text-sm text-base-content/70">
                Don't have an account?{" "}
                <Link
                  to="/user/register"
                  className="font-semibold text-accent hover:text-primary transition">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Login;
