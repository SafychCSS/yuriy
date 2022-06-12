document.addEventListener('DOMContentLoaded', function () {
    console.log("it's work");
    if (window.SmoothScroll !== undefined) {
        const scroll = new SmoothScroll('a[href*="#"]', {
            updateURL: false,
            speed: 300,
        });
    }
});