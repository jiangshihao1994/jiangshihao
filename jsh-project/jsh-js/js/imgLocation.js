window.onload = function() {
    imgLocation("test", "box");

    //var boxs = document.getElementById('test').getElementsByClassName('box');
    //console.log(boxs)
};

function imgLocation(father, son) {
    var a_alldiv = document.getElementById(father);
    var ccontent = getChildElement(a_alldiv, son);
    var imgwidth = ccontent[0].offsetWidth;
    var num = Math.floor(document.documentElement.clientWidth / imgwidth);
    a_alldiv.style.cssText = "width:" + imgwidth * num + "px;margin:0px auto";

    var boxheightArr = [];
    for (var i = 0; i < ccontent.length; i++) {
        if (i < num) {
            boxheightArr[i] = ccontent[i].offsetHeight;
            //console.log(boxheightArr[i]);
        } else {
            var minheight = Math.min.apply(null, boxheightArr);
            // console.log(minheight);
            var minindex = getminheightlocation(boxheightArr, minheight);
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minheight + "px";
            ccontent[i].style.left = ccontent[minindex].offsetLeft + "px";
            boxheightArr[minindex] = boxheightArr[minindex] + ccontent[i].offsetHeight;
        }
    }
}

function getminheightlocation(boxheightArr, minheight) {
    for (var i in boxheightArr) {
        if (boxheightArr[i] == minheight) {
            return i;
        }
    }
}


function getChildElement(father, son) {
    var Arr1 = [];
    var allcontent = father.getElementsByTagName("*");
    console.log(allcontent)
    for (var i = 0; i < allcontent.length; i++) {
        if (allcontent[i].className == son) {
            Arr1.push(allcontent[i]);
        }
    }
    console.log(Arr1)
    return Arr1;
}