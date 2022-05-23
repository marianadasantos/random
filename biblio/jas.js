let livros = [];


const titulo = document.getElementById('titulo');
const autor = document.getElementById('autor');
const editora = document.getElementById('editora');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    let err = 0
    let erro1 = document.getElementById('01');
    var erro2 = document.getElementById('02');
    let erro3 = document.getElementById('03');
    erro1.style.visibility = 'hidden';
    erro2.style.visibility = 'hidden';
    erro3.style.visibility = 'hidden';
    
    
    if(titulo.value === "" || titulo.value == null ) {
        e.preventDefault();
        
        erro1.style.visibility = 'visible';
        err++
    }
    if(autor.value === "" || autor.value == null ) {
        e.preventDefault();
        
        erro2.style.visibility = 'visible';
        err++
    }
    if(editora.value === "" || editora.value == null ) {
        e.preventDefault();
        
        erro3.style.visibility = 'visible';
        err++
    }
    e.preventDefault();
    let livro = {
        tituloLivro: titulo.value,
        autorLivro: autor.value,
        editoraLivro: editora.value
    }
    if (err==0){
        livros.push(livro);
        document.forms[0].reset();
    
        localStorage.setItem('Meus Livros', JSON.stringify(livros))};
    
    
});



//listar com for

//