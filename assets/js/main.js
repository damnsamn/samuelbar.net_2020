// Add class to <body> when user is tabbing
var userIsTabbing;
(function tabbingBehaviour() {

    function handleFirstTab(e) {
        if (e.keyCode === 9) {
            document.body.classList.add('user-is-tabbing');
            userIsTabbing = true;

            window.removeEventListener('keydown', handleFirstTab);
            window.addEventListener('mousedown', handleMouseDownOnce);
        }
    }

    function handleMouseDownOnce(e) {
        console.log(e)

        if (e.pageX !== 0 && e.pageY !== 0) {
            document.body.classList.remove('user-is-tabbing');
            userIsTabbing = false;

            window.removeEventListener('mousedown', handleMouseDownOnce);
            window.addEventListener('keydown', handleFirstTab);
        }
    }

    window.addEventListener('keydown', handleFirstTab);
})();