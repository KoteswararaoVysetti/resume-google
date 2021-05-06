function color()
{
    var r = document.getElementById("r").value ;
    var g = document.getElementById("g").value ;
    var b = document.getElementById("b").value ;
    var R = Number(r).toString(16) ;
    var G = Number(g).toString(16) ;
    var B = Number(b).toString(16) ;
    if(R.length == 1) R = "0" + R ;
    if(G.length == 1) G = "0" + G ;
    if(B.length == 1) B = "0" + B ;
    var RGB = "#" + R + G + B ;
    var tot = Number(r) + Number(g) + Number(b) ;
    if(tot <= 341)
    document.getElementById("rgb").style.color = "white" ;
    else document.getElementById("rgb").style.color = "black" ;
    document.getElementById("colordiv").style.backgroundColor = RGB ;
    var x = "rgb(" + r + ", " + g + ", " + b + ")"
    document.getElementById("rgb").innerHTML = x ;
} ;