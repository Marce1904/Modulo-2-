
import React from 'react';
import "../styles/components/pages/NovedadesPage.css"


const NovedadItem = (props) => {
    const{title, subtitle, imagen, body} = props;

    return (
        <div className='novedades'>
            <div>
                <h1>{title}</h1>
                <h2 className="holder2">{subtitle}</h2>
                <div className="holder2" dangerouslySetInnerHTML={{__html:body }}/>
            </div>
            <div>
                <img className="img" src= {imagen}/>
            </div>

            <hr />


        </div>
    );
}

export default NovedadItem;