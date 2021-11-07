import "./contact.css"
import React, { useContext, useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../contextApi";


const Contact=()=> {

    const [sent, sentDone] = useState(false);



    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    const formRef = useRef();
    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_ds3mp57', 'template_j0d3oki', formRef.current, 'user_1NJkUnSkzj9Sd7gs2XnKV')
        .then((result) => {
            console.log(result.text);
            sentDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's Discuss Your Project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img alt="Phone Icon" className="c-icon" src="https://img.icons8.com/cute-clipart/100/000000/phone.png"/>
                            +1 278 249 3993
                        </div>
                        <div className="c-info-item">
                            <img alt="Email Icon" className="c-icon" src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/100/000000/external-email-digital-marketing-itim2101-lineal-color-itim2101.png"/>
                            dasedu1998@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img alt="Adress Icon" className="c-icon" src="https://img.icons8.com/dusk/100/000000/address.png"/>
                            University Road, Kemalpasa Neighboorhood, <br /> Doga Evleri 1, B:block, Apartment No:14, <br /> Serdivan/SAKARYA-TURKEY
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-description">
                        <b>What's Your History?</b>
                        Get in touch. Always available for freelancing, if the right project comes along me.
                    </p>
                    <form ref={formRef} onSubmit={sendEmail}>
                        <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Enter Your Name Here" name="user_name" />
                        <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Enter Your Surname Here" name="user_surname" />
                        <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Enter Your Subject Here" name="user_subject" />
                        <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Enter Your Email Here" name="user_email" />
                        <textarea style={{backgroundColor:darkMode && "#444"}} name="message" id="" rows="5" placeholder="Write Your Message Here"></textarea>
                        <button>Send</button>
                        {sent &&"Your Message Has Been Sent. Thank You For Contacting Us..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
