
function loadPage() {
	splash();



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






$(document).ready(loadPage);


$("#btn-send-post").click(showPost); //Llama a la función que muestra los post
