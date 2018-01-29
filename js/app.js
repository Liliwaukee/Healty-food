
function loadPage() {
	splash();

	$('.collapsible').collapsible(); //Agregamos la funcionalidad a los collapse


}





function splash() {
	setInterval(function() {
				$("#splash").hide();
        $("main").removeClass("hide");
	 }, 3000);
}


function showPost() {  //post-container
	var $postContent = $("#post-text").val();
	var $postSection = $("#show-post-section");
	var $post = $("<div />").addClass("card-panel card-panel-post");
	var $postText = $("<p />").addClass("borderP");
	var $post2 = $("<div />").addClass("icons-post");
	var $iconLove = $("<i />").addClass("material-icons icon");
	var $iconLike = $("<i />").addClass("material-icons icon");
	var $iconDislike = $("<i />").addClass("material-icons icon");

	$postText.text($postContent);
	$iconDislike.text("thumb_down");
	$iconLike.text("thumb_up");
	$iconLove.text("favorite_border");

	$post.append($postText);
	$post2.append($iconLove);
	$post2.append($iconLike);
	$post2.append($iconDislike);
	$postSection.append($post);
	$post.append($post2);

	$("#post-text").val(" "); //limpiamos el textarea

	//los iconos se colorean cuando le das click
	$(".icon").on("click",function(){
		$(this).toggleClass("clicked");
		$(this).siblings().removeClass("clicked");
	});


}

function calculateIMC() {
	var $userHeight = $("#height-user").val();
	var $userWeight = $("#weight-user").val();
 	var $userIMC = ($userWeight*10000) / (Math.pow($userHeight, 2));
	$userIMC = $userIMC.toFixed(2);

	if($userIMC <= 18.49) {
		$("#user-imc").html($userIMC + " Delgadez");
	} else if ($userIMC >= 18.5 || $userIMC <= 24.99) {
		$("#user-imc").html($userIMC + " Peso normal");
	} else if ($userIMC >= 25 || $userIMC <= 29.99) {
		$("#user-imc").html($userIMC + " Sobrepeso");
	} else if ($userIMC >= 30) {
		$("#user-imc").html($userIMC + " Obesidad");
	}

	$(".collapsible-header").removeClass("active");
	$("li").removeClass("active");
	$(".collapsible-body").hide();
	$("#height-user").val("");
	$("#weight-user").val("");
}

$("#btn-calculate-imc").click(calculateIMC);



$(document).ready(loadPage);


$("#btn-send-post").click(showPost); //Llama a la función que muestra los post
