const gsapMoving = () => {
  gsap.from("#section-goals .title-section h2", {
    duration: 1,
    autoAlpha: 0,
    y: -100,
    //   scale: 0.5,
    scrollTrigger: {
      trigger: "#section-goals .title-section h2",
      // markers: true,
      start: "top bottom-=200",
    },
  });

  gsap.from("#section-rehabilitation-program-features .title-section h2", {
    duration: 1,
    autoAlpha: 0,
    y: -75,
    //   scale: 0.5,
    scrollTrigger: {
      trigger: "#section-rehabilitation-program-features .title-section h2",
      // markers: true,
      start: "top bottom-=400",
      end: "top bottom",
    },
  });

  gsap.from(".tag-section h3", {
    duration: 1,
    autoAlpha: 0,
    y: 75,
    //   scale: 0.5,
    scrollTrigger: {
      trigger: ".tag-section h3",
      // markers: true,
      start: "top bottom",
      end: "top bottom",
    },
  });

  gsap.from("#section-type-of-spaces .title-section h2", {
    duration: 1,
    autoAlpha: 0,
    y: -75,
    //   scale: 0.5,
    scrollTrigger: {
      trigger: "#section-type-of-spaces .title-section h2",
      // markers: true,
      start: "top bottom-=400",
      end: "top bottom",
    },
  });
};

gsapMoving();
