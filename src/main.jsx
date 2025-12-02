import { StrictMode, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AOS from "aos";

import "./index.css";
import router from "./Routes/Routes";
import AuthProvider from "./AuthContext/AuthProvider";
import { ToastContainer } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out",
      offset: 80,
    });
  }, []);
  return null;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AOSInitializer />
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
