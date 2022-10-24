window.onload =  function(){
    alert("Página con reloj digital")
    mueveReloj()
    window.addEventListener("beforeunload",(e)=>{
        return "Página cancelada"
    }) 
}
function mueveReloj(){
    const hora = new Date();
    var horaResult = hora.toLocaleTimeString();

    document.form_reloj.reloj.value = horaResult

    setTimeout("mueveReloj()",1000)
}





