const active_bar=document.getElementById("bar");
const active_cross=document.getElementById("cross");
const active_header=document.getElementById("header1");

function dispaly_nav(){
   active_header.setAttribute("class","active")
}
active_bar.addEventListener("click",dispaly_nav)
function hide_nav(){
   active_header.removeAttribute("class");
}
active_cross.addEventListener("click",hide_nav);
