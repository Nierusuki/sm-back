import { DataTypes } from "sequelize";
import { SqlizeConnection } from "../main";


export const Student = new SqlizeConnection().sqlize.define("Student", {
    name: { 
        type:DataTypes.STRING,
        allowNull:false
    },
    registry: { 
        type:DataTypes.STRING,
        allowNull:false,
        validate: { 
            is:/^[0-9]*$/g
        }
    },
    age: { 
        type:DataTypes.INTEGER,
        allowNull:true
    }
}, {timestamps:false})