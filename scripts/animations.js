const header_animation = () => {
  gsap.fromTo("header > .logo > a > *", { opacity: 0, yPercent: -100 }, { opacity: 1, yPercent: 0, duration: 1, ease: "expo.out", stagger: 0.1 });
  gsap.fromTo("header > nav > div", { opacity: 0, yPercent: -100 }, { opacity: 1, yPercent: 0, duration: 1, ease: "expo.out", delay: 0.2, stagger: 0.05 });
};

const page_animations = () => {
  gsap.fromTo(".section, .projects > .project", { opacity: 0, yPercent: -5 }, { opacity: 1, yPercent: 0, duration: 1, ease: "expo.out", delay: 0.4, stagger: 0.1 });
};

const bubbles_animation = () => {
  const bubbles = document.querySelectorAll('.shapes > *');
  const maxDistance = 300;
  const pushStrength = 100;

  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const tweens = [];

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  bubbles.forEach(bubble => {
    const tween = {
      x: gsap.quickTo(bubble, "x", { duration: 3, ease: "expo.out" }),
      y: gsap.quickTo(bubble, "y", { duration: 3, ease: "expo.out" }),
    };
    tweens.push(tween);
  });

  // Animation loop
  function animate() {
    bubbles.forEach((bubble, i) => {
      const rect = bubble.getBoundingClientRect();
      const center = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };

      const dx = center.x - mouse.x;
      const dy = center.y - mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance) {
        const angle = Math.atan2(dy, dx);
        const force = (1 - distance / maxDistance) * pushStrength;
        const offsetX = force * Math.cos(angle);
        const offsetY = force * Math.sin(angle);

        tweens[i].x(offsetX);
        tweens[i].y(offsetY);
      } else {
        tweens[i].x(0);
        tweens[i].y(0);
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
};

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  header_animation();
  page_animations();
  // bubbles_animation();
});
