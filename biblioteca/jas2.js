let livros = [];


const titulo = document.getElementById('titulo');
const autor = document.getElementById('autor');
const editora = document.getElementById('editora');
const form = document.getElementById('form');
const mostrar = document.getElementById('mostrar');
const del = document.getElementById('del');
const cod = document.getElementById('codigo');


//if (document.getElementById('register').addEventListener('click', registerBook));

/*const registerBook = => {*/


const registroLivro = (ev) => { 
    form.addEventListener('submit', (e) => {
    
    let err = 0
    let erro1 = document.getElementById('01');
    let erro2 = document.getElementById('02');
    let erro3 = document.getElementById('03');
    let erro4 = document.getElementById('04');
    erro1.style.visibility = 'hidden';
    erro2.style.visibility = 'hidden';
    erro3.style.visibility = 'hidden';
    erro4.style.visibility = 'hidden';
    
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
     if(editora.value === "" || editora.value == null ) {
        e.preventDefault();
       
        erro3.style.visibility = 'visible';
        err++
    }
    if(cod.value === "" || cod.value == null ) {
        e.preventDefault();
        
        erro4.style.visibility = 'visible';
        err++
    }
    e.preventDefault();
    let livro = {
        tituloLivro: titulo.value,
        autorLivro: autor.value,
        editoraLivro: editora.value,
        codigoLivro: cod.value 
    }
    
    if (err==0){
        livros.push(livro);
        document.forms[0].reset();
    
        localStorage.setItem('Meus Livros', JSON.stringify(livros))};
    
})};



const mostrarLivro = (ev) => {
    for (let i=0; i<livros.length; i++){
        let result = document.getElementById('result');
        result.innerHTML += JSON.stringify(livros[i],'t',2);
    }
}



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', registroLivro);
    document.getElementById('mostrar').addEventListener('click', mostrarLivro);
});

