import React from "react";
import "../styles/components/pages/contactoPage.css"


const ContactoPage =  (props) => {
   return(
    <main class="Cuerpo30">

    <div  class="columna12">
      
        <form class="columna26" action="">
            <h2 class="box11">Consultanos </h2>
            <p>
                <label for="">Nombre</label>
                <input class="tamaño" type="text"/>
            </p>
            <p> 
                <label for="">Apellido</label>
                <input class="tamaño" type="text"/>
            </p>
            <p>
                <label  for="">e - Mail</label>
                <input class="tamaño" type="email"/>
            </p>
            <p>
                <label  for="">Teléfono</label>
                <input class="tamaño" type="number"/>
            </p>
            <p>
                <label for="">Comentario</label>
            </p>
            <input class="tamaño1" type="text"/>
            <ul></ul>
            <button>Enviar</button>
            
        </form>
        <ul></ul>
        
        <div class="columna22">
            <img class="img24" src="https://d11o8pt3cttu38.cloudfront.net/wp-content/uploads/sites/39/2021/09/shutterstock_712414813.jpg"  alt=""/>
        </div>

    </div>

    <u></u>

    <div class="columna3">
       

        <h2 class="texto" >Otras de nuestras vías de Contacto</h2>
        <p class="texto10"><i class="fa-solid fa-envelopes-bulk"> Nuestro telefono: 2604-338133</i></p>
        <p class="texto10"><i class="fas fa-at">E-mail: marcesanchez1904@gmail.com </i></p>
        
    </div>


</main>

   );
}

export default ContactoPage;
