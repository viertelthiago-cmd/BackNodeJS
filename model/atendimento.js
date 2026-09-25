import database from "../config/database.js";
class Atendimento {
    constructor() {
        this.model = database.db.define("atendimento", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            dia: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            hora: {
                type: database.db.Sequelize.STRING,
            }
            valor e concluido: {
                type: database.db.Sequelize.STRING,
            }
        })
    }
}
export default new Atendimento().model