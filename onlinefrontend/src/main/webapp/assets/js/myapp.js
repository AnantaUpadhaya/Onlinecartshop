$(function(){
	//solving the active menu problem
	switch(menu){
	case 'About Us':
		$('#about').addClass('active');
		break;
	case 'Contact Us':
		$('#contact').addClass('active');
		default:
			$('#home').addClass('active');
	}
});