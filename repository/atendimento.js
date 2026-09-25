import atendimento from '../model/atendimento.js';

// INSERT INTO usuarios (email, senha) VALUES ("FIAT", 1998)
class RepositoryAtendimento {
    
    async Find() {
        const atendimento = await atendimento.findAll()

        return atendimento
    }

    async FindById(id) {
        const atendimentoDetalhes = await atendimento.findByPk(id)

        return atendimentoDetalhes
    }

    async Create(email, senha) {
        const atendimentoCreate = await atendimento.create({ email, senha })

        return atendimentoCreate
    }

    async Update(id, email, senha) {
        const atendimentoAlterar = await atendimento.findByPk(id)

        if(!atendimentoAlterar) {
            throw new Error("Usuario não encontrado")
        }

        atendimentoAlterar.email = email || atendimentoAlterar.email
        atendimentoAlterar.senha = senha || atendimentoAlterar.senha

        await atendimentoAlterar.save()
    }

    async Delete(id) {
        const atendimentoDeletado = await atendimento.findByPk(id)

        if(!atendimentoDeletado){
            throw new Error("Usuario não encontrado")
        }

        await atendimentoDeletado.destroy()

        return atendimentoDeletado
    }

    async FindByEmail(email) {
        return atendimento.findOne({ where: { email } })
    }
}

export default new RepositoryAtendimento()