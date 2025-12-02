import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import {
  FaHome,
  FaStore,
  FaUser,
  FaBars,
  FaTimes,
  FaHeart,
  FaIdCard,
} from "react-icons/fa";

import AuthContext from "../../AuthContext/AuthContext";
import { toast } from "react-toastify";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = ({
  logo = "BabyBuzz",
  logoColor = "#FF6B6B",

  //! navLink
  navLinks = [
    { to: "/", icon: FaHome, label: "Home" },
    { to: "/seller", icon: FaStore, label: "Sellers" },
    { to: "/wishlist", icon: FaHeart, label: "Wishlist" },
  ],

  // ! Path
  loginPath = "/user/login",
  registerPath = "/user/register",
  customClass = "",
  //!
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, authInitialized } = useContext(AuthContext);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logout Successfully");
    } catch (error) {
      toast.error("Logout failed:", error);
    }
  };

  const AuthButtons = () => (
    <div className="flex items-center gap-3">
      <ThemeToggle />
      {user ? (
        <>
          <Link to={"/profile"} className="relative group">
            <img
              src={user.photoURL}
              alt={user.displayName || "User"}
              className="w-10 h-10 rounded-full border-2 border-[#FF6B6B] cursor-pointer"
              onError={(e) => {
                e.target.src = "/default-avatar.png";
              }}
            />
            <div className="absolute -top-2 -right-2 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
            <div className="absolute top-full right-0 mt-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap z-50 min-w-[150px]">
              <p className="text-sm font-medium text-gray-700 truncate max-w-[140px]">
                {user.user_metadata?.name || user.displayName || user.email}
              </p>
            </div>
          </Link>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#FF5252] transition-all duration-200 font-medium cursor-pointer">
            Logout
          </button>
        </>
      ) : (
        <>
          <Link
            to={loginPath}
            className="flex items-center px-4 py-2 border border-[#0F172A] text-[#0F172A] rounded-lg hover:bg-[#0F172A] hover:text-white transition-all duration-200">
            <FaUser className="mr-2" />
            Login
          </Link>
          <Link
            to={registerPath}
            className="flex items-center px-4 py-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#FF5252] transition-all duration-200">
            <FaUser className="mr-2" />
            Register
          </Link>
        </>
      )}
    </div>
  );

  // Navigation Link Component for both desktop and mobile
  const NavItem = ({ link, isMobile = false }) => {
    const Icon = link.icon;

    return (
      <NavLink
        to={link.to}
        className={({ isActive }) =>
          `flex items-center ${
            isActive
              ? "text-[#FF6B6B] font-semibold"
              : "text-gray-700 hover:text-[#FF6B6B]"
          } transition-all duration-200 ${isMobile ? "py-2" : ""}`
        }
        onClick={() => isMobile && setIsOpen(false)}>
        <Icon className="mr-2" />
        {link.label}
      </NavLink>
    );
  };

  // profile NavLink
  const ProfileLink = () => {
    if (!user) return null;

    return (
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `flex items-center ${
            isActive
              ? "text-[#FF6B6B] font-semibold"
              : "text-gray-700 hover:text-[#FF6B6B]"
          } transition-all duration-200`
        }
        onClick={() => setIsOpen(false)}>
        <FaIdCard className="mr-2" />
        My Profile
      </NavLink>
    );
  };

  // Show a loading state while auth is being initialized
  if (!authInitialized) {
    return (
      <nav className={`bg-white shadow-md sticky top-0 z-50 ${customClass}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold" style={{ color: logoColor }}>
                {logo}
              </span>
            </Link>

            {/* Loading indicator */}
            <div className="flex items-center space-x-4">
              <span className="loading loading-spinner text-[#FF6B6B]"></span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-[#0F172A] focus:outline-none">
              {isOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`bg-white shadow-md sticky top-0 z-50 ${customClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold" style={{ color: logoColor }}>
              {logo}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <NavItem key={index} link={link} />
            ))}
            {/* Add Profile Link to Desktop Navigation */}
            <ProfileLink />
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <AuthButtons />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#0F172A] focus:outline-none">
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <NavItem key={index} link={link} isMobile={true} />
              ))}
              {/* Add Profile Link to Mobile Navigation */}
              <ProfileLink isMobile={true} />

              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-gray-200">
                <AuthButtons />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
