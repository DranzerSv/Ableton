let icono = document.getElementById("icono-menu")
let menuMobile=document.getElementById("menu-mobile")





function alternar(){

    menuMobile.classList.toggle('hide')

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

