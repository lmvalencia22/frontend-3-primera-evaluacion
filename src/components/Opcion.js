import React, { Component } from 'react';

class Opcion extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() { 
        return ( 
        <div className='opcion'>
            <button onClick={this.props.accion} className='botones'>{this.props.letra}</button>
            <div>{this.props.respuesta}</div>
        </div>  
        
         );
    }
}
 
export default Opcion;