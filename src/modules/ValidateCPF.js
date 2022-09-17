// 705.484.450-52 070.987.720-03
export class ValidateCPF {
    constructor(sendCPF) {
        Object.defineProperty(this, 'cleanCPF', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: sendCPF.replace(/\D+/g, '')
        })
    }

    isSequence() {
        return this.cleanCPF.charAt(0).repeat(11) === this.cleanCPF
    }

    generateNewCPF() {
        const partialCPF = this.cleanCPF.slice(0, -2)
        const digit1 = ValidateCPF.generateDigit(partialCPF)
        const digit2 = ValidateCPF.generateDigit(partialCPF + digit1)
        this.newCPF = partialCPF + digit1 + digit2
    }
    static generateDigit(partialCPF) {
        let result = 0
        let reverse = partialCPF.length + 1

        for (let stringNumber of partialCPF) {
            result += reverse * Number(stringNumber)
            reverse--
        }

        const digit = 11 - (result % 11)

        return digit <= 9 ? String(digit) : '0'
    }
    validate() {
        if (!this.cleanCPF) return false
        if (typeof this.cleanCPF !== 'string') return false
        if (this.cleanCPF.length !== 11) return false
        if (this.isSequence()) return false
        this.generateNewCPF()

        return this.newCPF === this.cleanCPF ? 'CPF VÁLIDO' : 'CPF INVÁLIDO'
    }
}

let validateCPF = new ValidateCPF('070.987.720-03')

console.log(validateCPF.validate())
