var crsr = document.querySelector(".cursor")
var crsrbg = document.querySelector(".cursor-b")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-12.5+"px"
    crsr.style.top = dets.y-12.5+"px"
    crsrbg.style.left = dets.x-200+"px"
    crsrbg.style.top = dets.y-200+"px"
})



gsap.to("#nav",{
    backgroundColor: "black",
    duration:0.5,
    height: "80px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub:2,
    }
}
)

gsap.to(".main",{
    backgroundColor:"black",
    duration:0.5,
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -40%",
        end:"top -70%",
        scrub:2,
    }

})