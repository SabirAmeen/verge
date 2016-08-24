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
$('#trending-dropdown-btn').click(function(){
	$('#trending-dropdown').slideToggle("fast");
	if($('#dropdown-arrow').text()==="\u25BC")
	{	$('#dropdown-arrow').text("\u25B2");
		$('#trending-dropdown-btn').css("background-color","#fa4b2a");
		$('#dropdown-arrow').css("color","white");
	}
	else
	{	$('#dropdown-arrow').text("\u25BC");
		$('#trending-dropdown-btn').css("background-color","#f0f0f0");
		$('#dropdown-arrow').css("color","#fa4b2a");
	}
});
