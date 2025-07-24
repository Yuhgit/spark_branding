//ローディングアニメーション
//txt分割
function txtSplit(el) {
  let content = el.textContent;
  let text = content.trim();
  let newHtml = "";

  text.split("").forEach(function (v) {
    newHtml += `<span>${v}</span>`;
  });
  el.innerHTML = newHtml;
}

window.addEventListener("load", (e) => {
  Splittargets = document.querySelectorAll(".split");
  for (let i = 0; i < Splittargets.length; i++) {
    txtSplit(Splittargets[i]);
  }

  let tlLoading = gsap.timeline();
  tlLoading
    .to(".reveal-1", { y: "-100%" })
    .from(
      ".loading-wrap .split span",
      { y: "100%", duration: 0.5, stagger: 0.04 },
      "<"
    )
    .to(
      ".loading-wrap .split span",
      { y: "-100%", duration: 0.5, stagger: 0.04 },
      "+=1"
    )
    .to(".reveal-2", { y: "-100%" }, "-=.5")
    .set(".loading-wrap", { visibility: "hidden" });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const header = document.querySelector(".header");
  const title = document.querySelector(".hero-title h2");
  const txt = document.querySelector(".hero-title p");
  const slider = document.querySelector(".slider");

  gsap.set(header, {
    opacity: 0,
    y: -50,
  });
  gsap.set([title, txt], {
    opacity: 0,
    y: 60,
    scale: 0.99,
  });
  gsap.set(slider, {
    opacity: 0,
    x: -300,
    y: -100,
    scale: 1.1,
  });

  const tl = gsap.timeline();
  tl.to(title, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    delay: 3.0,
    scale: 1,
  })
    .to(txt, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: -0.8,
      scale: 1,
    })
    .to(slider, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1.2,
      scale: 1,
      delay: -0.2,
    })
    .to(header, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: -0.8,
    });

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

  //画像アニメーション
  const items = document.querySelectorAll("[data-parallax-front]"); // data-parallax-front属性を持つ要素を取得
  for (const item of items) {
    const y = item.getAttribute("data-y") ?? "15%"; // itemのdata-y属性を取得。未設定の場合は'15%'をデフォルト値として使用
    const delay = parseFloat(item.getAttribute("data-delay")) || 0.4; // itemのdata-delay属性を数値に変換して取得。未設定の場合は'0.4'をデフォルト値として使用
    const target = item.children; // itemの直下の要素を取得

    gsap.fromTo(
      target, // 対象の要素をtargetで指定
      {
        y: y, // アニメーション開始時のy位置
      },
      {
        y: `-${y}`, // アニメーション終了時のy位置
        scrollTrigger: {
          // スクロールトリガーを設定
          trigger: item, // itemをトリガーとなる要素として指定
          start: "top bottom", // 要素の上端がビューポートの下端に達したときに開始
          end: "bottom top", // 要素の下端がビューポートの上端に達したときに終了
          scrub: delay, // スクロールに追従してアニメーションを行う（デフォルトでは0.4秒の遅延）
        },
        ease: "none", // イージング関数を指定しない（線形アニメーション）
      }
    );
  }

  //背景アニメーション
  ScrollTrigger.create({
    trigger: ".concept-animation",
    start: "top 50%",
    end: "bottom -150%",
    toggleClass: {
      targets: ".concept, .concept-animation, .works",
      className: "is-active",
    },
  });

  //文字アニメーション
  const letter = gsap.timeline({
    scrollTrigger: {
      trigger: ".concept-animation",
      start: "top bottom",
      end: "center center",
      scrub: 1.5,
    },
  });
  letter
    .fromTo(
      ".animation-left",
      {
        xPercent: -100,
        scale: 0.4,
        opacity: 0,
      },
      {
        xPercent: -12,
        scale: 1,
        opacity: 1,
      }
    )
    .fromTo(
      ".animation-right",
      {
        xPercent: 100,
        scale: 0.4,
        opacity: 0,
      },
      {
        xPercent: 6,
        scale: 1,
        opacity: 1,
      },
      "<"
    );

  //slider
  const mySwiper = new Swiper(".card02 .swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    grabCursor: true,
    pagination: {
      el: ".card02 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".card02 .swiper-button-next",
      prevEl: ".card02 .swiper-button-prev",
    },
    breakpoints: {
      1025: {
        spaceBetween: 32,
      },
    },
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
});
