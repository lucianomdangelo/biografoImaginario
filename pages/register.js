import { useState } from "react";
import {userServiceFactory} from "../clientServices/userService";
import useUser from "../lib/useUser";

const userService = userServiceFactory();

export default function Register() {
    const { user, mutateUser } = useUser({
        redirectTo: "/",
        redirectIfFound: true,
    });
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            mutateUser(
                await userService.register(username, password, email, name) /// handle register
            );
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    return <div>
        {!user ? (<h1>Loading....</h1>) : 
                <>{!user.isLoggedIn && <form onSubmit={handleSubmit}>
                        {/* <div className="imgcontainer">
                            <img src="img_avatar2.png" alt="Avatar" className="avatar"/>
                        </div> */}

                        <div className="container">
                            <label htmlFor="uname"><b>Nombre de usuario</b></label>
                            <input type="text" placeholder="Ingresar nombre de usuario" name="uname" required onChange={ (e) => { setUsername(e.target.value); } }/>

                            <label htmlFor="psw"><b>Contraseña</b></label>
                            <input type="password" placeholder="Ingresar contraseña" name="psw" required onChange={ (e) => { setPassword(e.target.value); } }/>
                            
                            <label htmlFor="email"><b>Email</b></label>
                            <input type="email" placeholder="Ingresar email" name="email" required onChange={ (e) => { setEmail(e.target.value); }}/>

                            <label htmlFor="name"><b>Nombre</b></label>
                            <input type="text" placeholder="Ingresar nombre" name="email" required onChange={ (e) => { setName(e.target.value); }}/>

                            <button type="submit">Registrarse</button>
                        </div>
                </form>}</>}
    </div>;
}