/* =========================================================
   Gulfstream Marine Supplies — interactions
   ========================================================= */

/* =========================================================
   LEAD FORM ENDPOINT  ——  paste your integration URL here
   ---------------------------------------------------------
   Every form on the site (Get Started + distributor account)
   posts to this one URL. Set it once and you're live.

   Zapier:   make a Zap → trigger "Webhooks by Zapier → Catch
             Hook" → copy the custom webhook URL → paste below.
   Or use:   Formspree / Getform / Basin form endpoint URL.

   Leave it as "" to keep demo mode (shows the thank-you
   message and logs the data to the browser console).
   ========================================================= */
var FORM_ENDPOINT = "";

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

  /* ---- Lead forms — all post to the single FORM_ENDPOINT above ---- */
  document.querySelectorAll("form#sampleForm, form#tradeForm").forEach(function (form) {
    var success = form.querySelector("#formSuccess");
    var button = form.querySelector("button[type=submit]");

    var showThankYou = function () {
      form.querySelectorAll(".field, .form__row, .form__fineprint, button[type=submit]").forEach(function (n) {
        n.style.display = "none";
      });
      if (success) {
        success.hidden = false;
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var data = Object.fromEntries(new FormData(form).entries());
      data.formSource = form.id;              // lets Zapier tell which form it was
      data.submittedAt = new Date().toISOString();

      /* No endpoint set yet → demo mode (thank-you + console log). */
      if (!FORM_ENDPOINT) {
        console.log("[demo] " + form.id + " — set FORM_ENDPOINT in script.js to go live:", data);
        showThankYou();
        return;
      }

      /* Endpoint set → POST the submission, then thank them.
         Works with Zapier Catch Hooks, Formspree, Getform, Basin, etc. */
      if (button) { button.disabled = true; button.textContent = "Sending…"; }
      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
      })
        .then(showThankYou)
        .catch(function () { showThankYou(); }); // still thank the visitor on network hiccups
    });
  });
})();
