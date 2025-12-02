import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaCamera,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
} from "react-icons/fa";
import Container from "../Components/Container";
import CommonButton from "../Components/CommonButton/CommonButton";
import WithGoogle from "../Components/CommonButton/WithGoogle";
import AuthContext from "../AuthContext/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { Register, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const RegEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!RegEx.test(password)) {
      toast.error("Must contain uppercase, lowercase & min 6 characters");
      return;
    }

    Register(email, password, fullname, photoUrl)
      .then(() => {
        toast.success("Account created successfully");
        navigate("/");
      })
      .catch(() => {});
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <Container>
        <div className="flex justify-center">
          <div
            className="bg-base-100 rounded-md border border-primary p-6 w-full max-w-md shadow-lg"
            data-aos="fade-up">
            <div className="mb-4">
              <Link
                to="/"
                className="inline-flex items-center text-accent hover:text-primary transition"
                data-aos="fade-down">
                <FaArrowLeft className="mr-2" />
                Back
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-2 text-center">
              Create Your Account
            </h2>

            <form className="space-y-4" onSubmit={handleRegister}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-base-content/80 text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40 text-sm" />
                    <input
                      name="fullname"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="w-full pl-10 pr-3 py-2.5 border border-base-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-base-content/80 text-sm font-medium mb-1">
                    Photo URL
                  </label>
                  <div className="relative">
                    <FaCamera className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40 text-sm" />
                    <input
                      name="photoUrl"
                      type="url"
                      placeholder="https://example.com/photo.jpg"
                      className="w-full pl-10 pr-3 py-2.5 border border-base-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                    />
                  </div>
                </div>
              </div>

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
                <p className="text-xs text-base-content/60 mt-1">
                  Must contain uppercase, lowercase & min 6 characters.
                </p>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm mt-1"
                  required
                />
                <label className="ml-3 text-sm text-base-content/80">
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="text-accent hover:text-primary transition">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="text-accent hover:text-primary transition">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <CommonButton
                type="submit"
                name={
                  loading ? (
                    <>
                      Registering...{" "}
                      <span className="loading loading-spinner loading-sm ml-2"></span>
                    </>
                  ) : (
                    "Register"
                  )
                }
              />
            </form>

            <div className="my-4 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-base-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-base-100 text-base-content/60">
                    Or continue with
                  </span>
                </div>
              </div>
            </div>

            <WithGoogle />

            <p className="mt-4 text-center text-sm text-base-content/70">
              Already have an account?{" "}
              <Link
                to="/user/login"
                className="font-medium text-accent hover:text-primary transition">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
