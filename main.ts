import { Sequelize } from "sequelize";
import { Enrollment } from "./domain/enrollment";
import { Student } from "./domain/student";
import { Subject } from "./domain/subject";


export class SqlizeConnection { 

    public sqlize:Sequelize;

    constructor() { 
        this.sqlize = new Sequelize("yourdbhere", {
            dialectOptions:{
                ssl: { 
                    require:true,
                    rejectUnauthorized:false
                }
            }
        });
        this.sqlize.sync({alter:true});
    }
    
    async testConnection() { 
        try { 
            await this.sqlize.authenticate();
            console.log("Connection established");
        }
        catch (err) { 
            console.log("Connection has not been established:" + err);
        }
    
    }
}

