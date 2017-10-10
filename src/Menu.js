import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Active from './Active';

class Menu extends Component {
   render() {
     return (
       <div>
         <Link to="/">All</Link>
         <Link to="/active">Active</Link>
       </div>
     )
   }
}

export default Menu;
