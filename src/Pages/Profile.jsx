import React, { useState, useEffect, useContext } from "react";
import { FaUser, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import AuthContext from "../AuthContext/AuthContext";

const Profile = () => {
  const { user, updateUserProfile, loading } = useContext(AuthContext);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: "",
    photoURL: "",
  });

  // Load user data
  useEffect(() => {
    if (user) {
      setFormData({
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
      });
    }
  }, [user]);

  // Input change
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Save profile
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(formData);
      setIsEditing(false);
    } catch (err) {
      console.log(err);
    }
  };

  // Cancel edit
  const cancelEdit = () => {
    setFormData({
      displayName: user?.displayName || "",
      photoURL: user?.photoURL || "",
    });
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center">
        Please login to view your profile.
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto my-10 p-6 border rounded-lg  shadow">
      {/* Profile Picture */}
      <div className="flex justify-center mb-4">
        <img
          src={
            formData.photoURL ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border"
        />
      </div>

      {/* Profile View or Edit */}
      {isEditing ? (
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="text-sm">Full Name</label>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="text-sm">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-blue-500 text-white py-2 rounded flex items-center justify-center gap-2">
              <FaSave /> Save
            </button>
            <button
              type="button"
              onClick={cancelEdit}
              className="flex-1 bg-gray-300 py-2 rounded flex items-center justify-center gap-2">
              <FaTimes /> Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold">{user.displayName || "No Name"}</h2>
          <p className="text-gray-600 mt-1">{user.email}</p>

          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 bg-yellow-400 px-4 py-2 rounded flex items-center justify-center gap-2">
            <FaEdit /> Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
