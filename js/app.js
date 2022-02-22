// contenedores
let fullContainer = document.getElementById('fullContainer')
let empty = document.getElementById('empty')
let form = document.getElementById('contForm')
let modalForm = document.querySelector('.modal-body')
let listado = document.getElementById('contLista')
let detalle = document.getElementById('contDetails')
// botones
let fab = document.getElementById('fab')
let cerrar = document.getElementById('close-modal')
let closeD = document.getElementById("close-details");
// form,cards etc
let formProd = document.getElementById('form')
let listaProd = document.getElementById('lista')
let detalleProd = document.getElementById('details')


// click en el fab button
fab.addEventListener('click', function (event) {
    form.style.opacity = "1"
    form.style.visibility = "visible"
    modalForm.classList.toggle('modal-close')
})

// cerrar formulario
cerrar.addEventListener('click', ()=>{
    modalForm.classList.toggle('modal-close')
    setTimeout(() => {
        // close.style.display="none"  
        // fab.style.zIndex="1"
        form.style.opacity = "0"
        form.style.visibility = "hidden"
        fullContainer.style.backgroundColor="#fafafa"
    }, 200);
})


// evento submit cuando el envia el formulario. Creamos un nuevo item dentro del listado.
formProd.addEventListener('submit', function (event) {
    event.preventDefault()
    let titulo = document.getElementById('nombre').value
    let tipo = document.getElementById('seleccion').value
    let desc = document.getElementById('descripcion').value
    let inputNombre = document.querySelector('.nombre')
    let inputSelect = document.querySelector('.seleccion')
    if (titulo !="" && tipo !="") {
        let item = `<li class="item">
                        <img src="${tipo}" alt="ver detalles">
                        <p>${titulo}</p>
                        <button id="verMas" data-titulo="${titulo}" data-tipo="${tipo}" data-desc="${desc}">
                            <img src="assets/item-arrow.svg">
                        </button>
                    </li>`

        listaProd.innerHTML += item

        // para desktop
        if(innerWidth < 769){
            empty.style.display = 'none'
            modalForm.classList.toggle('modal-close')
            form.style.opacity = "0"
            form.style.visibility = "hidden"
            listado.style.display = 'block'

            }else{
                form.style.display="flex";
                form.style.opacity = "1"
                form.style.visibility = "visible"
                empty.style.display="none"
                listado.style.display="block";
                fab.style.display="none";
            }
        // form reset
        formProd.reset()
        } else {
            inputNombre.classList.add("incorrecto")
            inputSelect.classList.add("incorrecto")
        }
    })
    // funcion que muestra el detalle del producto
function verDetalle(titulo, tipo, desc) {
    let newProd = `<li id="product">
                        <div class="product-img">
                            <img src="${tipo}" alt="">
                        </div>
                        <h3>${titulo}</h3>
                        <p>${desc}</p>
                    </li>`

    detalleProd.innerHTML = newProd;

    if(innerWidth < 769){
        empty.style.display = 'none'
        form.style.opacity = "0"
        form.style.visibility = "hidden"
   
        listado.style.display = 'none'
        detalle.style.display = 'block'
        detalleProd.style.display="block"
        fab.style.display="none"
    }else{
        form.style.opacity = "1"
        form.style.visibility = "visible"
        listado.style.display = 'none'
        detalle.style.display = 'block'
        detalleProd.style.display="block"
    }
}
// boton ver detalle en los itesm del listado
listaProd.addEventListener('click', function (event) {
    if (event.target.getAttribute('data-titulo')) {
        console.log('holaaas')
    let titulo = event.target.getAttribute('data-titulo')
    let tipo = event.target.getAttribute('data-tipo')
    let desc = event.target.getAttribute('data-desc')

    verDetalle(titulo, tipo, desc);

    }
})

// cerrar pantalla detalles
closeD.addEventListener('click', ()=>{
    listado.style.display="block";
    detalle.style.display="none";
    if(innerWidth < 769){
        fab.style.display="block";
    }else{
        fab.style.display="none";
    }
});

if (innerWidth < 769){
    window.addEventListener('click', (e)=>{
        console.log(e.target)
        if (e.target == contForm){
            modalForm.classList.toggle('modal-close')
            setTimeout(() => {
                form.style.opacity = "0"
                form.style.visibility = "hidden"
                fullContainer.style.backgroundColor="#fafafa"
            }, 200);
        }
    })
}