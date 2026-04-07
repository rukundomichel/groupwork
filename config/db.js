import {Sequelize} from 'sequelize'
const sequelize= new Sequelize("intake", "root","",{
    host:"localhost",
    dialect:"mysql"
});

export async function connectdb(){
    try {
        await sequelize.authenticate();
        console.log("Database created successfully");

    } catch (error) {
        console.error("Error Occured when connicting to db",error)

    }
}

export default sequelize;
