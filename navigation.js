// Nav Bar / Hamburger menu

function toggleNavOverlay() {
  const navOverlayContainer = document.getElementById("navOverlayContainer");
  const voucherOuterWrapper = document.getElementById("voucherOuterWrapper");

  navOverlayContainer.classList.toggle("active");
  document.body.classList.toggle("no-scroll");

  if (!voucherOuterWrapper) {
    return;
  } else if (
    navOverlayContainer.classList.contains("active") &&
    voucherOuterWrapper
  ) {
    voucherOuterWrapper.style.opacity = 0;
  } else {
    voucherOuterWrapper.style.opacity = 1;
  }
}
