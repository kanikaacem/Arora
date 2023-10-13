import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-listing" element={<ProductListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
