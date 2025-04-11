const selectCat = document.getElementById('SelectCategorias');

async function CargarCategorias() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();

    data.categories.forEach(cat => {
        const option = document.createElement('option');
        option.textContent = cat.strCategory;
        option.value = cat.strCategory;
        selectCat.appendChild(option);
    });

}

const divPrincipalPlatos = document.getElementById('divPrincipalPlatos');

selectCat.addEventListener('change', async (e) => {
    divPrincipalPlatos.innerHTML = ''; // Limpiar los platos anteriores
    const categoriaElegida = e.target.value;
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoriaElegida}`);
    const data = await response.json();
    
    data.meals.forEach(plato => {
        const divPlato = document.createElement('div');
        divPlato.className = "divPlato";
        const imgPlato = document.createElement('img');
        imgPlato.className = "imgPlato";
        const nombrePlato = document.createElement('h3');
        nombrePlato.className = "nombrePlato";

        imgPlato.src = plato.strMealThumb;
        nombrePlato.textContent = plato.strMeal;
        divPlato.appendChild(imgPlato);
        divPlato.appendChild(nombrePlato);

        divPrincipalPlatos.appendChild(divPlato);
    });
});



CargarCategorias();