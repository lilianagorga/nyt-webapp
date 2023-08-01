import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Section from "./pages/Section";
import Search from './pages/Search';
import Show from './pages/Show';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/styles/global.css";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/section/:section" element={<Section />} />
          <Route exact path="/search/:search" element={<Search />} />
          <Route exact path="/show/:show" element={<Show />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
