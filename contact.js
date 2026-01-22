document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const mailTo =
            "mailto:info@peakpotentia.com" +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(
                "Name: " + name +
                "\nEmail: " + email +
                "\nSubject: " + subject +
                "\n\nMessage:\n" + message
            );

        window.location.href = mailTo;
    });

});