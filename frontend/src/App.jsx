import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Setting from "./pages/Setting";
import Profile from "./pages/profileInfo";
import NotFound from "./pages/notFound";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
