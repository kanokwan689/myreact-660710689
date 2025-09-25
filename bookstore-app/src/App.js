// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import NotFound from './components/NotFound';

import HomePage from './pages/HomePage';

import BookDetailPage from './pages/BookDetailPage';

import AboutPage from './pages/AboutPage';

import CategoryPage from './pages/CategoryPage';

import ContactPage from './pages/ContactPage';



function App() {
  return (
    <div className="App">
      {/* Navigation Bar - แสดงในทุกหน้า */}
      <Navbar />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<HomePage />} />





        {/* Route สำหรับหน้า Books */}
            <Route path="/books" element={<BookDetailPage />} />

        {/* Route สำหรับหน้าแสดงรายการหนังสือตามหมวดหมู่ */}
          <Route path="/category/fiction" element={<CategoryPage />} />

        {/* Route สำหรับหน้า AboutPage */}
            <Route path="/about" element={<AboutPage />} />    

        {/* Route สำหรับหน้า AboutPage */}
            <Route path="/contact" element={<ContactPage />} />  



        {/* Route หน้า 404 - สำหรับ URL ที่ไม่มีอยู่ */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

      {/* Footer - แสดงในทุกหน้า */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;