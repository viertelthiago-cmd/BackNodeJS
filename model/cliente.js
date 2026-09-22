import database  from "../config/database.js";

class Cliente {
    constructor() {
        this.model = database.db.define("clientes", {
            id: {
                type: database.db.Sequelize.INTERGER,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                type: database.db.Sequelize.INTERGER,
                unique: true
            },
            senha: {
                type: database.db.Sequelize.STRING,
            }
        })
    }
}
export default new Cliente().model