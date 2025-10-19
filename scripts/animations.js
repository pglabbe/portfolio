const header_animation = () => {
  gsap.fromTo("header > .logo > a > *", { opacity: 0, yPercent: -100 }, { opacity: 1, yPercent: 0, duration: 1, ease: "expo.out", stagger: 0.05 });
  gsap.fromTo("header > nav > div", { opacity: 0, yPercent: -100 }, { opacity: 1, yPercent: 0, duration: 1, ease: "expo.out", delay: 0.2, stagger: 0.05 });

  window.addEventListener("menuOpened", () => {
    gsap.fromTo(".sidebar > nav > div", { xPercent: 10, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 0.6, ease: "expo.out", delay: 0.2, stagger: 0.05 });
  });
  window.addEventListener("menuClosed", () => {
    gsap.to(".sidebar > nav > div", { xPercent: 10, opacity: 0 });
  });
};

const page_animations = () => {
  gsap.set(".section, .projects > .project", { opacity: 0, yPercent: -5 });

  ScrollTrigger.batch(".section, .projects > .project", {
    onEnter: (batch) => {
      gsap.to(batch, { opacity: 1, yPercent: 0, duration: 1, ease: "expo.out", delay: 0.4, stagger: 0.1 });
    },
    start: "top bottom",
    once: true
  });
};

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  header_animation();
  page_animations();
});
