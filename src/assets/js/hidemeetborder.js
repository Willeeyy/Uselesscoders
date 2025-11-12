document.addEventListener("DOMContentLoaded", () => {
  const meetSection = document.getElementById("meet-the-team");
  if (!meetSection) return;

  if (window.location.pathname.endsWith("About-us.html")) {
    meetSection.classList.add("no-border");
  } else {
    meetSection.classList.remove("no-border");
  }
});
