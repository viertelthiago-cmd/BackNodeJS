import cliente from '../model/cliente.js';

// INSERT INTO carros (marca, ano) VALUES ("FIAT", 1998)
class RepositoryCliente {
    
    async Find() {
        const cliente = await cliente.findAll()

        return cliente
    }

    async FindById(id) {
        const clienteDetalhes = await cliente.findByPk(id)

        return clienteDetalhes
    }

    async Create(email, senha) {
        const clienteConta = await cliente.create({ email, senha })

        return clienteConta
    }

    async Update(id, email, senha) {
        const clienteMudar = await cliente.findByPk(id)

        if(!clienteMudar) {
            throw new Error("Cliente não encontrado")
        }

        clienteMudar.email = email || clienteMudar.email
        clienteMudar.senha = senha || clienteMudar.senha

        await clienteMudar.save()
    }

    async Delete(id) {
        const clienteDeletar = await cliente.findByPk(id)

        if(!clienteDeletar){
            throw new Error("Cliente não encontrado")
        }

        await clienteDeletar.destroy()

        return clienteDeletar
    }
}

export default new RepositoryCliente()