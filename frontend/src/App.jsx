import { Navigate, Route, Routes } from "react-router-dom";
import { Loader } from 'lucide-react';
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Setting from "./pages/Setting";
import Profile from "./pages/profileInfo";
import NotFound from "./pages/notFound";
import Navbar from "./components/navbar";
import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore()

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin" />
    </div>
  )
  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" exact element={authUser ? <Home /> : <Navigate to="/login" />} />
      <Route path="/signup" element={!authUser ? <Signup /> : <Navigate to="/" />} />
      <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/" />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/profile" element={authUser ? <Profile /> : <Navigate to="/login" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
