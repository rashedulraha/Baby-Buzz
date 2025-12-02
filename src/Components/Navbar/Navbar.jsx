import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
  navLinks = [
    { to: "/", icon: FaHome, label: "Home" },
    { to: "/seller", icon: FaStore, label: "Sellers" },
    { to: "/wishlist", icon: FaHeart, label: "Wishlist" },
  ],
  loginPath = "/user/login",
  registerPath = "/user/register",
  customClass = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, authInitialized } = useContext(AuthContext);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logout Successfully");
    } catch (error) {
      toast.error("Logout failed" + error.message);
    }
  };

  const AuthButtons = () => (
    <div className="flex items-center gap-3">
      <ThemeToggle />
      {user ? (
        <>
          {/* User Avatar with Tooltip */}
          <div className="relative group">
            <img
              src={user.photoURL || "/default-avatar.png"}
              alt={user.displayName || "User"}
              className="w-10 h-10 rounded-full border-2 border-primary cursor-pointer object-cover"
              onError={(e) => (e.target.src = "/default-avatar.png")}
            />
            <div className="absolute -top-1 -right-1 bg-success w-4 h-4 rounded-full border-2 border-base-100"></div>

            <div className="absolute top-full right-0 mt-2 px-4 py-2 bg-base-100 border border-base-300 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50 min-w-40">
              <p className="text-sm font-medium text-base-content truncate">
                {user.user_metadata?.name || user.displayName || user.email}
              </p>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="px-5 py-2.5 bg-primary text-primary-content rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium">
            Logout
          </button>
        </>
      ) : (
        <>
          {/* Login Button */}
          <Link
            to={loginPath}
            className="flex items-center gap-2 px-5 py-2.5 border border-base-content/20 text-base-content rounded-lg hover:bg-base-content hover:text-base-100 transition-all duration-200 font-medium">
            <FaUser />
            Login
          </Link>

          {/* Register Button */}
          <Link
            to={registerPath}
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-content rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium">
            <FaUser />
            Register
          </Link>
        </>
      )}
    </div>
  );

  const NavItem = ({ link, isMobile = false }) => {
    const Icon = link.icon;

    return (
      <NavLink
        to={link.to}
        end
        className={({ isActive }) =>
          `flex items-center gap-2 font-medium transition-all duration-200
          ${
            isActive
              ? "text-primary"
              : "text-base-content/70 hover:text-primary"
          }
          ${isMobile ? "py-3 text-lg" : "py-2"}`
        }
        onClick={() => isMobile && setIsOpen(false)}>
        <Icon className="text-lg" />
        {link.label}
      </NavLink>
    );
  };

  const ProfileLink = () => {
    if (!user) return null;

    return (
      <NavLink
        to="/profile"
        end
        className={({ isActive }) =>
          `flex items-center gap-2 font-medium transition-all duration-200
          ${
            isActive
              ? "text-primary"
              : "text-base-content/70 hover:text-primary"
          }`
        }
        onClick={() => setIsOpen(false)}>
        <FaIdCard className="text-lg" />
        My Profile
      </NavLink>
    );
  };

  // Loading State
  if (!authInitialized) {
    return (
      <nav className={`bg-base-100 shadow-lg sticky top-0 z-50 ${customClass}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-3xl font-bold text-primary">
              {logo}
            </Link>
            <div className="loading loading-spinner text-primary"></div>
            <button onClick={toggleMenu} className="md:hidden">
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
    <nav className={`bg-base-100 shadow-lg sticky top-0 z-50 ${customClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold text-primary hover:opacity-90 transition">
            {logo}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <NavItem key={i} link={link} />
            ))}
            <ProfileLink />
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center">
            <AuthButtons />
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-base-content focus:outline-none">
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-base-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <NavItem key={i} link={link} isMobile />
              ))}
              <ProfileLink />

              <div className="pt-4 mt-4 border-t border-base-300">
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
