import ServiceAtendimento from '../service/atendimento.js'

class ControllerAtendimento {
    // Recebimento e a Saida das info
    async Buscar(req, res) {
        try {
            console.log(req.session)
            const usuarios = await ServiceAtendimento.Buscar()
            res.status(200).send({ mensagem: usuarios })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const usuario = await ServiceAtendimento.Detalhe(id)

            res.status(200).send({ mensagem: usuario })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Criar(req, res) {
        try {
            const { email, senha } = req.body

            await ServiceAtendimento.Criar(email, senha)
            
            res.status(201).send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Alterar(req, res) {
        try {
            const { email, senha } = req.body
            const id = req.session.id // Session, Context

            await ServiceAtendimento.Alterar(id, email, senha)
            
            res.status(201).send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Deletar(req, res) {
        try {
            const identificador = req.params.id

            await ServiceAtendimento.Deletar(identificador)

            res.status(204).send({ mensagem: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Login(req, res) {
        try {
            const { email, senha } = req.body
            const token = await ServiceAtendimento.Login(email, senha)
            res.status(200).send({
                token
            })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

}

export default new ControllerAtendimento()