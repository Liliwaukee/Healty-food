
function loadPage() {
	splash();
	//$("#btn-signup").click(signupView);
}




function splash() {
	setInterval(function() {
				$('#splash').hide();
        $('main').removeClass('hide');
	 }, 3000);
}

function signupView() {

}




$(document).ready(loadPage);
