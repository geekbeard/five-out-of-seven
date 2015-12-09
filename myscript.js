var bsrating = "";
var x = location.pathname;

if (x.indexOf("title/") != -1) {
	var ratediv = document.getElementsByClassName("titlePageSprite star-box-giga-star");
	var rating = parseFloat(ratediv[0].innerHTML.replace(/ /g,''))
	if (rating < 3) {
		bsrating = "1/7";
	} else if (rating >= 3 && rating < 5) {
		bsrating = "2/7";
	} else if (rating >= 5 && rating < 7) {
		bsrating = "3/7";
	} else if (rating >= 7 && rating < 9) {
		bsrating = "4/7";
	} else if (rating >= 9) {
		bsrating = "5/7";
	} 
	var insertdiv = document.getElementsByClassName("star-box-rating-widget");
    var bsratingdiv = document.createElement('DIV');
	bsratingdiv.className = "star-box-rating-label";
	bsratingdiv.innerHTML = 'Brendan Sullivan rates it: '+bsrating;
	insertdiv[0].appendChild(bsratingdiv);
}