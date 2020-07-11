window.addEventListener('load', function() {
    var img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    //鼠标进入图片，遮挡层和大图片显示，离开图片，遮挡层和大图片隐藏
    img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    img.addEventListener('mouseout', function() {
            mask.style.display = 'none';
            big.style.display = 'none';
        })
        //鼠标在图片范围内移动，遮挡层的中心跟随鼠标移动
    img.addEventListener('mousemove', function(e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= img.offsetWidth - mask.offsetWidth) {
            maskX = img.offsetWidth - mask.offsetWidth;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= img.offsetHeight - mask.offsetHeight) {
            maskY = img.offsetHeight - mask.offsetHeight;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';

        var bigImg = document.querySelector('.bigImg');
        var maskMax = img.offsetWidth - mask.offsetWidth;
        var bigImgMax = bigImg.offsetWidth - big.offsetWidth;
        var bigX = maskX * bigImgMax / maskMax;
        var bigY = maskY * bigImgMax / maskMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
    })

    //tab_con栏切换（用jQuery做）
    $(".detail_tab_list li").mouseenter(function() {
        $(this).addClass("current").siblings().removeClass("current");
        var index = $(this).index();
        $(".detail_tab_con .item").eq(index).show().siblings().hide();
    })
})