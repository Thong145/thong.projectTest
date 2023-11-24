gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease:"none", duration:2});

gsap.to(".slider__heroSection__text", {
    scrollTrigger:{
        // trigger:".slider__heroSection__text",
        start: "20px 30%",
        end:"+=30%",
        // markers:true,
        // // scrub: 1,
        // toggleActions: "restart pause reverse pause",
    },
    x:0,
    // rotation: 360,
    duration: 2
});

gsap.to(".slider__heroSection__illustration", {
    scrollTrigger:{
        // trigger:".slider__heroSection__illustration",
        start: "70px 30%",
        end:"+=30%",
        // markers:true,
        // // scrub: 1,
        // toggleActions: "restart pause reverse pause",
    },
    x:0,
    // rotation: 360,
    duration: 2
});

gsap.to(".title", {
    scrollTrigger:{
        trigger:".title",
        // start: "20px 30%",
        // end:"+=30%",
        // markers:true,
        scrub: 1,
        toggleActions: "restart pause reverse pause",
    },
    y:-30,
    // rotation: 360,
    duration: 2
});

gsap.to(".logos__items", {
    scrollTrigger:{
        trigger:".logos__items",
        // start: "20px 30%",
        // end:"+=30%",
        // markers:true,
        // scrub: 1,
        toggleActions: "restart pause reverse pause",
    },
    x:0,
    rotation: 360,
    duration: 2
});

gsap.from(".navbar", {
    yPercent: -70,
    duration: 2
  })

  gsap.from(".communities", {
    scrollTrigger:{
        trigger:".logos__items",
        // start: "20px 30%",
        // end:"+=30%",
        // markers:true,
        scrub: 1,
        toggleActions: "restart pause reverse pause",
    },
    yPercent: 1000,
    duration: 3
  })

// const tl = gsap.timeline();
// tl.from(".unlock", {xPercent: -100})
//     .from(".achievements", {xPercent: -100})
//     .from(".calender", {xPercent: -100})
//     .from(".customers", {xPercent: -100})
//     .from(".community-updatess", {xPercent: -100});


gsap.to(".unlock", {
    scrollTrigger:{
        trigger:".unlock",
        // start: "20px 30%",
        // end:"+=30%",
        // markers:true,
        scrub: 1,
        toggleActions: "restart pause reverse none",
    },
    xPercent:-30,
    // rotation: 360,
    duration: 1
});

gsap.to(".achievements", {
    scrollTrigger:{
        trigger:".achievements",
        // start: "20px 30%",
        // end:"+=30%",
        // markers:true,
        scrub: 1,
        toggleActions: "restart pause reverse none",
    },
    xPercent:-30,
    // rotation: 360,
    duration: 1
});

gsap.to(".calender", {
    scrollTrigger:{
        trigger:".calender",
        // start: "20px 30%",
        // end:"+=30%",
        // markers:true,
        scrub: 1,
        toggleActions: "restart pause reverse none",
    },
    xPercent:-30,
    // rotation: 360,
    duration: 1
});

gsap.to(".customers", {
    scrollTrigger:{
        trigger:".customers",
        // start: "20px 30%",
        // end:"+=30%",
        // markers:true,
        scrub: 1,
        toggleActions: "restart pause reverse none",
    },
    xPercent:-30,
    // rotation: 360,
    duration: 1
});
gsap.to(".community-updatess", {
    scrollTrigger:{
        trigger:".community-updatess",
        // start: "20px 30%",
        // end:"+=30%",
        // markers:true,
        scrub: 1,
        toggleActions: "restart pause reverse none",
    },
    xPercent:-30,
    // rotation: 360,
    duration: 1
});

// ScrollTrigger.create({
//     animation: tl,
//     trigger: ".body",
//     start: "top top",
//     end: "+=1000px",
//     scrub: 1,
//     pin: true,
//     // pinSpacing: false,
//     anticipatePin: 1
// });

// let sections = gsap.utils.toArray(".body");
// gsap.to(sections,{
//     xPercent: -100*(sections.length - 1),
//     ease:"none",
//     scrollTrigger:{
//         trigger:".body",
//         pin: true,
//         scrub: 1,
//         snap:1 / (sections.length - 1),
//         end: ()=>"+="+ document.querySelector(".body").offsetWidth
//     }
// });