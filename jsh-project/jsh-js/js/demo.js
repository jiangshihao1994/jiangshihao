Window.onload = function() {
    imgLocation("test", "box")
}

function imgLocation(parent, content) {
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent, content);
    var imgwidth = ccontent[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / imgwidth);
    cparent.style.cssText = "width:" + imgwidth * cols + "px";
}

function getChildElement(parent, content) {
    var Arr1 = [];
    var allcontent = parent.getElementsByTagName("*");
    for (var i = 0; i < allcontent.length; i++) {
        if (allcontent[i].classname == content) {
            Arr1.push(allcontent[i]);
        }
    }
    return Arr1;
}