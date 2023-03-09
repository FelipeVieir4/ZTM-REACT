import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { UserProvider } from "./contexts/user.context.jsx";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartDropdownProvider } from "./contexts/cart-dropdown.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartDropdownProvider>
            <App />
          </CartDropdownProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
