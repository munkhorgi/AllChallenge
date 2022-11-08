
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import GetAccess from "./pages/GetAccess";
import Login from "./pages/LogIn";
import Services from "./pages/Services";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/getAccess" element={<GetAccess />} />
      </Routes>
    </div>
  );
}

export default App;
