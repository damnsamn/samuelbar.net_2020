// jQuery Helper functions
(function ($) {
    $.fn.tabindex = function (n) {
        if (n === false)
            return this.removeAttr("tabindex");
        else
            return this.attr("tabindex", n);
    }
    $.fn.toggleTabindex = function () {
        var val = this.attr("tabindex");
        if (val === undefined)
            val = 0;
        val = val == 0 ? -1 : 0;
        return this.attr("tabindex", val);
    }
    $.fn.ariaHasPopup = function (val) {
        if (val !== null && val !== undefined)
            return this.attr("aria-haspopup", val);
        else
            return console.error("$.ariaHasPopup() requires a value to set", this)
    }
    $.fn.ariaExpanded = function (val) {
        if (val !== null && val !== undefined)
            return this.attr("aria-expanded", val);
        else if (val === null)
            return this.attr("aria-expanded");
        else
            return console.error("$.ariaExpanded() requires a value to set", this)
    }
    $.fn.toggleAriaExpanded = function () {
        var val = this.attr("aria-expanded");
        // Convert from string bool to true bool
        val = val === "true" ? true : false;
        return this.attr("aria-expanded", !val);
    }
})(jQuery);

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

(function navMenu() {

    var $header = $(".header"),
        $navigation = $(".header__navigation"),
        transition = 200,
        timeout;

    $(".header__hamburger").click(function () {

        $(this).toggleAriaExpanded();
        $("html").toggleClass("faded");
        $header.toggleClass("expanded");

        // hey guys check out this fuckin mess!
        // do literally anything else next time

        if ($header.hasClass("expanded")) {
            $navigation.addClass("visible");
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                $navigation.toggleClass("slide");
                timeout = null;
            }, 0);
        }

        else {
            $navigation.toggleClass("slide");
            if (timeout) {
                $navigation.removeClass("visible");
            }
            else
                timeout = setTimeout(function () {
                    $navigation.removeClass("visible");
                    clearTimeout(timeout);
                    timeout = null;
                }, transition);
        }

    });

})();

(function doTooltips() {

    $("[data-tooltip]").each(function() {
        $(this).attr("aria-label", $(this).data("tooltip"));
    })

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
