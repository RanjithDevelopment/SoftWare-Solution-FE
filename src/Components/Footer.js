import "../Css/footerstyles.css";
import React from 'react'
import { FaHome, FaPhone,FaMailBulk,FaGithub,FaLinkedin} from "react-icons/fa"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                       <div>
                            <p> 7/24 A ,</p>
                            <p>Ponniyagoundanur,</p>
                            <p>Uthukuli rs,Uthukuli tk,</p>
                            <p>pin-code:638 752,</p>
                            <p>Tiruppur Dt</p>
                       </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            +91 8754380616
                        </h4>

                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            ranjithproffesional@gmail.com
                        </h4>

                    </div>

                </div>
                <div className="right">
                  <h4>About Me</h4>
                  <p>
                  This is me Ranjith, who is looking for career in Full Stack Development to Implement my Practical Knowldege and to Enlarge,Explore  My learnings To Next Level
                  </p>
                  <div className="social">
                   
                  <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                  <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                  </div>
                </div>

            </div>

        </div>
    )
}

export default Footer
