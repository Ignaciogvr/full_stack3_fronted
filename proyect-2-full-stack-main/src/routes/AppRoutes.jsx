import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import StatisticsPage from "../pages/StatisticsPage";
import AboutPage from "../pages/AboutPage";

import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";

import AdminPage from "../pages/AdminPage";
import ProtectedAdmin from "../components/ProtectedAdmin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/catalogo" element={<CatalogPage />} />
      <Route path="/producto/:id" element={<ProductPage />} />

      <Route path="/carrito" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />

      <Route path="/perfil" element={<ProfilePage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/forgot" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />

      {/* 🔥 RUTA ADMIN PROTEGIDA */}
      <Route
        path="/admin"
        element={
          <ProtectedAdmin>
            <AdminPage />
          </ProtectedAdmin>
        }
      />

      <Route path="/estadisticas" element={<StatisticsPage />} />

      <Route path="/about" element={<AboutPage />} />

      <Route path="*" element={<h1>Página no encontrada</h1>} />
    </Routes>
  );
};

export default AppRoutes;
