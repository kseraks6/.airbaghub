window.addEventListener("load", () => {
  requestAnimationFrame(() => {
    setTimeout(() => {
      const video = document.querySelector(".hero-section__video");
      if (video) video.play().catch(() => {});
    }, 200);
  });
});
document.querySelector("video").muted;
