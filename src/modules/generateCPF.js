import { ValidateCPF } from './ValidateCPF'

export default class GenerateCPF {
    randomNumber(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min))
    }
    formattedCPF(cpf) {
        return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`
    }

    generateNewCPF() {
        const cpf = this.randomNumber()
        const digit1 = ValidateCPF.generateDigit(cpf)
        const digit2 = ValidateCPF.generateDigit(cpf + digit1)
        const newCPF = cpf + digit1 + digit2
        return this.formattedCPF(newCPF)
    }
}
