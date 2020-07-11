//全选与全不选
$(function() {
    $(".checkall").change(function() {
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
        //判断全选复选框是否被点击了，被点击了就修改所有cart-item的背景颜色，没有被点击的话就不修改所有cart-item的背景颜色
        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
    })
    $(".j-checkbox").change(function() {
        if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }

        //判断商品前的复选框是否被选中，被选中就修改当前商品的cart-item的背景颜色，没有被选中就不修改当前商品的cart-item的背景颜色
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    })

    //点击加号，数量发生变化，价格小结发生对应的变化
    $(".increment").click(function() {
            var count = $(this).siblings(".itxt").val();
            count++;
            $(this).siblings(".itxt").val(count);
            var p = $(this).parents(".p-num").siblings(".p-price").html();
            p = p.substr(1);
            $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * count).toFixed(2))
            total();
        })
        //点击减号，数量发生变化，价格小结发生对应的变化
    $(".decrement").click(function() {
        var count = $(this).siblings(".itxt").val();
        if (count == 1) {
            return //程序遇到return,return后面的代码就不会执行了
        }
        count--;
        $(this).siblings(".itxt").val(count);
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * count).toFixed(2));
        total();
    })

    //修改文本框的数字，价格小结也随之发生变化
    $(".itxt").change(function() {
        var count = $(this).val();
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * count).toFixed(2));
        total();
    })

    total(); //在未修改任何东西之前，就计算好总件数和总金额
    //封装一个 计算总件数和总金额 的函数
    function total() {
        var count = 0;
        var money = 0;
        $(".itxt").each(function(i, ele) {
            count += parseInt($(ele).val());
        })
        $(".amount-sum em").text(count);

        $('.p-sum').each(function(i, ele) {
            money += parseFloat($(ele).text().substr(1));
        })
        $(".price-sum em").text("￥" + money.toFixed(2));
    }

    //删除商品
    $(".p-action a").click(function() {
        $(this).parents(".cart-item").remove();
        total(); //重新计算总件数和总金额
    })

    //删除选中的商品
    $(".remove-batch").click(function() {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        total(); //重新计算总件数和总金额
    })

    //清理购物车
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        total(); //重新计算总件数和总金额
    })
})