import React from 'react'
import footerData from '../../api/footerApi.json';
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

const Footer = () => {

  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />
  }

  return (
    <>
      <footer className='footer-section'>
        <div className='container grid grid-three-cols'>
          {
            footerData.map((currData, index) => {
                const {icon, title, details} = currData;

                return(
                  <div className="footer-contact" key={index}>
                    <div className="icon">
                      {footerIcon[icon]}
                    </div>
                    <div className="footer-contact-text">
                      <p>{title}</p>
                      <p>{details}</p>
                    </div>
                  </div>
                )
            })
          }
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="grid grid-two-cols">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2025, All Right Reserved 
                  <NavLink to='https://github.com/miranijay' target='_blank'>
                    JayMirani
                  </NavLink> 
                </p>
              </div>

              <div className="footer-menu">
                <ul>
                  <li>
                    <NavLink to='/'>
                      Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to='https://github.com/miranijay' target='_blank'>
                      Social
                    </NavLink>
                  </li>

                  <li>
                    <NavLink 
                      to='https://github.com/miranijay/React19-Website-WorldAtlas'
                      target='_blank'
                    >
                      Source-Code
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to='/contact'> 
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;