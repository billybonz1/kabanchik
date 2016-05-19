$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	$(".circle").hover(
		function () {
			$(this).addClass("begin").toggleClass("animated");
		},
		function () {
			$(this).toggleClass("animated");
		}
	).on("click",function(){
		$(".circle-main").addClass("animated");
		$(".circle-main").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
			$(this).removeClass("animated");
		});
	});

	$(".colorpicker div").on("click",function(){
		$("body").attr("class","").addClass($(this).attr("class"));
	});
});
