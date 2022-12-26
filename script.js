function layoutHandler(){
    var styleLink = document.getElementById("pagestyle")
    if(window.innerWidth < 780){
        styleLink.setAttribute("href", "style small.css")
    } else if(window.innerWidth < 995){
        styleLink.setAttribute("href", "style medium.css")
    } else {
        styleLink.setAttribute("href", "style large.css")
    }
}

window.onresize = layoutHandler
layoutHandler()