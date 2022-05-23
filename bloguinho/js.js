const tempPost = {
    nome: "",
    txt: ""
}

 //o parse/localstorage serve pra manter o que tava no banco de dados já e enviar pra client
    //se no posts não tiver nada (??) retorna array vazio ([])
const getLocalStorage = () => JSON.parse(localStorage.getItem['posts']) ?? []

 //posts = (key), jsonstringify(posts) = (value)
const setLocalStorage = (grupoPosts) => localStorage.setItem('posts', JSON.stringify(grupoPosts))

const lerPosts = () => getLocalStorage()


const criarPost = (post) => {
    const grupoPosts = getLocalStorage()
    grupoPosts.push(post)
    setLocalStorage(grupoPosts) 
}

const camposValidos = () => {
    return document.getElementById('form').reportValidity()
};

const salvarPost = () => {
    if (camposValidos()) {
        const post = {
            nome: document.getElementById('autor').value,
            txt: document.getElementById('text').value 
        }
    criarPost(post) 
    }
}


const delPost = (index) => {
    const grupoPosts = lerPosts()
    grupoPosts.splice(index, 1)
    setLocalStorage(grupoPosts)
}

// INÍCIO MODAL

const editarPost = (index, post) => {
    const grupoPosts = lerPosts()
    grupoPosts[index] = post
    setLocalStorage(grupoPosts)
}

const LimparCampos = () => {
    const campos = document.querySelectorAll('camp')
    campos.forEach(campos => campos.value = "")
}

function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if(modal) {
    modal.classList.add('mostrar');
    const texto1 = document.getElementById('texto')
    modal.addEventListener('click', (ev) => {
        if(ev.target.id == modalID || ev.target.className == 'fechar') {
            LimparCampos()
            modal.classList.remove('mostrar');
        }
    });
}
}


const salvarEdicao = () => {
    const index = document.getElementById('texto2').dataset.index
    if (index == 'new'){
        updateTela()
        closeModal()
    }else {

    }
    
}

const criarFeed = (post, index) => {
    const novoPost = document.createElement('div')
    novoPost.innerHTML =  `
        <p>${post.nome}</p>
        <p>${post.txt}</p>
        <button type="button" id="editar-${index}">Editar</button>
        <button type="button" id="excluir-${index}">Excluir</button>
    `
    document.querySelector('#posts').appendChild(novoPost)
}

const limparFeed = () => {
    const postagens = document.querySelector('#posts> p button')
    postagens.forEach(postagem => postagem.parentNode.removeChild(postagem))
}

const updateTela = () => {
    const grupoPosts = lerPosts()
    limparFeed()
    //cada cliente do local storage e manda pro callback
    grupoPosts.forEach(criarFeed)
}

const preencherCampos = (post) => {
    document.getElementById('text').value = post.txt
}

const editaPost = (index) => {
    const post = lerPosts()[index]
    preencherCampos(post)
    iniciaModal()
}

const editeDelete = (e) => {
    if (e.target.type == 'button') {
        const [action, index] = e.target.id.split('-')

        if (action == 'edit') {
            editaPost(index)
        }
        else{
            deletar
        }
    }
    
}

updateTela() 

const salvar = document.getElementById('salvar-edicao')
salvar.addEventListener('click', salvarEdicao)

const postar = document.getElementById('postar');
postar.addEventListener('click', criarPost)

const deletar = document.getElementById('excluir');
deletar.addEventListener('click', delPost)

const edit = document.querySelector('#div>buton')
edit.addEventListener('click', editeDelete)
//TERMINA MODAL

