$(function(){
	
	var imgMax=6;
	var i=1;
	var index=i;

	var img='<img src="img/'+i+'.jpg">';
	$('#center').html(img);


	$('#left').click(function(){
		if (i>1)
		{
			$('#center').animate({opacity:0},function(){
				--i;
				var img='<img src="img/'+i+'.jpg">';
				$('#center').html(img);
			});
			$('#center').animate({opacity:1},1000);
		}

		else if (i==1){
				i=imgMax;
				var img='<img src="img/'+i+'.jpg">';
				$('#center').html(img);
			}		
});

	$('#right').click(function(){
		if (i<imgMax)
		{
			$('#center').fadeTo(1000,0, function(){
				++i;
			var img='<img src="img/'+i+'.jpg">';
			$('#center').fadeTo(1000,1);
			$('#center').html(img);
			});
		}
		else if (i==imgMax){
				i=1;
				var img='<img src="img/'+i+'.jpg">';
				$('#center').html(img);
			}
	});
});