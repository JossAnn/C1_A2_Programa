const getDatos = () =>{
    listaU = JSON.parse(localStorage.getItem("listaUsuarios"))
    nombreAux = JSON.parse(localStorage.getItem("auxNombre"));

    let mail = document.getElementById("txtM").value;
    let contra = document.getElementById("txtP").value;
    console.log("Nombre: " + mail + "\n" + "Contraseña: " + contra);
    
    // Checar validación

    for (var i = 0; i<listaU.length; i++){
        nombreAux[0].nombre = listaU[i].U
        cambio = (listaU[i].M == mail.trim() && listaU[i].P == contra.trim()) ? true : false;
    }

    if(cambio == true){
        alert("Ingreso Correcto")
        localStorage.setItem("auxNombre", JSON.stringify(nombreAux))
        window.open("Home3.html", "_self");
    }else{
        alert("Ingreso Incorrecto\n\nIntenta nuevamente")
    }
}
