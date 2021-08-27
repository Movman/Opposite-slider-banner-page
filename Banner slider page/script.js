
// variables
const containerSlider = document.querySelector(".container-slider")
const slideLeft = document.querySelector(".slide-left")
const slideRight = document.querySelector(".slide-right")
const arrowDown = document.querySelector(".arrow-down")
const arrowUp = document.querySelector(".arrow-up")

const slideLength = slideRight.querySelectorAll("div").length

let activeSlide = 0

slideLeft.style.top = `-${(slideLength - 1) * 100}vh`

arrowUp.addEventListener("click", function(){
    changeSlide("up")
})

arrowDown.addEventListener("click", function(){
    changeSlide("down")
})

function changeSlide(direction){
    const sliderHeight = containerSlider.clientHeight
    
    if(direction === "up"){
        activeSlide++
        if(activeSlide >= slideLength){
            activeSlide = 0
        }
    } else {
        activeSlide--
        if(activeSlide < 0){
            activeSlide = slideLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${sliderHeight * activeSlide}px)`
    slideLeft.style.transform = `translateY(${sliderHeight * activeSlide}px)`
}