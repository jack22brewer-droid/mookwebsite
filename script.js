/* =========================================================
   Tidewell Canvas Co. — interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---- Sticky nav background on scroll ---- */
  var nav = document.getElementById("nav");
  var onScroll = function () {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu toggle ---- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Current year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---- Lead forms (sample request + trade account) ---- */
  document.querySelectorAll("form#sampleForm, form#tradeForm").forEach(function (form) {
    var success = form.querySelector("#formSuccess");
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      /* No backend wired up yet — collect values and show confirmation.
         Replace this block with a POST to your CRM / email service / form
         endpoint (e.g. Formspree, Netlify Forms, or your own API). */
      var data = Object.fromEntries(new FormData(form).entries());
      console.log(form.id + " submitted:", data);

      form.querySelectorAll(".field, .form__row, .form__fineprint, button[type=submit]").forEach(function (n) {
        n.style.display = "none";
      });
      if (success) {
        success.hidden = false;
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });
})();
