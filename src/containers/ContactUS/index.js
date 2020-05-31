import React from 'react'
import Slider from "react-slick";
import "./style.css"
/**
* @author
* @function ContactUS
**/


const ContactUS = (props) => {
  return(
    <div> 


<div class="wrapper">
        <div class="title">
           
      
        </div>
      

        <form class="form">
          <input type="text" class="name entry " placeholder="Your Name"/>
          
          <input type="text" class="email entry" placeholder="Email"/>
          
          <textarea class="message entry" placeholder="Message"></textarea> 
          
          <button class="submit entry" onclick="thanks()">Submit</button>
        </form>  
        
        <div class="shadow"></div>
      </div>

    </div>
   )

 }

 

 export default ContactUS;



 

