const sectionIds = [
    "#about",
    "#current_fundraising",
    "#our_partners",
    "#donate"
]


const gsapMoving = () => {
    sectionIds.forEach(section => {
        gsap.from(`${section} .title-section h2`, {
            duration: 1.2,
            autoAlpha: 0,
            y: -100,
            scrollTrigger: {
                trigger: `${section} .title-section h2`,
                start: "top bottom-=200",
            },
        });
    })
};

gsapMoving();
