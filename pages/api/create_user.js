import { databaseServiceFactory } from "../../services/databaseService"
import { authServiceFactory } from "../../services/authService"
import { withSession, saveSession } from "../../lib/session";

const dbService = databaseServiceFactory();
const authService = authServiceFactory();

export default withSession(async (req, res) => {
    const ERROR_CREDENTIALS = "Invalid username and/or password";

    const method = req.method.toLowerCase();
    const { username, password, email, name } = req.body;
    
    if (method !== "post") {
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    try {
        const userCredentials = await dbService.createUser(username, password, email, name);
        if (await authService.validate(password, userCredentials.password) === true) {
            await saveSession({username, isAdmin: userCredentials.isAdmin, email: userCredentials.email }, req);
            res.status(200).json({username});
            return;
        }
    } catch (error) {
        console.log(error);
    }
    res.status(403).json({error: ERROR_CREDENTIALS});
})