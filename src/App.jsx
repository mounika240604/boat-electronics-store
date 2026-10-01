import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>

          <BrowserRouter>

            <Navbar />

            <main>
              <Routes>

                <Route
                  path="/"
                  element={<Home />}
                />

                <Route
                  path="/products"
                  element={<Products />}
                />

                <Route
                  path="/products/:id"
                  element={<ProductDetails />}
                />

                <Route
                  path="/about"
                  element={<About />}
                />

                <Route
                  path="/contact"
                  element={<Contact />}
                />

                <Route
                  path="/login"
                  element={<Login />}
                />

                <Route
                  path="/signup"
                  element={<SignUp />}
                />

              </Routes>
            </main>

            <Footer />
            <Toast />

          </BrowserRouter>

        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;