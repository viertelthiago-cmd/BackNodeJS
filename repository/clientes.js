
import cliente from '../model/cliente.js'

class RepositoryCliente {

    async Find() {
        const cliente = await cliente.findAll()

        return cliente
    }
    async FindById(id) {
        const clienteDetalhes = await cliente.FindByPk(id)

        return clienteDetalhes
    }
    async Create(email, senha) {
        const clienteCreate = await cliente.create({email, senha})

        return clienteCreate
    }
    async Update() {
        const uapdated = await cliente.Update()

        return uapdated
    }
    async Delete(id){
        const clienteDeletar = await cliente.findByPk(id)

        if(!clienteDeletar) {
            throw new Error ("Cliente não encontrado")
        }
        await clienteDeletar
    }
}

export default new RepositoryCliente()