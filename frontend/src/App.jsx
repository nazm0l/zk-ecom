import { Route, Routes } from "react-router";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;
