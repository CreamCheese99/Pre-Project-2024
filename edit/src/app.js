// script.js
<script src="index.html">
if ('WebSocket' in window) {
    (function () {
        function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
                var elem = sheets[i];
                var parent = elem.parentElement || head;
                parent.removeChild(elem);
                var rel = elem.rel;
                if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                    var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                    elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                }
                parent.appendChild(elem);
            }
        }
        var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
        var address = protocol + window.location.host + window.location.pathname + '/ws';
        var socket = new WebSocket(address);
        socket.onmessage = function (msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
        };
        if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
            console.log('Live reload enabled.');
            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
        }
    })();
}
else {
    console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}

// ฟังก์ชันสำหรับการจัดการฟอร์มเมื่อกดปุ่ม "บันทึก"
function handleSubmit(event) {
event.preventDefault(); // ป้องกันการส่งฟอร์มตามปกติ

// ดึงค่าจากฟอร์ม
const fileInput = document.querySelector('input[type="file"]');
const orderNumber = document.querySelector('input[name="order-number"]').value;
const category = document.querySelector('input[name="category"]').value;
const type = document.querySelector('input[name="type"]').value;
const subtype = document.querySelector('input[name="subtype"]').value;
const unit = document.querySelector('input[name="unit"]').value;
const details = document.querySelector('textarea[name="details"]').value;

// แสดงค่าที่ได้รับจากฟอร์มในคอนโซล
console.log("File:", fileInput.files[0]);
console.log("Order Number:", orderNumber);
console.log("Category:", category);
console.log("Type:", type);
console.log("Subtype:", subtype);
console.log("Unit:", unit);
console.log("Details:", details);

// แสดงข้อความให้ผู้ใช้ทราบ
alert("บันทึกข้อมูลเรียบร้อยแล้ว");
}

document.addEventListener('DOMContentLoaded', function () {
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
});


document.addEventListener('DOMContentLoaded', function () {
// ค้นหาทุกลิงก์ในรายการ
const links = document.querySelectorAll('a');

// เพิ่ม event listener สำหรับการคลิก
links.forEach(link => {
    link.addEventListener('click', function (event) {
        // ป้องกันการเปลี่ยนเส้นทาง
        event.preventDefault();

        // ลบคลาส 'active' จากลิงก์ทั้งหมด
        links.forEach(l => l.classList.remove('active'));

        // เพิ่มคลาส 'active' ไปยังลิงก์ที่คลิก
        this.classList.add('active');

        // แสดงตำแหน่งของลิงก์ที่คลิก
        const rect = this.getBoundingClientRect();
        console.log(`ตำแหน่งที่คลิก: X=${rect.left}, Y=${rect.top}`);
    });
});
});
</script>