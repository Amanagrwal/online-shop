import React from 'react';

import styled from "styled-components";
const Contact = () => {
  return( 
   <>
   < Wrapper>
      <img src="./images/contact_us.png" className="common-heading"/>

     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.
     371352828422!2d75.75802310000002!3d26.85994029999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
     1!3m3!1m2!1s0x396db507a90380a9%3A0x5de4fe0cbb4f77cc!
     2s66%2F55%2C%20Heera%20Path%2C%20Ward%2027%2C%20Mansarovar%20Sector%206%2C%20
     Mansarovar%2C%20Jaipur%2C%20Rajasthan%20302020!5e0!3m2!1sen!2sin!4v1726061486285!5m2!1sen!2sin"
      width="100%" 
      height="450"
       style={{border:0}}
       allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>      
       
        <div className="container">
          <div className="contact-form">
            <form action="https://formspree.io/f/xanwzner" method="POST" className="contact-inputs">
               <input type="text"
                placeholder="username"
                name="username"
                required autoComplete="off"
                />
              <input 
              type="email"
               placeholder="email"
               name="email"
               required
               autoComplete="off"
               
               /> 

               <textarea 
               name="massage"
               cols="30"
               rows="10"
               placeholder="Enter you message"
               required
               autoComplete="off"
               />
             <input 
             type="submit"
             />
            </form>
          </div>
        </div>
       
     </Wrapper>
   </>
  )
  };

  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
    text-align: center;

  

    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
      max-width: 100%;
       margin: auto;
  background-image: url('/images/Contact.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  padding:5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          border:blue;
        

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
     

            }
          }
        }
      }
    }
  `;


export default Contact;
