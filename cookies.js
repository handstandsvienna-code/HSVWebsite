/* Date function */
const yearObjects = document.getElementsByClassName("currentYear");

for (const yearObject of yearObjects) {
  const year = new Date().getFullYear();
  yearObject.textContent = year.toString();
}

/* Cookies */
const overlay = document.getElementById("cookie-overlay");
const banner = document.getElementById("cookie-banner");
const datenschutzeinstellungen = document.getElementById(
  "datenschutzeinstellungen",
);
// Datenschutzeinstellungen
datenschutzeinstellungen.addEventListener("click", function () {
  banner.style.display = "block";
  overlay.style.display = "block";
});

document.addEventListener("DOMContentLoaded", function () {
  const acceptButton = document.getElementById("cookie-accept");
  const rejectButton = document.getElementById("cookie-reject");
  const cookieName = "HSV_Cookie_Consent";

  const hasCookie = (name) =>
    document.cookie.split("; ").find((c) => c.startsWith(name + "=accepted"));

  if (!hasCookie(cookieName)) {
    banner.style.display = "block";
    overlay.style.display = "block";
  }

  if (hasCookie(cookieName)) {
    const script = document.createElement("script");
    script.src = "https://widget-static.eversports.io/loader.js";
    script.async = true;
    script.type = "module";

    const wrapper = document.getElementById("widgetWrapperId");
    if (wrapper && !wrapper.querySelector("[data-eversports-widget-id]")) {
      let tempDiv = document.createElement("div");
      tempDiv.setAttribute(
        "data-eversports-widget-id",
        "fa96ca77-1129-4e00-b0b6-ce610c4325ef",
      );

      wrapper.appendChild(tempDiv);
    }
    document.head.appendChild(script);
  }

  function deleteCookie(cookieName) {
    document.cookie =
      cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  let tempScript;

  acceptButton.addEventListener("click", function () {
    banner.style.display = "none";
    overlay.style.display = "none";

    const wrapper = document.getElementById("widgetWrapperId");
    if (wrapper && !wrapper.querySelector("[data-eversports-widget-id]")) {
      let tempDiv = document.createElement("div");
      tempDiv.setAttribute(
        "data-eversports-widget-id",
        "fa96ca77-1129-4e00-b0b6-ce610c4325ef",
      );

      wrapper.appendChild(tempDiv);
    }

    document.cookie =
      cookieName + "=accepted; max-age=86400; path=/; SameSite=Lax";

    if (!tempScript) {
      tempScript = document.createElement("script");
      tempScript.src = "https://widget-static.eversports.io/loader.js";
      tempScript.async = true;
      tempScript.type = "module";

      document.head.appendChild(tempScript);
    }

    // reload page!
    location.reload();
  });

  rejectButton.addEventListener("click", function () {
    banner.style.display = "none";
    overlay.style.display = "none";

    //script entfernen
    if (tempScript) {
      tempScript.remove();
      tempScript = null;
    }

    //widget div entfernen
    const widgetDiv = document.getElementById("widgetWrapperId");
    if (widgetDiv) {
      widgetDiv.innerHTML =
        "<p class='widgetPlaceholder'>Um diesen Inhalt zu sehen, musst du die Datenschutzrichtlinien akzeptieren.</p>";
    }

    const voucherWidgetDiv = document.getElementById("voucher-content");
    if (voucherWidgetDiv) {
      voucherWidgetDiv.innerHTML =
        "<p class='widgetPlaceholder'>Um diesen Inhalt zu sehen, musst du die Datenschutzrichtlinien akzeptieren.</p>";
    }

    //reset cookies
    deleteCookie(cookieName);
  });
});

//focus nur im banner

const modal = document.getElementById("cookie-banner");
const focusableElements = modal.querySelectorAll("button, a");
let first = focusableElements[0];
let last = focusableElements[focusableElements.length - 1];

modal.addEventListener("keydown", function (e) {
  if (e.key === "Tab") {
    if (e.shiftKey) {
      // shift + tab
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      // tab
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
});
