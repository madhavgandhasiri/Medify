import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import Details from "./pages/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details/>} />
        <Route path="/my-bookings" element={<Bookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
