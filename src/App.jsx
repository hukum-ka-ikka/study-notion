import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [user, setUser] = useState(false);

  const toggleUser = (user) => {
    setUser(!user);
  };

  return (
    <div className="min-h-[100vh] bg-[#00080F]">
      <ToastContainer autoClose="4000" />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute user={user}>
              <NavBar key="navbar" user={user} toggleUser={toggleUser} />
              <Dashboard key="dashboard" />
            </PrivateRoute>
          }
        />
        <Route
          path="/signup"
          element={[
            <NavBar key="navbar" user={user} toggleUser={toggleUser} />,
            <Signup key="signup" user={user} toggleUser={toggleUser} />,
          ]}
        />
        <Route
          path="/login"
          element={[
            <NavBar key="navbar" user={user} toggleUser={toggleUser} />,
            <LogIn key="login" user={user} toggleUser={toggleUser} />,
          ]}
        />
        <Route
          path="/"
          element={[
            <NavBar key="navbar" user={user} toggleUser={toggleUser} />,
            <Home key="home" />,
          ]}
        />
      </Routes>
    </div>
  );
}

export default App;
