
function loadPage() {
	splash();

}




function splash() {
	setInterval(function() {
				$('#splash').hide();
        $('main').removeClass('hide');
	 }, 3000);
}



$(document).ready(loadPage);
