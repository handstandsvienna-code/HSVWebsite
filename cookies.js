document.addEventListener("DOMContentLoaded", function () {
  const cookieName = "HSV_Cookie_Consent";

  const hasCookie = (name) =>
    document.cookie.split("; ").find((c) => c.startsWith(name + "="));

  console.log(document.cookie);

  if (hasCookie(cookieName)) {
    console.log("Exists");
    const script = document.createElement("script");
    script.src = "https://widget-static.eversports.io/loader.js";
    script.async = true;
    script.type = "module";

    document.head.appendChild(script);
  }
});
