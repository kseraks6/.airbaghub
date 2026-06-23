const video = document.querySelector(".hero-section__video");

function startVideo() {
  if (!video) return;

  video.muted = true;
  video.setAttribute("muted", "");
  video.playsInline = true;
  video.setAttribute("playsinline", "");

  const attempt = video.play();

  if (attempt !== undefined) {
    attempt.catch(() => {
      const resume = () => {
        video.play();
        document.removeEventListener("touchstart", resume);
        document.removeEventListener("click", resume);
      };

      document.addEventListener("touchstart", resume, { once: true });
      document.addEventListener("click", resume, { once: true });
    });
  }
}

window.addEventListener("load", () => {
  requestAnimationFrame(() => {
    setTimeout(startVideo, 150);
  });
});
