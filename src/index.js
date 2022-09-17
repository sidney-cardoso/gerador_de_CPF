import GenerateCPF from './modules/generateCPF'
import './styles/style.scss'

const button = document.querySelector('button')
button.addEventListener('click', () => {
    const generate = new GenerateCPF()
    const cpf = document.querySelector('.show-cpf')
    cpf.innerHTML = `${generate.generateNewCPF()}`
})
