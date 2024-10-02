import React from 'react'
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import { FaGit } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";


function Footer() {
  return (
    <>
<Wrapper>
   <section className='contact-short'>
    <div className='grid grid-two-column'>
        <div >
         <h3>Ready to get started?</h3>
         <h3>Talk to us today</h3>
        </div>
        <Button className='btn'> 
            <NavLink to="/contact">
            get started
            </NavLink>
        </Button>
    </div>
   </section>

<footer>
    <div className='container grid grid-four-column'>
        <div className='footer-about'>
            <h3>Agrwal Ecommerce</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, eius!</p>
        </div>
        <div className='footer-subscribe'>
            <h3>Subscribe to get important uodates</h3>

            <form action='#'>
            <input type='email' placeholder='your e-mail'/>
            <input type='submit'value="subscribe"/>
            </form>
        </div>
        <div className='footer-social'>
             <h3>Follow us</h3>
             <div className='footer-social--icons'>
                <div>
                <a
                 href='https://github.com/Amanagrwal'
                   target='_blank'
                 >
                <FaGit className="icons"/> 
                </a>
                </div>

                <div>
                    <a
                    href='https://www.instagram.com/aman___agrwal/'>
                <FaInstagram  className='icons' /> 
                </a>
                </div>

                <div>
                    <a
                    href='https://www.linkedin.com/in/aman-mangal-60866124b'>
                <CiLinkedin className='icons' /> 
                </a>
                </div>

             </div>
        </div>
     <div className='footer-contact'>
        <h3>Call us</h3>
        <h3>+91 9799512320</h3>
     </div>
    </div>

    <div className='footer-bottom--section'>
      <hr></hr>
      <div className='container grid grid-two-column'>
        <p>@{new Date().getFullYear()} Agrwal Ecommerce. All Rights Reserved</p>
        <div>
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
        </div>
      </div>
    </div>
</footer>

</Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid  white;

        .icons {
          color:  white;
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
         
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr{
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
     .icons:hover{
        transform :scale(1.2);
     }
        p{
         color:#fff;
        }
       
`;
export default Footer