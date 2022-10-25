
function precioporcategoria() {
    let precio = 200
    descest = 80
    desctra = 50
    descjun = 15
    cantidad = document.getElementById("cantidad").value;
    let x = document.getElementById('elprecio')
    if (document.getElementById('menu').value == 3) {

        x.innerHTML = (precio - (precio * descjun / 100))*cantidad

    }
    else {

        if (document.getElementById('menu').value == 2) {
            let x = document.getElementById('elprecio')
            x.innerHTML = (precio - (precio * desctra / 100))*cantidad
        }
        else {
            if (document.getElementById('menu').value == 1) {
                let x = document.getElementById('elprecio')
                x.innerHTML = (precio - (precio * descest / 100))*cantidad
            }
        }

    }

}

function precioporcantidad() {
    let precio = 200
    descest = 80
    desctra = 50
    descjun = 15
    cantidad = document.getElementById("cantidad").value;
    let x = document.getElementById('elprecio')
    if (document.getElementById('menu').value == 3) {

        x.innerHTML = (precio - (precio * descjun / 100))*cantidad

    }
    else {

        if (document.getElementById('menu').value == 2) {
            let x = document.getElementById('elprecio')
            x.innerHTML = (precio - (precio * desctra / 100))*cantidad
        }
        else {
            if (document.getElementById('menu').value == 1) {
                let x = document.getElementById('elprecio')
                x.innerHTML = (precio - (precio * descest / 100))*cantidad
            }
        }

    }

}



function resumen() {
    let y = document.getElementById('resumennombre')
    let textohijo1 = document.createTextNode('Nombre:')
    y.appendChild(textohijo1)

    let valoringresado1 = document.getElementById("nombre").value; 
    document.getElementById("contnombre").innerHTML = valoringresado1; 

    let z = document.getElementById('resumenapellido')
    let textohijo2 = document.createTextNode('Apellido: ')
    z.appendChild(textohijo2)

    let valoringresado2 = document.getElementById("apellido").value; 
    document.getElementById("contapellido").innerHTML = valoringresado2; 

    let d = document.getElementById('resumencorreo')
    let textohijo3 = document.createTextNode('correo: ')
    d.appendChild(textohijo3)

    let valoringresado3 = document.getElementById("email").value; 
    document.getElementById("contcorreo").innerHTML = valoringresado3; 

    let e = document.getElementById('resumencantidad')
    let textohijo4 = document.createTextNode('Cantidad: ')
    e.appendChild(textohijo4)

    let valoringresado4 = document.getElementById("cantidad").value; 
    document.getElementById("contcantidad").innerHTML = valoringresado4; 


    let f = document.getElementById('resumencategoria')
    let textohijo5 = document.createTextNode('Categoria: ')
    f.appendChild(textohijo5)

    let valoringresado5 = document.getElementById("categoria").value; 
    document.getElementById("contcategoria").innerHTML = valoringresado5; 


    let g = document.getElementById('resumentotal')
    let textohijo6 = document.createTextNode('Total: ')
    g.appendChild(textohijo6)

    let valoringresado6 = document.getElementById("total").value; 
    document.getElementById("conttotal").innerHTML = valoringresado6; 


}









