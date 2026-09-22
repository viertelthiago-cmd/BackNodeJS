import jwt from 'jsonwebtoken'

const segredo = 'M3uS3gr3d0'

export default async function autMiddleware(req, res, next) {
    try {
        const token = req.headers['authorization']
        if(!token){
            throw new Error()

        }
        const decoded = jwt.verify(token, segredo)


    
    } catch (error) {
        res.status(403).send({
            message: "Usuário ou senha inválido"
        })
    }    
}