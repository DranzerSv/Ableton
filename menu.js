let icono = document.getElementById("icono-menu")
let menuMobile=document.getElementById("menu-mobile")
let mostrando = false



function alternar(){
    if(mostrando==false){
        menuMobile.style.display="inline-block"
        
        mostrando=true
    }else{
        menuMobile.style.display="none"
        mostrando=false

    }
    menuMobile.classList.toggle('active')

}
function ocultar(){
    if(window.innerWidth>768){
        menuMobile.style.display="none"
        mostrando=false
    }
}
icono.addEventListener("click", alternar)
window.addEventListener("resize", ocultar)
