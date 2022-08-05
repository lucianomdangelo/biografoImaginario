import * as bcrypt from "bcryptjs"

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : process.env.MYSQLDB_HOST,
        port : process.env.MYSQLDB_PORT,
        user : process.env.MYSQLDB_USER,
        password : process.env.MYSQLDB_PASSWORD,
        database : process.env.MYSQLDB_DATABASE,
    }
});

const databaseServiceFactory = () => {
    const TABLE = 'users';

    const getUser = async (username) => {
        const user = await knex(TABLE).select().where('username', username);
        if (user.length === 0) {
            throw new Error("User not found");
        } 
        return user[0];
    };

    const createUser = async (username, password) => {
        const hashedpwd = await bcrypt.hashSync(password, 10);
        const user = await knex(TABLE).insert({username: username, password: hashedpwd}); /// TODO catch errors
        if (user.length === 0) {
            throw new Error("User not found");
        } 
        return getUser(username);
    };

    return {getUser, createUser};
};

module.exports = {
    databaseServiceFactory
};