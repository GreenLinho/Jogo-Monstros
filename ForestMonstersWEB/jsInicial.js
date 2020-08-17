$().ready(function()
{	

	$("button").mouseover(function()
	{
		$("button").css("cursor","pointer");
	});

	$("button").click(function()
	{
		window.open("jogo.html", '_blank');
	});
});