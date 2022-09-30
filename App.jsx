import Library from '../components/Library'//no comentar por que tiene la clase del body (Se podria pasar a la de Login)
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../components/Login'

function App(){
    return(
        /*(Se puede resolver con un fragment para mandar alv el div de más)
        <div>
            <Header></Header>
            <Contacto></Contacto>
            <Footer></Footer>
        </div>
         */
        <>
            <Header></Header>
            <Login></Login>
            <Footer></Footer>
        </>
        
    );
}

export default App;