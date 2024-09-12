//ไฟล์ JavaScript จัดการกับการกดปุ่ม Login และตรวจสอบว่ามีการกรอกข้อมูลในฟอร์มหรือไม่
document.getElementById('loginButton').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var googleAuth = document.getElementById('googleAuth').checked;

    if (username === "" || password === "") {
        alert("กรุณากรอก Username และ Password");
    } else {
        if (googleAuth) {
            alert("คุณเลือกการยืนยันตัวตนด้วย Google");
        }
        alert("Username: " + username + "\nPassword: " + password);
    }
});

