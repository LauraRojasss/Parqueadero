/*Importar los módulos*/

import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListaUsuarios from "./components/ListaUsuarios"


function App() {

  return (

    /*Etiqueta padre y el body de la página*/
    <div className="container mx-auto mt-20 " >
      <Header/>

      <div className="mt-12 md:flex">
      <Formulario/>
      <ListaUsuarios/>


      </div>
    </div>
      
  )
}

export default App
