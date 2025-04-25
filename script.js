var firstImage = document.getElementById("firstImage")
var secondImage = document.getElementById("secondImage")
var thirdImage = document.getElementById("thirdImage")

function toggleImage(number) {
    if(number==1) {
        firstImage.hidden = !firstImage.hidden
    }
    if(number==2) {
        secondImage.hidden = !secondImage.hidden
    }
    if(number==3) {
        thirdImage.hidden = !thirdImage.hidden
    }
}