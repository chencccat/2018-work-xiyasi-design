$(function(){

	btnControl();

});

// index-page
var btnControl = function(){

	$(".page-control li").eq(0).children("span").eq(0).addClass("an-rotate2");
	$(".page-control li").eq(1).children("span").eq(0).addClass("an-rotate2");

	// index
	$(".circle-pic li").eq(0).addClass("an-rotate1");
	$(".circle-pic li").eq(1).addClass("an-rotate2");
	$(".circle-pic li").eq(2).addClass("an-rotate3");

	picAn();

	$(".btn-control li").on("click", function(){
		var index = $(this).index();

		$(".btn-control li").css("background-image", "");
		$(this).css("background-image", "url(images/btn"+(index+1)+"-click.png)");

		setTimeout(function(){
			window.location.href = "page"+(index+1)+".html";
		},300);

	});


	// page1
	diamondFun();

	$(".diamond-box li").on("click", function(){
		var index = $(this).index();

		$(".diamond-box li").removeClass("an-translateY");
    setTimeout(function(){
    	diamondFun2();
    },300);
	});

	$(".page1-control li").on("click", function(){
		var index = $(this).index();
		var oLi = $(this);

		switch(index)
		{
		case 0:
		  setTimeout(function(){
				window.location.href = 'PNP.html';
			},600);
		  break;
		case 1:
			setTimeout(function(){
				window.history.back();
			},600);
		  break;
		default:;
		};

		// 跳动动画
		startAnimation();
		function startAnimation(){
			oLi.animate({bottom:"128px"},150);
			oLi.animate({bottom:"98px"},150);
			oLi.animate({bottom:"128px"},150);
			oLi.animate({bottom:"98px"},150);
		};

	});

	// page2
	$(".page-control li").on("click", function(){
		var index  = $(this).index();

		$(this).empty();

		switch(index)
		{
		case 0:
			$(".page-control li").eq(0).css("background-image", "url(images/btn-back-click.png)");
		  setTimeout(function(){
				window.history.back();
			},300);
		  break;
		case 1:
			$(".page-control li").eq(1).css("background-image", "url(images/btn-home-click.png)");
			setTimeout(function(){
				window.location.href='index.html';
			},300);
		  break;
		default:;
		};

	});

};


// index
var picAn = function(){
	// http://www.dowebok.com/98.html  [animate.css]
	$(".pic-box li").addClass("animated fadeInLeft");

	var arr = ['fadeInLeft','rotateInDownLeft','fadeInDown','rotateIn'];
	var i = 1;
	var len = arr.length;

	setInterval(function(){
		if(i>len-1){
    	i = 0;
  	};

		$(".pic-box li").removeAttr("class");
		setTimeout(function(){
				$(".pic-box li").addClass("animated "+arr[i]);
				i++;
		},2000);

	},4000);
};

// page1
var diamondFun = function(){
	$(".diamond-box li").eq(0).addClass("an-translateY");

	var i = 1;
	var len = $(".diamond-box li").length;
	setInterval(function () {
  	if(i>len-1){
    	i = 0;
  	}
    $(".diamond-box li").removeClass("an-translateY");
    $(".diamond-box li").eq(i).addClass("an-translateY");
    i++;
  },4000);
};

var diamondFun2 = function(index){
	$(".diamond-box li").eq(0).addClass("an-translateY");

	var i = index+1;
	var len = $(".diamond-box li").length;
	setInterval(function () {
  	if(i>len-1){
    	i = 0;
  	}
    $(".diamond-box li").removeClass("an-translateY");
    $(".diamond-box li").eq(i).addClass("an-translateY");
    i++;
  },4000);
};
