// Simple cookie-consent banner used once ads/analytics go live.
document.addEventListener("DOMContentLoaded", function () {
    var banner = document.getElementById("cookie-banner");
    var acceptBtn = document.getElementById("cookie-accept");
    if (!banner || !acceptBtn) return;

    if (!localStorage.getItem("sv_cookie_consent")) {
        banner.hidden = false;
    }

    acceptBtn.addEventListener("click", function () {
        localStorage.setItem("sv_cookie_consent", "yes");
        banner.hidden = true;
    });
});
