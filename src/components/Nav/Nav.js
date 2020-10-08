import React from 'react';
import '../Header/Header.css';
import {
    Link
  } from "react-router-dom";
  import {GiHamburgerMenu} from 'react-icons/gi'

const Nav =({path,link})=>{
   
    const handleClick =()=>{

    }

    return(
       <nav>
            <GiHamburgerMenu onClick={handleClick}/>
           <ul className='nav-ul '>
               <li> <Link to='/'>Home</Link></li>
               <li> <Link to={`/${path}`}>{link}</Link></li>
           </ul>
       </nav>
   
    )
}

export default Nav;