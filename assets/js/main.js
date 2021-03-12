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

(function passClicks() {

    $("[data-click]").each(function () {

        var $this = $(this),

            $target = $($this).find($this.data("click"));




        $this.click(function () {

            if ($target.attr("href"))

                window.location.href = $target.attr("href")

            else

                return false;

        })

    });

})();

(function doTooltips() {

    function openTooltip(e) {
        var $this = $(e.target.closest("[data-tooltip]")),
            text = $this.data("tooltip"),
            html = "<div class='tooltip'>" + text + "</div>";

        $(html).appendTo("body").fadeIn(300).css({
            top: e.clientY,
            left: e.clientX
        })
    }
    function moveTooltip(e) {
        $(".tooltip").css({
            top: e.clientY,
            left: e.clientX
        })
    }
    function closeTooltips() {
        $(".tooltip").remove();
    }

    $("[data-tooltip]").mouseenter((e) => openTooltip(e));
    $("[data-tooltip]").mousemove((e) => moveTooltip(e));
    $("[data-tooltip]").mouseleave(closeTooltips)

})();
