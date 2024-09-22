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


//ตรวจสอบว่ามีการกรอกข้อมูลในฟิลด์ทั้งหมดหรือไม่ หากกรอกครบก็จะแสดงข้อความ "บันทึกข้อมูลเรียบร้อย"
// หากไม่ครบจะเปลี่ยนสีเส้นขอบของช่องที่ไม่ได้กรอกเป็นสีแดงและแสดงข้อความเตือนแทน

// เลือกฟอร์ม
const form = document.querySelector('form');

// ฟังก์ชันตรวจสอบข้อมูล
function validateForm(event) {
    // ป้องกันการส่งฟอร์มโดยอัตโนมัติ
    event.preventDefault();

    // เก็บข้อมูลจากฟอร์ม
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    // ตรวจสอบแต่ละช่องว่าใส่ข้อมูลครบถ้วนหรือไม่
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            input.style.border = '2px solid red'; // เปลี่ยนสีเส้นขอบเป็นสีแดงเพื่อบ่งบอกว่าข้อมูลไม่ถูกต้อง
        } else {
            input.style.border = '1px solid gray'; // เปลี่ยนกลับเป็นสีปกติเมื่อข้อมูลถูกต้อง
        }
    });

    // ถ้าข้อมูลถูกต้อง ให้ทำการบันทึก (คุณสามารถเปลี่ยนไปใช้การบันทึกข้อมูลผ่าน API ได้)
    if (isValid) {
        alert('บันทึกข้อมูลเรียบร้อย');
        // คุณสามารถส่งข้อมูลผ่าน API ได้ที่นี่
        // เช่น:
        // fetch('API_ENDPOINT', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formData) // formData คือข้อมูลที่รวบรวมจากฟอร์ม
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
    } else {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
}

// เพิ่ม event listener สำหรับการส่งฟอร์ม
form.addEventListener('submit', validateForm);
