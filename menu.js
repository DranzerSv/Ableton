let icono = document.getElementById("icono-menu")
let menuMobile=document.getElementById("menu-mobile")





function alternar(){

    menuMobile.classList.toggle('hide')

    if(icono.innerHTML=="Menu+"){
        icono.innerHTML="Menu-"
    }else{
        icono.innerHTML="Menu+"
    }

}
function ocultar(){
    if(window.innerWidth > 1024){
        menuMobile.style.display="none"
        
    }else if(window.innerWidth < 1024){
        menuMobile.style.display="flex"
    }
}
icono.addEventListener("click", alternar)
window.addEventListener("resize", ocultar)

