import React, { Component } from 'react';
import hisData from './data.json';
import Opcion from './Opcion';

class Preguntas extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            historias: hisData,
            actual: 0,
            paso: 1,
            seleccion: '',
            historico: []    
        }
    }
    
    siguienteHistoria(opcionElegida){
        if(this.state.paso+1 <= (this.state.historias.length/2)+1){
            let siguOpcion = (this.state.paso+1)+opcionElegida;
            let nuevoIndice = this.state.historias.findIndex((elm) => elm.id == siguOpcion);
            this.setState({paso: this.state.paso+1 }); 
            this.setState({actual: nuevoIndice});
            this.setState({seleccion: opcionElegida});
            this.state.historico.push(opcionElegida);
        }else{
            alert("Fin del juego. Has muerto!");
        }
    }

    render() { 
        let historiaActual = this.state.historias[this.state.actual];
        return (
            <div className='layout'>
                <div className='historia'>{historiaActual.historia}</div>
                <div className='opciones'>
                   <Opcion letra='A' accion={()=>{this.siguienteHistoria('a')}} respuesta={historiaActual.opciones.a}></Opcion>
                   <Opcion letra='B' accion={()=>{this.siguienteHistoria('b')}} respuesta={historiaActual.opciones.b}></Opcion>
                </div>
                <div className='seleccion'>Selección anterior: {this.state.seleccion}</div>
                <div className='historico'>Historial de opciones elegidas</div>
                <ul>
                    {
                        this.state.historico.map((item,indice)=>{
                            return <li className='historico-item'>{item}</li>;
                        })
                    }
                </ul>
            </div>
         );
    }
}
 
export default Preguntas;