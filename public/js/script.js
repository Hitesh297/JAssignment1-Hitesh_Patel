window.onload = function () {
    
    var splashImage = document.getElementById('splash-image');
    var imageCounter = 1;
    function changeSplashImage() {
        splashImage.src = '/images/splash'+ imageCounter +'.png';
        imageCounter++;
        if (imageCounter >= 5) {
            imageCounter = 1;
        }
    }

    setInterval(changeSplashImage,10000);
};