import cliente from "../model/cliente"


class ServiceCliente {

    // Core- Regra de Negocio
    Buscar() {
         return RepositoryCliente.Find()
    }
        

    Detalhe(id) {
        // if(!id) {
        //     throw new Error("Favor informar o ID")
        // }
        // const carro = carros.find(it => it.id === id)

        // if(!carro) {
        //     throw new Error(`ID ${id}do carro não encontrado`)
        // }

        // return carro
    }
    //função(parametros)=infinitos.
    async Criar(id, email, senha) {
         if (!id || !email || !senha) {
                throw new Error({ mensagem: "Favor informar todos os dados" })
                
            }
             const cliente = await RepositoryCliente.Create(email, senha)

             return cliente
    }

    Alterar() {}

    Deletar(id) {
         if (!id){
         throw new Error("Favor informa o ID")
         }
        const cliente =  RepositoryCliente.Delete(id)

       return cliente
    }

}

export default new ServiceCliente()