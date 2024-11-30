import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />} path="/">
            <Route element={<Home />} index />
            <Route element={<Login />} path="login" />
            <Route element={<Register />} path="register" />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
