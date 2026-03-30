// Scroll Progress Indicator
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrollPercent = (scrollTop / scrollHeight) * 100;

  document.getElementById("progress-bar").style.width =
    scrollPercent + "%";
});
if (scrollTop > 50) {
  document.getElementById("progress-bar").style.height = "6px";
}