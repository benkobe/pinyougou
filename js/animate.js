function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // if (callback) {
            //     callback(); //回调函数写在定时器结束后面
            // }
            callback && callback(); //和上面三行的效果是一样的，意思是如果callback为真，就继续执行callback(),如果callback为假,就不再继续执行callback()
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}