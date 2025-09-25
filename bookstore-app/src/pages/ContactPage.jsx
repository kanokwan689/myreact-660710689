

import { useParams } from 'react-router-dom'; // Import useParams (แม้จะยังไม่ได้ใช้ใน return)

const ContactPage = () => {
  return (
    <div className="ContactPage">
      <h1>ContactPage</h1>
      <p>This is where the details of a specific book will be displayed.</p>
      <p>You can add book information, images, price, etc. here later.</p>
      {/* ในอนาคต จะมี logic ดึง ID จาก URL และแสดงข้อมูลหนังสือ */}
    </div>
  );
};

// **ส่วนสำคัญที่ทำให้ Error ก่อนหน้านี้หายไป**
export default ContactPage; // <--- นี่คือสิ่งที่ทำให้ Error หายไป