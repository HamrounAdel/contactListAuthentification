import React from 'react'
import './Navigation.css'
import {Link} from 'react-router-dom'
function Navigation({auth,logout}) {
  return (
    <div className='bodynav'>
    <nav className="nav">
    <input type="checkbox" id="nav-check"/>
    <div className="nav-header">
      <div class="nav-title">
        
      </div>
    </div>
    
    <ul class="nav-list">
      <li><a   href='#' >{auth.name}</a></li>
      {auth.role==="admin"?(<>
      <a href="#">users</a>
      <a href="#">admin</a>

      </>) :(<>

      <li><a ><Link to='/home'>Home</Link></a></li>
      <li><a ><Link to='/contact'>Contact</Link></a></li>
      <li><a ><Link to='/add'>AjoutContact</Link></a></li>

      </>)}

         <li><a href="#"  onClick={()=>logout()}>Deconnecte</a></li> 
      
    </ul>
  
  </nav>
  </div>
  )
}

export default Navigation
