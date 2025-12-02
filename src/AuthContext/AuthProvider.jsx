import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import AuthContext from "./AuthContext";
import { auth } from "../FirebaseAuth/Firebase.init";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

//! Provider
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authInitialized, setAuthInitialized] = useState(false); // Add this state

  //! Register user
  const Register = async (email, password) => {
    setLoading(true);
    try {
      const userInformation = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userInformation?.user;
      await sendEmailVerification(user);
      setUser(user);
      toast.success("Registration successful! Verification email sent.");
      return user;
    } catch (error) {
      toast.error(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  //! Login user
  const LoginUser = async (email, password) => {
    setLoading(true);
    try {
      const userInformation = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userInformation.user);
      toast.success("Logged in successfully!");
      return userInformation.user;
    } catch (error) {
      toast.error(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  //! Google Sign-In
  const WithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, GoogleProvider);
      setUser(result.user);
      toast.success("Logged in with Google!");
      return result.user;
    } catch (error) {
      toast.error("Google login failed: " + error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  //! Update user profile
  const updateUserProfile = async ({ displayName, photoURL }) => {
    try {
      if (!auth.currentUser) {
        throw new Error("No user logged in");
      }

      // Update the profile in Firebase
      await updateProfile(auth.currentUser, { displayName, photoURL });

      // Get the updated user object
      const updatedUser = auth.currentUser;

      // Force update the user state to trigger a re-render
      setUser({ ...updatedUser });

      toast.success("Profile updated successfully!");
      return true;
    } catch (error) {
      toast.error("Failed to update profile: " + error.message);
      throw error;
    }
  };

  //! Forgot password
  const resetPassword = async (email) => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Check your inbox.");
      return true;
    } catch (error) {
      toast.error("Failed to send reset email: " + error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  //! Logout user
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      toast.error("Logout failed: " + error.message);
      throw error;
    }
  };

  //! Observer and get user data
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      setAuthInitialized(true); // Set authInitialized to true when auth state is determined
    });

    return () => unSubscribe();
  }, []);

  const userAuthentication = {
    Register,
    LoginUser,
    user,
    loading,
    logout,
    WithGoogle,
    updateUserProfile,
    resetPassword,
    authInitialized, // Add this to the context value
  };

  return <AuthContext value={userAuthentication}>{children}</AuthContext>;
};

export default AuthProvider;
