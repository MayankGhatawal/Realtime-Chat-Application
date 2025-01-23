import { createBrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Setting from "./pages/Setting"
import Profile from "./pages/profileInfo"
import { RouterProvider } from "react-router-dom"
import NotFound from "./pages/NotFound"

function App() {

  // Implementing Protected Routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/setting",
      element: <Setting />,
    },
    {
      path: "/profile/:userId",
      element: <Profile />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ])
  

  return <RouterProvider router={router} />;
}

export default App
