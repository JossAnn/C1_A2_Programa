let i=0;

const getDatosR =()=>{
    listaU = JSON.parse(localStorage.getItem("listaUsuarios"));
    let mail = document.getElementById("txtM").value;
    let username = document.getElementById("txtU").value;
    let password = document.getElementById("txtP").value;
    let passworda = document.getElementById("txtPA").value;

    if(mail == "" || username == "" || password == "" || password == "" || passworda == ""){
        alert("Rellene todos los campos para continuar!")
    }else if(mail.includes('gmail.com') || mail.includes('outlook.com') || mail.includes('hotmail.com')){
        if(passworda != password){
            alert("Las contraseñas no coinciden!")
        }else{
            alert("Registro exitoso!")
            listaU.push({M: mail, U: username, P: password, PA: passworda})
            window.open("inicio.html", "_self");
            i++; 
        }
    }else{
        alert("Por favor ingrese una dirección de correo valida")
    }

    localStorage.setItem("listaUsuarios", JSON.stringify(listaU))

}