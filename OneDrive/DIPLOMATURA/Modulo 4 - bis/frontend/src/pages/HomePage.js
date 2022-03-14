import React from "react";
const HomePage =  (propos) => {
   return(
       <main className="holder">
           <div className="HomePage">
               <img src="images/home/img01.jpg" alt="avion"/>
            </div>
            <div className="columnas">
                <div className="bienvenidosleft">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.

                        Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo xvi.1​ Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.

                        El texto en sí no tiene sentido, aunque no es aleatorio, sino que deriva de un texto de Cicerón en lengua latina, a cuyas palabras se les han eliminado sílabas o letras. El significado del mismo no tiene importancia, ya que solo es una demostración o prueba. El texto procede de la obra De finibus bonorum et malorum (Sobre los límites del bien y del mal) que comienza con:
                        
                    </p>               
                    
                </div>
                <div className="testimonio right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente exelente</span>
                        <span className="autor">Juan Perez</span>
                    </div>
                </div>

            </div>

       </main>

   );
}

export default HomePage;
