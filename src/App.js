import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Body from "./Components/Common/Body";
import Detail from "./Page/Detail";
import Home from "./Components/Layout/Home";
import Login from "./Components/User/Login";
import Notice from "./Page/Notice";
import Faq from "./Page/Faq";
import ByTheme from "./Page/ByTheme";
import ByRegion from "./Page/ByRegion";
import UserGet from "./Components/User/UserGet";
import UserUpdate from "./Components/User/UserUpdate";
import PageIntro from "./Page/PageIntro";
import Search from "./Page/Search";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* PageIntro를 기본 경로로 설정 */}
        <Route path="/" element={<PageIntro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/body" element={<Body />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/page/pageIntro" element={<PageIntro />} />
        <Route path="/page/bytheme" element={<ByTheme />} />
        <Route path="/page/byregion" element={<ByRegion />} />
        <Route path="/by-theme" element={<ByTheme />} />
        <Route path="/by-region" element={<ByRegion />} />
        <Route path="/user" element={<UserGet />} />
        <Route path="/user/update/:id" element={<UserUpdate />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;