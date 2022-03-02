let bgImage = document.querySelector(".img-container"); 

//  Now registering thescrollTrigger plugin to gsap
gsap.registerPlugin(ScrollTrigger); 

// Now we are going to animate
gsap.fromTo(
    bgImage,
    {
        clipPath: "circle(5% at 77% 40%)",
    },
    {
        clipPath: "circle(75% at 50% 50%)",
        ease: "none",
        
      //  We want to do that animation on scroll
        scrollTrigger: {
        trigger: bgImage,
        scrub: 1,
        start: "top center",
        end: "top center-=200",
        },
    }
);