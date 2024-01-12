


const tl = gsap.timeline()

tl.from(".Header .links-box .logo, .Header .links-box .links-box-child .links-item, .Header .social-media-links .social-media-links-box .social-links", {
    y: -100,
    duration: 1,
    delay: .5,
    opacity: 0,
    stagger: 0.2
})

tl.from(".center-box-leftchid-content .bg-color-txt", {
    x: -100,
    opacity: 0,
})

tl.from(".center-box-leftchid-content .main-txt, .center-box-leftchid-content .light-txt-info", {
    y: 100,
    opacity: 0,
    stagger:0.2
})

tl.from(".btn-box", {
    x: 100,
    opacity: 0,
})

tl.from(".center-box-rightchild .background-cover", {
      y: 100,
      opacity: 0,
})

tl.from(".center-box-rightchild .circle, .center-box-rightchild .circle2,.center-box-rightchild .circle3",{
    rotate: 360,
    scale: 0,
    opacity: 0,
    stagger: 0.2
})

tl.from(".center-box-rightchild .home-img", {
    y: 100,
    opacity: 0,
    // scale: 0,
    opacity: 0
})

tl.from(".experience-box .number, .experience-box .text-box", {
    x: -100,
    opacity: 0,
    stagger: 0.2
})

// Scrolltigeer ! important

tl.from(".center-box-right-child .header-txt", {
    x: -100,
    opacity:0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".center-box-right-child .header-txt",
        start: "bottom 40%",
        end: "top 30%",
        scrub: 3,
        // markers: true,
    }
})

tl.from(".center-box-right-child .brand-txt", {
    y: 100,
    opacity:0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".center-box-right-child .header-txt",
        start: "bottom 35%",
        end: "top 30%",
        scrub: 3,
        // markers: true,
    }
})

tl.from(".center-box-right-child .sub-brand-txt", {
    x: 100,
    opacity:0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".center-box-right-child .header-txt",
        start: "bottom 35%",
        end: "top 20%",
        scrub: 3,
        // markers: true,
    }
})

tl.from(".center-box-right-child .brand-info ", {
    y: 100,
    opacity:0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".center-box-right-child.header-txt",
        start: "bottom bottom",
        end: "top 30%",
        scrub: 3,
        // markers: true,
    }
})

tl.from(".center-box-left-child .project-box", {
    x: -100,
    opacity:0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".center-box-right-child .header-txt",
        start: "bottom 40%",
        end: "top 30%",
        scrub: 3,
        // markers: true,
    }
})