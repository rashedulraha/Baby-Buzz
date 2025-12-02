import React, { useContext, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import AuthContext from "../../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const WithGoogle = () => {
  const navigate = useNavigate();
  const { WithGoogle: signInWithGoogle, user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
    } catch (error) {
      toast.error("Google login failed. Please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleWithGoogle}
      disabled={isLoading}
      className="btn btn-block btn-outline border-base-300 hover:bg-primary hover:border-primary hover:text-primary-content normal-case font-medium shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60">
      {isLoading ? (
        <>
          <span className="loading loading-spinner loading-sm"></span>
          Signing in...
        </>
      ) : (
        <>
          <FaGoogle className="text-lg" />
          Continue with Google
        </>
      )}
    </button>
  );
};

export default WithGoogle;
