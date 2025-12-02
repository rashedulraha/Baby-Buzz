import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
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
          toast.error("please verify your email to check your inbox");
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
        <span className="loading loading-spinner text-primary text-6xl"></span>
      ) : (
        <Container>
          <div className="flex justify-center">
            <div
              className="bg-base-100 rounded-md border border-primary p-6 w-full max-w-md shadow-lg"
              data-aos="fade-up">
              <div className="flex items-center mb-4">
                <Link
                  to="/"
                  className="flex items-center text-accent hover:text-primary transition"
                  data-aos="fade-down">
                  <FaArrowLeft className="mr-2" />
                  Back
                </Link>
              </div>

              <h2 className="text-2xl font-bold text-primary mb-2 text-center">
                Login to Your Account
              </h2>
              <p className="text-base-content/70 text-center mb-6">
                Welcome back! Please enter your credentials
              </p>

              <form className="space-y-4" onSubmit={handleLogin}>
                <div>
                  <label className="block text-base-content/80 text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40 text-sm" />
                    <input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full pl-10 pr-3 py-2.5 border border-base-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-base-content/80 text-sm font-medium mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40 text-sm" />
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      className="w-full pl-10 pr-12 py-2.5 border border-base-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/50 hover:text-primary transition">
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
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

              <div className="mt-4 text-center">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-base-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-base-100 text-base-content/60">
                      Or continue with
                    </span>
                  </div>
                </div>
              </div>

              <WithGoogle />

              <div className="mt-4 text-center">
                <p className="text-sm text-base-content/70">
                  Don't have an account?{" "}
                  <Link
                    to="/user/register"
                    className="font-medium text-accent hover:text-primary transition">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Login;
