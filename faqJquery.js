<script type="text/javascript" 
src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>

<script>
// Document ready tells the script to fire only once the entire page is loaded. 
	$(document).ready(function(){
// The next line tells the mouse cursor to becom a pointer when hovering over the H2 elements in the Markdown. 
		$('h2').css('cursor', 'pointer');
// The next line initialises the open/close areas by hiding the content  
		$('h2').nextUntil("h2").slideToggle();
//Finally, there is a function that listens for a click on an H2 and either
// shows or hides its content depending on its current state. 
		$('h2').click(
			function() {
				$("h2").nextUntil("h2").slideUp();
				$(this).nextUntil('h2').slideDown();
			});
	});
	</script>