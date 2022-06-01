// Aquí están nuestros datos con localStorage
const lista = [{M:"a", U:"b", P:"c", PA:"d"}]
const auxNombre = [{nombre: " "}]
const auxComentario = [{comentario: " "}]

localStorage.setItem("listaUsuarios",JSON.stringify(lista))
localStorage.setItem("auxNombre",JSON.stringify(auxNombre))
localStorage.setItem("auxComentario",JSON.stringify(auxComentario))
