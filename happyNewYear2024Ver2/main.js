
document.getElementById('showButton').addEventListener('click', function() {
    // Hiển thị hoạt ảnh tải
    document.getElementById('toolTip').style.display = 'block';
    document.getElementById('loadingAnimation').style.display = 'flex';

    // Tạo độ trễ giả lập hoạt ảnh tải
    simulateLoadingAnimation();
    
    // Sau khi hoàn thành, hiển thị nội dung chính
    setTimeout(function() {
        document.getElementById('hiddenContent').style.display = 'block';
        document.getElementById('loadingAnimation').style.display = 'none';
        document.getElementById('image1').style.display = 'none';
        document.getElementById('showButton').style.display = 'none';
        document.getElementById('toolTip').style.display = 'none';
        var audio = document.getElementById('clickSound');
        audio.play();
    }, 6000); // Thời gian giả lập hoạt ảnh tải (5 giây)
});

// Hàm giả lập hoạt ảnh tải từ 0 đến 100%
function simulateLoadingAnimation() {
    let loading = document.getElementById('progress');
    var percent = 0;
    var interval = setInterval(function() {
        
        loading.textContent = 'Loading: ' + percent + '%';
        // Tăng giá trị % hoạt ảnh tải
        percent += 10;

        if (percent >= 110) {
            clearInterval(interval); // Dừng hoạt động khi đạt 100%
        }
    }, 500); // Thời gian cập nhật (0.5 giây cho mỗi bước)
}


