import React, { Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*lazy loading the componet */
const Home = React.lazy(() => import('./pages/Home'));
const ProductListing = React.lazy(() => import('./pages/ProductListing'));
const ProductDescription = React.lazy(() => import('./pages/ProductDescription'));

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Suspense fallback={<>...</>}>
          <Home />
        </Suspense>} />
        <Route path="/product-listing/:productCategory?" element={<Suspense fallback={<>...</>}>
          <ProductListing />
        </Suspense>
        } />
        <Route path="/product-description/:id?" element={<Suspense fallback={<>...</>}>
          <ProductDescription />
        </Suspense>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
