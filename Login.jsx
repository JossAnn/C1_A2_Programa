
import '../assets/styles/login.css'

function Login(){
    return(
        <div className='login'>
            <div className='inputs'>
                <h1>Registrate</h1>
                <form>
                    <div className='datos necesarios'>
                        <p>Escribe tu nombre de usuario</p>
                        <input type="text" className='input' placeholder=' Username'/>
                        <p>Escribe tu E-mail</p>
                        <input type="email" className='input' placeholder=' E-mail'/>
                        <p>Escribe tu contraseña</p>
                        <input type="password" className='input' placeholder=' Escribe una contraseña'/>
                        <p>Escribe de nuevo tu contraseña</p>
                        <input type="password" className='input' placeholder=' Confirma tu contraseña'/>
                    </div>

                    <div className='datos opcionales'>
                        <p>Selecciona tu Edad</p>
                        <input type="number" className='input edad' />
                        <p className='p'>Sexo: <br />
                            <input type="radio" name='sexo'/>Hombre <input type="radio" name='sexo'/>Mujer
                        </p>
                        <p>Selecciona tu fecha de cumpleaños</p>
                        <input type="date" className='input'/>
                    </div>

                    <div className='datos extra'>
                        <p><input type="checkbox"/> Recibir Notificaciones</p>
                        <p>Elige tu color favorito <input type="color" className='color'/></p>
                        <p className='p'>Borrar datos <br /><input type="reset" className='boton'/></p>
                        <p className='p'>Registrarme <br /><input type="submit" className='boton'/></p>
                    </div>
                </form>

{/*
                <input type="submit" />
                <input type="file" />
                <input type="number" />
                <input type="search" />
                <input type="range" />
                <input type="tel" />
                <input type="url" />
                <input type="image" />
                <input type="hidden" value={a}/>
                <input type="datetime-local" />
                <input type="week" />
                <input type="reset"/>
                <input type="month" />                
                Log In 
*/}
            </div>
        </div>
    );

}
export default Login;