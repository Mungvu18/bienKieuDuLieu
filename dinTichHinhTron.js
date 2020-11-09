/* viết chương trình tính diện tích hình tròn
Phân tích bài: Nhập bán kinh r bằng hàm prompt ()
chuyển kiểu dữ lieuj string sang int băng parseInt()
xuất dữ liệu ra màn hình là document.write alert console.log
 */
Pi = Math.PI;
let r = prompt("mời bạn nhập bán kinh đường tròn:")
    r = parseInt(r)
let S = r*r*Pi
let P = 2*r*Pi
alert("Diện tích hình tròn là:"+S)
document.getElementById('demo').innerText = P;
