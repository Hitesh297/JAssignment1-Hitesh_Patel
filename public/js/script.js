jQuery(document).ready(function () {
    
    var splashImage = document.getElementById('splash-image');
    var imageCounter = 1;
    function changeSplashImage() {
        splashImage.src = '/images/splash'+ imageCounter +'.png';
        imageCounter++;
        if (imageCounter >= 5) {
            imageCounter = 1;
        }
    }

    if (splashImage != null) {
        setInterval(changeSplashImage,3000); 
    }

    $('dt').click(function(){
		$(this).next('dd').slideToggle();
	});
    
});