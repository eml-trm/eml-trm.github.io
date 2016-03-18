window.onload = function onLoad() {
	
   var line = new ProgressBar.Line('#progres-bar', {
    color: '#3393CC'
        duration: 3000,
        easing: 'easeInOut'
	});

	line.animate(1.0);  // Number from 0.0 to 1.0
};