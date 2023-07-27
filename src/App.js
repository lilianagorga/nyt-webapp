import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Section from "./pages/Section";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/section/:section" element={<Section />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
