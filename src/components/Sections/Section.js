import React from 'react';
import d1 from '../../images/data/1.png';
import d2 from '../../images/data/2.png';
import d3 from '../../images/data/3.png';
import d4 from '../../images/data/4.png';
import d5 from '../../images/data/5.png';
import d6 from '../../images/data/6.png';
import d7 from '../../images/data/7.png';

import interView from '../../file/EDO-assignment.pdf';


import "./Section.css";

const images =[d1,d2,d3,d4,d5,d6,d7]

const Section =()=>{
   const dataPics = images.map((src)=>{
        return (<img src={src} />)
    })
     return(
        <>
        <section id ='idea'>
              <h1>Idea & Survey</h1>
              <p> We started this task with Idea formation and survey creation. We chose our target group and the necessary tool to collect quantitative data. </p>
               <a href='https://docs.google.com/forms/d/e/1FAIpQLSdxZ4Fqi_y9ipGvn_4KnBEn7ighwgVH3BYxTSckWL15xYVPeA/viewform?usp=sf_link' target="_blank"> Link to the survey</a>
            <iframe src="https://onedrive.live.com/embed?resid=C57695729AB2A2C9%2120479&amp;authkey=%21AKgUZyNzC0ML4As&amp;em=2&amp;wdAr=1.7777777777777777"  frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
        </section>
        <div className='separate'></div>
        <section id='interviews'> 
        <h1>Interviews and Data Analysis</h1>
         <p> In this phase we conducted interviews and made transcripts out of them and wrote conclusion, which helped us to summerize all the information</p>
         <a href={interView} target="_blank">Link to interview questions</a>
          <div className='int-pics'>
          {dataPics}
          </div>
          
        </section>
        </>
    )
}

export default Section;