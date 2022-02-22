let fab = document.getElementById("fab");
let add = document.getElementById("add");
let contForm = document.getElementById("contForm");
let form = document.getElementById("form")
let main = document.getElementById("fullContainer");
let close = document.getElementById("close-modal")
let empty = document.getElementById("empty");
let list = document.getElementById("lista");
let contList = document.getElementById("ul");
let btn = document.getElementById("btn");
let contDetalles = document.getElementById("contDetails");
let detalles = document.getElementById("details");
let closeD = document.getElementById("close-details");

// abrir form
fab.addEventListener('click', ()=>{
    empty.style.display="none";
    contForm.style.display="flex";
    contList.style.display="none";
    list.style.display="none";
    main.style.backgroundColor="rgba(169, 179, 190, 0.78)";
});

// cerrar form
close.addEventListener('click', () =>{
    contForm.style.display="none";
    main.style.backgroundColor="#fafafa";
    // if(list.style.display="none"){
    //     empty.style.display="flex";
    // }
    // else{   
    //     empty.style.display="none";
    // }
});

// botón agregar
    add.addEventListener('click',()=>{
        // e.preventDefault();
        let nombre = document.getElementById("nombre").value;
        let select = document.getElementById("seleccion").value;
        let descript = document.getElementById("descripcion").value;
        let item = `<li class="item">
                            <img src="${select}" alt="ver detalles">
                            <p>${nombre}</p>
                            <button onclick="verDetalles('${nombre}','${select}','${descript}')">
                                <img src="assets/item-arrow.svg">
                            </button>
                        </li>`
        list.innerHTML += item;
        form.reset();
        if(innerWidth < 769){
            contForm.style.display="none";
            empty.style.display="none"
            contList.style.display="block"
            contList.style.display="block"
            list.style.display="block"
            main.style.backgroundColor="#fafafa";
        }else{
            contForm.style.display="flex";
            empty.style.display="none"
            contList.style.display="block";
            fab.style.display="none";
        }
    });


// abrir pantalla detalles
let verDetalles = (nombre,select,descript)=>{
    contList.style.display="none";
    detalles.style.display="block";
    contDetalles.style.display="block";
    fab.style.display="none";
    closeD.style.display="flex";
    let info = `<div id="product">
                    <div class="product-img">
                        <img src="${select}" alt="">
                    </div>
                    <h3>${nombre}</h3>
                    <p>${descript}</p>
                </div>`
    detalles.innerHTML = info;    
}
// cerrar pantalla detalles
    closeD.addEventListener('click', ()=>{
        contList.style.display="block";
        detalles.style.display="none";
        closeD.style.display="none";
        if(innerWidth < 769){
            fab.style.display="block";
        }else{
            fab.style.display="none";
        }
    });


    // variables botones y pantallas
let fab = document.getElementById("fab");
let add = document.getElementById("add");
let contForm = document.getElementById("contForm");
let form = document.getElementById("form")
let main = document.getElementById("fullContainer");
let close = document.getElementById("close-modal")
let empty = document.getElementById("empty");
let list = document.getElementById("lista");
let contList = document.getElementById("ul");
let contDetalles = document.getElementById("contDetails");
let detalles = document.getElementById("details");
let closeD = document.getElementById("close-details");

// abrir form
fab.addEventListener('click', ()=>{
    empty.style.display="none";
    contForm.style.display="flex";
    contList.style.display="none";
    list.style.display="none";
    main.style.backgroundColor="rgba(169, 179, 190, 0.78)";
});

// cerrar form
close.addEventListener('click', () =>{
    contForm.style.display="none";
    main.style.backgroundColor="#fafafa";
    // if(list.style.display="none"){
    //     empty.style.display="flex";
    // }
    // else{   
    //     empty.style.display="none";
    // }
});
// abrir pantalla detalles
function verDetalles(nombre,select,descript){
    let info = `<div id="product">
                    <div class="product-img">
                        <img src="${select}" alt="">
                    </div>
                    <h3>${nombre}</h3>
                    <p>${descript}</p>
                </div>`
    detalles.innerHTML = info;   
    
    contList.style.display="none";
    detalles.style.display="block";
    contDetalles.style.display="block";
    fab.style.display="none";
    closeD.style.display="flex";
}
// boton ver detalles en los items del listado



        // botón agregar
        add.addEventListener('click',(e)=>{
            e.preventDefault();
            let nombre = document.getElementById("nombre").value;
            let select = document.getElementById("seleccion").value;
            let descript = document.getElementById("descripcion").value;
            
            // if(nombre != "" && select != ""){
                let item = `<li class="item">
                                <img src="${select}" alt="ver detalles">
                                <p>${nombre}</p>
                                <button data-titulo="${nombre}" data-tipo="${select}" data-desc="${descript}">
                                    <img src="assets/item-arrow.svg">
                                </button>
                            </li>`
                list.innerHTML += item;

                contForm.style.display="none"
                // empty.style.display="none"
                contList.style.display="flex"
                // contDetalles.style.display="none"
            form.reset();
            // }else{
            //     alert('odo tmal')
            // }


            // if(innerWidth < 769){
            //     contForm.style.display="none";
            //     empty.style.display="none"
            //     contList.style.display="block"
            //     contList.style.display="block"
            //     list.style.display="block"
            //     main.style.backgroundColor="#fafafa";
            // }else{
            //     contForm.style.display="flex";
            //     empty.style.display="none"
            //     contList.style.display="block";
            //     fab.style.display="none";
            // }
        });
// botón agregar

    // add.addEventListener('click',(e)=>{
    //     e.preventDefault();
    //     let nombre = document.getElementById("nombre").value;
    //     let select = document.getElementById("seleccion").value;
    //     let descript = document.getElementById("descripcion").value;
    //     let inputName = document.querySelector(".nombre");
    //     let inputSelect = document.querySelector(".seleccion")

        // validar campos form
        // if(nombre !='' && select !=''){
        // reset inputs
        // inputName.classList.remove('invalido')
        // inputSelect.classList.remove('invalido')
        // contForm.style.display="none";
        // contList.style.display="block"
        //         let item = `<li class="item">
        //                         <img src="${select}" alt="ver detalles">
        //                         <p>${nombre}</p>
        //                         <button onclick="verDetalles('${nombre}','${select}','${descript}')">
        //                             <img src="assets/item-arrow.svg">
        //                         </button>
        //                     </li>`
        //         list.innerHTML += item;

        // }else{
        //     inputName.classList.add('incorrecto')
            // inputName.placeholder = "Hay que agregar un título";
        //     inputSelect.classList.add('incorrecto)
        // }
        // form.reset();

        // if(nombre != "" && select != ""){
        //     let item = `<li class="item">
        //                     <img src="${select}" alt="ver detalles">
        //                     <p>${nombre}</p>
        //                     <button onclick="verDetalles('${nombre}','${select}','${descript}')">
        //                         <img src="assets/item-arrow.svg">
        //                     </button>
        //                 </li>`
        //     list.innerHTML += item;
        //     form.reset();
        // }else{
        //     let contMsj = document.querySelector(".msjForm");
        //     let msj = `<p>hay q completarr</p>`;
        //     contMsj.innerHTML += msj;
        //     empty.style.display="flex"
        //     contList.style.display="none"
        // }

        
        // if(innerWidth < 769){
        //     contForm.style.display="none";
        //     empty.style.display="none"
        //     contList.style.display="block"
        //     contList.style.display="block"
        //     list.style.display="block"
        //     main.style.backgroundColor="#fafafa";
        // }else{
        //     contForm.style.display="flex";
        //     empty.style.display="none"
        //     contList.style.display="block";
        //     fab.style.display="none";
        // }
    // });



// cerrar pantalla detalles
    closeD.addEventListener('click', ()=>{
        contList.style.display="block";
        detalles.style.display="none";
        closeD.style.display="none";
        if(innerWidth < 769){
            fab.style.display="block";
        }else{
            fab.style.display="none";
        }
    });