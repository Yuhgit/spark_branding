  // smooth scroll setting
  const lenis = new Lenis({
    lerp: 0.2,
    duration: 1,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // ハンバーガーメニュー
  const btnTrigger = document.querySelector(".btn-trigger");
  const nav = document.querySelector(".sp-nav");
  btnTrigger.addEventListener("click", () => {
    btnTrigger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  //GetInTouch
  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    gsap.to(".shape", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1,
    });

    gsap.set(".cursor", {
      x: mouseX,
      y: mouseY,
    });
  });
