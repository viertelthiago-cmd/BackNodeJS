import database from "../config/database.js";


class Cliente {
    constructor() {
        this.model = database.db.define("carros", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                type: database.db.Sequelize.STRING,
            },
            senha: {
                type: database.db.Sequelize.INTEGER,
            }
        })
    }
}

export default new Cliente().model