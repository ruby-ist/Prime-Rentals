var arr = ["car1-removebg-preview.png","car-2-removebg-preview.png","car-3-removebg-preview.png"];

$(document).ready(function(){
	$('.place').each(function(key,value){
		console.log("url('images/" + $(this).text().trim() +".png')");
		$(this).css({
			"background-image":"-webkit-linear-gradient(rgba(250,250,250,0.4) 50%,rgba(0,0,0,0.6)), url('images/" + $(this).text().trim() +".png')"
		});
	});

	$('.car-image').each(function(key,value){
		console.log(arr[key],"url('images/"+arr[key]+"')")
		$(this).css({
			"background-image":"url('images/"+arr[key]+"')"
		});
	})

	$('.place').hover(function(){
		$(this).css({
			"background-image":"url('images/" + $(this).text().trim() +".png')"
		})
	},
	function(){
		$(this).css({
			"background-image":"-webkit-linear-gradient(rgba(250,250,250,0.4) 50%,rgba(0,0,0,0.6)), url('images/" + $(this).text().trim() +".png')"
		});
	});
	
});