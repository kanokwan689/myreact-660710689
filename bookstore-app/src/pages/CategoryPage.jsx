// src/pages/CategoryPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom'; // ใช้ useParams เพื่อดึงชื่อหมวดหมู่จาก URL

const CategoryPage = () => {
  // ใช้ useParams เพื่อดึงค่า parameter จาก URL
  // สมมติว่า URL pattern ของคุณคือ /category/:categoryName
  const { categoryName } = useParams();

  return (
    <div className="page-container">
      <h1>Category: {categoryName ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1) : 'Unknown Category'}</h1>
      {/*
        ในส่วนนี้ คุณจะทำการ fetch รายชื่อหนังสือที่อยู่ในหมวดหมู่นี้
        แล้วนำมาแสดงผล เช่น ใช้ map() เพื่อวนลูปแสดงรายการหนังสือ
        ตัวอย่าง:
        <div className="book-list">
          {booksInCategory.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      */}
      <p>Displaying books for the category: <strong>{categoryName}</strong></p>
      <p>This page will list all books belonging to the selected category.</p>
    </div>
  );
};

export default CategoryPage;