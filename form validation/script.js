const name = document.getElementById('nome')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('erro')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Nome é necessário')
    }
    
    if (password.value.length <= 6) {
        messages.push('Senha deve ser maior do que 6 caracteres')
    }

    if (password.value.length >= 20) {
        messages.push('Senha deve ser menor que 20 caracteres')
    }

    if (password.value === 'password') {
        messages.push('Senha não pode ser "senha"')
    }
    
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    e.preventDefault()
})