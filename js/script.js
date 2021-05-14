var totalSeconds = 0;
var rotate = 0;
function countTimer() {
    ++totalSeconds;
    var hourse = Math.floor(totalSeconds/3600);
    var minute = Math.floor((totalSeconds - hourse*3600)/60);
    var seconds = totalSeconds - (hourse*3600 + minute*60);
    if(hourse < 10) hourse = "0"+hourse
    if(minute < 10) minute = "0"+minute;
    if(seconds < 10) seconds = "0"+seconds;
    document.getElementsByClassName("minute")[0].innerHTML = minute;
    document.getElementsByClassName("seconde")[0].innerHTML = seconds;
    document.getElementsByClassName("hourse")[0].innerHTML = hourse;

    rotate = rotate + 6;

    document.getElementById("big").style.transform = "rotateZ(" + rotate + "deg)";
    document.getElementById("small").style.transform = "rotateZ(" + rotate + "deg)";
};
setInterval(countTimer,1000)
