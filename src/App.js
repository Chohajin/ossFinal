import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Body from "./Components/Common/Body";
import Detail from "./Page/Detail";
import Home from "./Components/Layout/Home";
import Login from "./Page/Login";
import Notice from "./Page/Notice";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Notice" element={<Notice />} />
        <Route path="/body" element={<Body />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
