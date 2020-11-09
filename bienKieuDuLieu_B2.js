/* viết chuong trình nhập một giá trị là độ Celcius và chuyển nó sang đọ 0F fahrenheit
Phân tích bài: để nhập dữ liệu ta dung hàm prompt rồi chuyển kiểu dư liệu strinh thành int bằng parseInt
xuất dữ liệu ra mà hình dung alert document.write hoặc conlsoe.log()
 */
let cels = prompt("Mời bạn nhập giá trị celsius:")
cels = parseInt(cels)
let fahr
fahr = cels*9/5+32
document.write(fahr)

