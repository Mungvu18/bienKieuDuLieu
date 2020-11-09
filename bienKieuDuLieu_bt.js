let vLy,hoa,toan;
vLy = prompt("Nhập điểm vật lý của bạn:");
hoa = prompt("Nhập điểm hóa của bạn");
toan = prompt("Nhập điểm toán của bạn");
// khi nhập dữ liệu bằng hàm prompt các dữ liệu đầu vào của chúng ta mới ở dạng dữ liệu kiểu string
// muốn sử dụng chúng thì phải chuyển kiểu về kiểu số nguyên bằng parseInt() để tính toán
// chuyển kiểu dữ liệu với hàm parseInt();
vLy = parseInt(vLy);
hoa = parseInt(hoa);
toan = parseInt(toan);
let total = (vLy+toan+hoa)*1.0;
let avg = total/3.0;
document.write("Điểm tổng 3 môn của bạn là:" + total);
document.write("Điểm trung bình của bạn là:" + avg);