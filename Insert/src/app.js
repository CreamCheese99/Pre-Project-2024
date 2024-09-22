//เมื่อคลิกปุ่ม "บันทึก" จะมีการแสดงข้อความแจ้งเตือน "ข้อมูลได้ถูกบันทึกแล้ว!
document.addEventListener('DOMContentLoaded', function() {
    // เพิ่ม event listener สำหรับปุ่มบันทึกข้อมูล
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บ
        alert('ข้อมูลได้ถูกบันทึกแล้ว!');
    });
});



// // ฟังก์ชันสำหรับการจัดการฟอร์มเมื่อกดปุ่ม "บันทึก"
// function handleSubmit(event) {
//     event.preventDefault(); // ป้องกันการส่งฟอร์มตามปกติ

//     // ดึงค่าจากฟอร์ม
//     const fileInput = document.querySelector('input[type="file"]');
//     const orderNumber = document.querySelector('input[name="order-number"]').value;
//     const category = document.querySelector('input[name="category"]').value;
//     const type = document.querySelector('input[name="type"]').value;
//     const subtype = document.querySelector('input[name="subtype"]').value;
//     const unit = document.querySelector('input[name="unit"]').value;
//     const details = document.querySelector('textarea[name="details"]').value;

//     // แสดงค่าที่ได้รับจากฟอร์มในคอนโซล
//     console.log("File:", fileInput.files[0]);
//     console.log("Order Number:", orderNumber);
//     console.log("Category:", category);
//     console.log("Type:", type);
//     console.log("Subtype:", subtype);
//     console.log("Unit:", unit);
//     console.log("Details:", details);

//     // แสดงข้อความให้ผู้ใช้ทราบ
//     alert("บันทึกข้อมูลเรียบร้อยแล้ว");
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('form');
//     form.addEventListener('submit', handleSubmit);
// });
