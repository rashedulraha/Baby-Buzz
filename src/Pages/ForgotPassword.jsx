import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";
import Container from "../Components/Container";
import CommonButton from "../Components/CommonButton/CommonButton";
import AuthContext from "../AuthContext/AuthContext";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await resetPassword(email);
      toast.success("Password reset email sent! Check your inbox.");
      setTimeout(() => navigate("/user/login"), 3000);
    } catch (error) {
      console.error("Password reset error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <Container>
        <div className="flex justify-center">
          <div
            className="bg-base-100 rounded-md border border-primary p-6 w-full max-w-md shadow-lg"
            data-aos="fade-up">
            <div className="mb-4">
              <Link
                to="/user/login"
                className="inline-flex items-center text-accent hover:text-primary transition"
                data-aos="fade-down">
                <FaArrowLeft className="mr-2" />
                Back
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-base-content mb-2 text-center">
              Forgot Password
            </h2>
            <p className="text-base-content/70 text-center mb-6">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-base-content/80 text-sm font-medium mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40 text-sm" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full pl-10 pr-3 py-2.5 border border-base-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                  />
                </div>
              </div>

              <CommonButton
                type="submit"
                name={isSubmitting ? "Sending..." : "Reset Password"}
                disabled={isSubmitting}
              />
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-base-content/70">
                Remember your password?{" "}
                <Link
                  to="/user/login"
                  className="font-medium text-accent hover:text-primary transition">
                  Back to Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ForgotPassword;
