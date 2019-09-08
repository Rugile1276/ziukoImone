$(document).ready(function(){
    
    for (var i = 1; i <= 39; i++) {

    	$(".imgsList").append("<div class='col-lg-4 col-sm-6'><a class='thumbnail lightbox' href='/Users/rugilepetrukauskaite/Desktop/ziukoImone/gallery/gal-" + i + ".jpg'><img src='/Users/rugilepetrukauskaite/Desktop/ziukoImone/gallery/gal-" + i + ".jpg'></a></div>");

    }
baguetteBox.run('.tz-gallery');
});
