import { Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Setting from "./pages/Setting"
import Profile from "./pages/Profile"

function App() {

  return (
    <>
      <Routes>
      <Route path="/" exact elements={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/setting" exact element={<Setting />} />
      <Route path="/profile/:userId" exact element={<Profile />} />
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="/signup" exact element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
