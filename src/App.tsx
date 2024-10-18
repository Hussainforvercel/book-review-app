import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import LoginPage from "./pages/LoginPage";
import SingupPage from "./pages/singupPage";
import ReviewPage from "./pages/ReviewPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfile from "./components/profile/EditProfile";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/reviews" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SingupPage />} />
        <Route path="/reviews/*" element={<ReviewPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<EditProfile />} />
      </Routes>
    </>
  );
};

export default App;
