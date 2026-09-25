import cliente from '../model/cliente.js'
import RepositoryCliente from '../repository/cliente.js'

class ServiceCliente {

    // Core- Regra de Negocio
    async Buscar() {
        return RepositoryCliente.Find()
    }

    async Detalhe(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        const cliente = await RepositoryCliente.FindById(id)
        
        if(!cliente) {
            throw new Error(`ID ${id} do cliente não encontrado`)
        }

        return cliente
    }
    // Função(parametros, parametros, parametros)
    async Criar(email, senha) {
        if (!email || !senha) {
            throw new Error("Favor informar todos os dados")
        }

        const cliente = await RepositoryCliente.Create(email, senha)

        return cliente
    }

    async Alterar(id, email, senha) {
        if (!id) {
            throw new Error("Favor informar os dados");
        }

        const clienteAlterado = await RepositoryCliente.Update(id, email, senha)
        
        return clienteAlterado
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }
        
        const cliente = await RepositoryCliente.Delete(id)

        return cliente
    }

}

export default new ServiceCliente()