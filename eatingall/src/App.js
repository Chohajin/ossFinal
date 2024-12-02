import React from "react";
import Home from "./Components/Layout/Home"; // Home.js가 위치한 폴더에 맞춘 경로
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";


function App() {
  return (
    <div>
      {/* Home 컴포넌트를 메인으로 렌더링 */}
      <Header/>
      <Home />
      <Footer />
      
    </div>
  );
}

export default App;
