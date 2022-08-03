import Link from 'next/link'

export default function Navbar ({children}) {
    return (
        <nav>
            <Link href='/'>Inicio</Link>
            <Link href='/login'>Iniciar sesion</Link>
            <Link href='/register'>registrarse</Link>
            <Link href='/video'>video</Link>
            <a href='/api/logout'>Logout</a>
        </nav>
    )
};