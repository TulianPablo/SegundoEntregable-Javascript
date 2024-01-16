const container= document.getElementById("container");
let carrito = JSON.parse(localStorage.getItem("misProductos")) || [];

//Obtiene el boton "Ver Carrito" del HTML
const btnVerCarrito= document.getElementById("verCarritoBtn");
//Evento click sobre el boton "Ver Carrito"
btnVerCarrito.addEventListener("click", ()=>verCarrito());

//Obtiene el boton "Vaciar Carrito" del HTML
const btnVaciarCarrito = document.getElementById("vaciarCarritoBtn");
//Evento click sobre el boton "Ver Carrito"
btnVaciarCarrito.addEventListener("click", ()=>vaciarCarrito());

excursiones.forEach((el)=>{
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML=`
    <h2 class="item">${el.nombre}</h2>
    <p id="idDestino">Destino: ${el.destino} </p>
    <p id="idPrecio">Precio: $${el.precio}</p>`;

    //Crea el elemento Imagen de la Card
    const imgExcursion = document.createElement("img");
    imgExcursion.src= el.img;
    imgExcursion.className= "imagen"

    //Crea el boton de "Agregar al Carrito"
    const btnAgregar= document.createElement("button");
    btnAgregar.innerText="Agregar al Carrito";
    btnAgregar.className="boton";
    //Evento click sobre el boton "Agregar Carrito"
    btnAgregar.addEventListener('click', () => agregarAlCarrito(el.id));

     //Agrega la imagen y el boton a la Card
     card.appendChild(imgExcursion);
     card.appendChild(btnAgregar);
     //Agrega la Card como hija del Container
     container.appendChild(card);

});


  function agregarAlCarrito(id) {
    // Busca la excursion en el array de excursiones disponibles por su id
    let excursion = excursiones.find(el=> el.id === id);

        if(excursion.cupo>0){
        // Agrega la excursion al array del carrito
            carrito.push(excursion);
        //Agrega la excursion al localStorage para mantenerlo persistente
            localStorage.setItem("misProductos", JSON.stringify(carrito));

            alert("Agregaste al carrito " + excursion.nombre);
        

        }else {
            console.error('Excursion sin Cupo');
          }
    }

//Funcion que muestra las excursiones seleccionadas
    function verCarrito() {

        if(carrito.length >0){
            // Borra el contenido de la pagina
            document.body.innerHTML = '';
            
            const containerCarrito= document.createElement("div");
            containerCarrito.className="container";

            //Crea un titulo para el carrito
            let tituloCarrito = document.createElement('h2');
            tituloCarrito.textContent = 'Excursiones reservadas: ';
            document.body.appendChild(tituloCarrito);
      
            // Crea una lista para mostrar las excursiones en el carrito
            let carritoLista = document.createElement('ul');
      
            // Itera sobre los elementos del carrito y crea elementos HTML para cada uno
            carrito.forEach(el => {
              let itemExcursion = document.createElement('li');
              itemExcursion.innerText= `${el.nombre} - Destino: ${el.destino} - $${el.precio}`;
              carritoLista.appendChild(itemExcursion);
            });
            //Agrega un elemento para mostrar el total en $ de las excursiones seleccionadas
            let itemTotal= document.createElement('p');
            itemTotal.innerText=`Total Excursiones: $${totalExcursiones()}`;
            carritoLista.appendChild(itemTotal);
      
            // Agrega la lista al cuerpo de la página
            document.body.appendChild(carritoLista);
      
            // Crea un botón para volver al catalogo de excursiones
            let volverBtn = document.createElement('button');
            volverBtn.textContent = 'Volver al catalogo de excursiones';
            volverBtn.className="boton"
            volverBtn.addEventListener('click', () => retornarAlCatalogo());
            document.body.appendChild(volverBtn);
          }else{
            alert("No hay excursiones seleccionadas");
          }

        }
      
           
    //Funcion que calcula el total de las excursiones
    function totalExcursiones(){
            const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);
            return total;
          }
    //Funcion que vacia el carrito de Compras
    function vaciarCarrito(){
        carrito=[];
        localStorage.setItem("misProductos", JSON.stringify(carrito));
        alert("Se ha vaciado el carrito de compras");
        }
    //Funcion que retorna al catalogo de Excursiones
    function retornarAlCatalogo(){

            location.reload();
    }

   

    
  



