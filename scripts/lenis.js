document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis({ autoRaf: true, anchors: true });
  const lenis_about_modal = new Lenis({ wrapper: document.getElementById("about-modal"), content: document.querySelector(".modal-content"), autoRaf: true });
  const lenis_project_modal = new Lenis({ wrapper: document.getElementById("project-modal"), content: document.querySelector(".modal-content"), autoRaf: true });
});
