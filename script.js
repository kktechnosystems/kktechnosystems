document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
  }

  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#name").value || "there";
      var status = form.querySelector(".form-status");
      status.textContent = "Thanks, " + name + "! Your message has been noted. We'll get back to you soon at the email/phone provided.";
      status.style.display = "block";
      form.reset();
    });
  }
});
