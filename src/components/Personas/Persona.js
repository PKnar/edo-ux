import React from 'react';
import './Persona.css';

import { GoLocation } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { FaUniversity } from "react-icons/fa";

import JillPic from '../../images/Jill.jpg';
import AlexPic from '../../images/Alex.jpg'

import { GiEarthAsiaOceania } from 'react-icons/gi';

const Personas = [
    {
        name: "Alex Daverto",
        id:'Alex',
        age: 22,
        location: "Eindhoven",
        occupation: "ICT student",
        quote: '"I\'m sorry for what I said when I was hungry."',
        about: "Alex is a busy student. As much as he cares about nutrition based diet, he still find himself consuming fast food because for his lack of time. Alex is not a good cook, however he really interested in becoming one. He recently started to explore vegetarian diet, which means he needs a quick nutirtion based recipes to make sure he consumes enough protein.",
        needs: ["Quick recipes", 'Video tutoials', "Recommened alternatives for hard-to-find ingredients"],
        goals: ['Eat healthy', 'Workout more often', 'Become a better cook'],
        frastruations: ['Often consumes fast food because of lack of time', 'Recipes are not clear and are too long', 'Some ingredients are hard to find'],
        hobbies: ['Gaming', 'Music production', 'Watching movies'],
        img: AlexPic,
        pref: [{
            title: "Youtube",
            p: '90'
        },
        {
            title: "Website",
            p: '60'
        },
        {
            title: "Family",
            p: '60'
        }

        ]
    },
    {
        name: "Jill Hilligan",
        id:'Jill',
        age: 19,
        location: "Eindhoven",
        occupation: "Student",
        quote: '"It does not matter how slow you go , as long as you don\'t stop."',
        about: "Jill loves fitness.She is focused to achieve her peak physiques but she needs help.She knows how to workout but she is not sure on how to eat in order to consume enough nutritions.She's a student so she wants to make simle but very butritious meals.She has a lot of willpower and is ready to do anything to achieve  her goals.The end game for her would be to become a nutrition specialist.",
        needs: ["Quick recipes", 'Nutrition tips'],
        goals: ['To achieve her peak physiques', "Live healthy", "Become a nutrition specialist"],
        frastruations: ["Can't cook well", "relatively small budget"],
        hobbies: ["Fitness", "Rock climbing", "Netflix"],
        img: JillPic,
        pref: [{
            title: "Family",
            p: '100'
        },
        {
            title: "Website",
            p: '90'
        },
        {
            title: "Social Media",
            p: '80'
        },
        {
            title: "Cooking book",
            p: '50'
        }

        ]
    },

]


const Persona = () => {

    let personaInfo = Personas.map((persona) => {
      return ( <div class='persona-section' id={persona.id}>
            <div className='img-content'>
                <img src={persona.img} alt='' />
                <div className='img-hero'>
                    <h2>{persona.name}</h2>
                    <p> {persona.quote}</p>
                </div>

            </div>
            <div className='persona-description'>
          
                <div class='personal info'>
                    <h3>Information</h3>
                    <ul>
                        <li> <AiOutlineUser /> Age: {persona.age}</li>
                        <li> <GoLocation /> {persona.location}</li>
                        <li> <FaUniversity /> Occupation: {persona.occupation}</li>
                    </ul>
                </div>
                <div class='about info'>
                    <h3>About</h3>
                    {persona.about}
                </div>
                <div class='hobbies info'>
                    <h3>Hobbies</h3>
                    <ul>
                        {persona.hobbies.map((hobby) => {
                            return (<li>
                                {hobby}
                            </li>)
                        })}
                    </ul>
                </div>
                <div class='needs info'>
                    <h3>Needs</h3>
                    <ul>
                        {persona.needs.map((need) => {
                            return (<li>
                                {need}
                            </li>)
                        })}
                    </ul>
                </div>
                <div class='goals info'>
                    <h3>Goals</h3>
                    <ul>
                    {persona.goals.map((goal) => {
                        return (<li>
                            {goal}
                        </li>)
                    })}
                    </ul>
                
                </div>

                <div class='frastruations info'>
                    <h3>Frastruations</h3>
                    <ul>
                        {persona.frastruations.map((fra) => {
                            return (<li>
                                {fra}
                            </li>)
                        })}
                    </ul>
                </div>
                <div class='preferedway info'>
                    <h3>Preffered way to look for recipes</h3>
                    {
                        persona.pref.map(({title, p}) => {
                            return (
                                <>
                                    <label for="file">{title}:</label>
                                    <progress id="file" value={p} max="100"> {p} </progress>
                                </>
                            )
                        })
                    }

                </div>
               
            </div>
        </div>)
    })

    return (
        <>
            {personaInfo}

        </>
    )
}

export default Persona;