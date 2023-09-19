import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <div>
            <h1>NotFound</h1>
            <Link to="/"><button>Página Inicial</button></Link>
        </div>
      )
    }
}

export default NotFound;