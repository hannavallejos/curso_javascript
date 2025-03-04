
let compras = JSON.parse(localStorage.getItem("compras")) || [];

const agregarCompra = (compra) => {
    compras.push(compra);
    localStorage.setItem("compras", JSON.stringify(compras));
    container.innerHTML = "";
    mostrarCompras();
    console.log("esta es la nueva compra: ", compras);
};

const quitarCompra = (nombre) => {
    compras = compras.filter(el => el.compra !== nombre);
    localStorage.setItem("compras", JSON.stringify(compras));
    container.innerHTML = "";
    mostrarCompras();
};

const miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const compra = e.target[0].value;
    const prioridad = e.target[1].value;

    const nuevaCompra = {
        compra,
        prioridad
    };
    agregarCompra(nuevaCompra);
   
});

const crearCard = (compra) => {
    const card = document.createElement("div");
    card.className = "card";

    const compraARealizar = document.createElement("p");
    compraARealizar.innerText = compra.compra;

    const prioridad = document.createElement("p");
    prioridad.innerText = `${compra.prioridad}`;

    const finalizarCompra = document.createElement("button");
    finalizarCompra.innerText = "finalizar compra";
    finalizarCompra.onclick = () => quitarCompra(compra.compra);

    card.appendChild(compraARealizar);
    card.appendChild(prioridad);
    card.appendChild(finalizarCompra);

    container.appendChild(card);
};


const mostrarCompras = () => {
    compras.forEach(el => {
        crearCard(el);
    });
};

mostrarCompras();