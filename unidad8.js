
if (edad < 18) {
    alert('El contenido de esta pagina solo se limita a mayores de edad por motivos comerciales, por lo que se ocultaran los productos.')
    var productos1 = document.getElementById('productos1');
    var productos2 = document.getElementById('productos2');
    var productos3 = document.getElementById('productos3');
    var productos4 = document.getElementById('productos4');
    var productos5 = document.getElementById('productos5');
    productos1.style.display = 'none';
    productos2.style.display = 'none';
    productos3.style.display = 'none';
    productos4.style.display = 'none';
    productos5.style.display = 'none';
}
