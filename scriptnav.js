function layoutHandler(){
    var styleLink = document.getElementById("pagestyle")
    if(window.innerWidth < 995){
        styleLink.setAttribute("href", "nav small.css")
    } else {
        styleLink.setAttribute("href", "nav large.css")
    }
}

window.onresize = layoutHandler
layoutHandler()
