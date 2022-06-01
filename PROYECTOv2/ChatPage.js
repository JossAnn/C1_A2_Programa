const comentar = () => {
    listaC = JSON.parse(localStorage.getItem("auxComentario"))
    let comentarioV = document.getElementById("contenidoID").value 

    comentarioV = (comentarioV == "") ? "ㅤ" : comentarioV
    listaC.push({comentario: comentarioV})

    document.getElementById("simulacionComentario").innerHTML = comentarioV
    localStorage.setItem("auxComentario", JSON.stringify(listaC)) 
}