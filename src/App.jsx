import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Menu from './pages/Menu';
import Catering from './pages/Catering';
import About from './pages/About';
import Contact from './pages/Contact';
import { OrderProvider } from './context/OrderContext';

export default function App() {
  return (
    <OrderProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="menu" element={<Menu />} />
          <Route path="catering" element={<Catering />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* Wildcard redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </OrderProvider>
  );
}
