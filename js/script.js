$('.menu').click(function(){
	$('.nav-bar').css("width","240px");
	$('.nav-bar').css("border-right","2px solid #fa4b2a");
	$('.transparent-nav').css("width","100%");
	$('.transparent-nav').css("left","240px");

});
$('.transparent-nav').click(function(){
	$('.nav-bar').css("width","0px");
	$('.nav-bar').css("border-right","0px");
	$('.transparent-nav').css("width","0px");
	$('.transparent-nav').css("left","0px");
});
$('.article-toggle').click(function(){
	$('.updated-articles').css("width","240px");
	$('.updated-articles').css("border-left","2px solid #fa4b2a");
	$('.transparent-art').css("width","100%");
	$('.transparent-art').css("right","240px");

});
$('.transparent-art').click(function(){
	$('.updated-articles').css("width","0px");
	$('.updated-articles').css("border-left","0px");
	$('.transparent-art').css("width","0px");
	$('.transparent-art').css("right","0px");
});
