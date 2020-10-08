import React from 'react';
import "./Header.css";
import {
    Link
} from "react-router-dom";



const Header = () => {


    let handleClick = () => {
        let personasNav = document.querySelector(".personas-nav");
        personasNav.classList.toggle('close');
    }
    return (
      
            <header>
                <div class='overlay'></div>
                <main>
                    <div class="hero">
                        <h1>UX Personas Roadmap</h1>
                        <h3>For Recipe Website</h3>
                    </div>

                    <div >
                        <ul className='circle-wrapper'>
                            <li className='circle'>
                                <a href='#idea'>  Initial Idea</a>
                            </li>
                            <li className='circle'>
                                <a href='#interviews'>Interviews</a>
                            </li>
                            <li className='circle hidden-nav'>
                                <a href='#personas' onClick={handleClick}>Personas</a>
                                <ul className='personas-nav close'>
                                    <li> <a href="#Alex">Alex</a> </li>
                                    <li><a href="#Jill">Jill</a></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                    <h3> Knarik, Thomas & Cleo</h3>
                </main>

            </header>



    )
}

export default Header;