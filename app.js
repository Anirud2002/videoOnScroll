const video = document.querySelector("video")
console.log(video.currentTime)

const controller = new ScrollMagic.Controller()

const scene = new ScrollMagic.Scene({
    triggerElement: "#intro",
    triggerHook: 0,
    duration: "3410"

}).setPin("#intro")
.addIndicators()
.addTo(controller)



let scrollpos = 0

scene.on("update", e => {
    console.log(video.currentTime)
    scrollpos = e.scrollPos / 1000
    video.currentTime = scrollpos

})

