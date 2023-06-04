import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Kantin from "./pages/Kantin";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import SearchBar from "./pages/SearchBar";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/kantin" element={<Kantin />} />
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/searchbar" element={<SearchBar />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    
  );
}

export default App;
