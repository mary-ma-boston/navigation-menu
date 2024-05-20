import { Route, Routes } from "react-router-dom";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import Home from "./components/Home";
import Products from "./components/Products/Products";
import Pricing from "./components/Pricing";
import About from "./components/About";

import "./App.css";

function App() {
  return (
    <>
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
