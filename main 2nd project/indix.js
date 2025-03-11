document.addEventListener("DOMContentLoaded", function () {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true
    });
  });
 //     globle variable
  var timeout ;


//   mousescaling function.
  var xsacle = 1;
  var yscale = 1;

  var xprev= 0;
  var yprev= 0;

  window.addEventListener("mousemove", function(detail){
    clearTimeout(timeout)
    xscale = gsap.utils.camp(.8, 1.2,detail.clientX - xprev);
    yscale = gsap.utils.camp(.8, 1.2,detail.clientY - yprev);

    xprev = detail.clientX;
    yprev = detail.clientY;
    
    cirCuleMover(xsacle,yscale)
    
     timeout= setTimeout(function(){
        document.querySelector("#menicircule").style.transform =`translate(${detail.clientX}px, ${detail.clientY}px) scale(1,1) `;
    }, 100);
  });

  function firstPageEnem() {
    var tl = gsap.timeline();
    tl.from("#navbar", {
      y: "10",
      duration: 1.5,
      opacity: 0,
      ease: "expo.inOut" // Correct easing format
    })
    .to(".boundingele", {
      y: 0,
      duration: 2,
      delay:-1,
      ease: "expo.inOut",
      stagger: .3
    })
    .from("#navbarfooter", {
      y: "-10",
      opacity:0,
      duration: 1.5,
      delay:-1,
      ease: "expo.inOut",
      stagger: .3
    })

  }
  
//   circular mover mouse
  function cirCuleMover(xsacle, yscale){
    window.addEventListener("mousemove", function(detail){
        document.querySelector("#menicircule").style.transform =`translate(${detail.clientX}px, ${detail.clientY}px) scale(${xsacle}, ${yscale})`;
        
    })
  }
  cirCuleMover(xsacle,yscale);
  firstPageEnem();



  document.querySelectorAll(".element").forEach(function(element) {
    element.addEventListener("mouseleave", function() {
      gsap.to(element.querySelector("img"), {
        opacity: 0,
        ease: "power3",
        duration: 0.5,
      });
    });
  });
  
  document.querySelectorAll(".element").forEach(function(element) {
    let rotate = 0;
    let difference = 0;
  
    element.addEventListener("mousemove", function(dets) {
      const img = element.querySelector("img");
      const diff = dets.clientY - element.getBoundingClientRect().top;
      difference = dets.clientX - rotate;
      rotate = dets.clientX;
  
      const x = dets.clientX - element.getBoundingClientRect().left - img.offsetWidth / 2;
      const y = diff - img.offsetHeight / 2;
  
      gsap.to(img, {
        opacity: 1,
        ease: "power3",
        top: y,     
        left: x,     
        rotate: gsap.utils.clamp(-20, 20, difference * 0.5),
      });
    });
  });
  