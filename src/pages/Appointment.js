import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Select from 'react-select';

import { IMAGES } from '../constants/theme';
import Header from '../layouts/Header';
import { Link } from 'react-router-dom';

const options = [
    { value: '0', label: 'Select Service' },
    { value: '1', label: 'Strength Center' },
    { value: '2', label: 'Fitness' },
    { value: '3', label: 'Muscle Bar' },
]

const Appointment = () => {
    const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();		
		emailjs.sendForm('service_gfykn6i', 'template_iy1pb0b', e.target, 'HccoOtZS6GHw-N-m6')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset()		  
	};
    return (
        <>
            <div className="page-wraper">

                <Header />
                <div className="page-content bg-white">
                    <section className="appointment-page" data-text="HEALTH" style={{backgroundImage: "url("+ IMAGES.BgAppoint +")"}}>
                        <div className="container">
                            <div className="section-head">
                                <span className="sub-title">Get in Touch</span>
                                <h2 className="title">Schedule An <span>Appointment</span></h2>
                            </div>
                            <form className="appointment-form dzForm" ref={form} onSubmit={sendEmail}>
                                
                                <p className="appointment-text">
                                    Hey, My Name is{"  "}
                                    <input name="dzFirstName" required type="text" className="form-control" placeholder="Name" /> {" "}
                                    And i'm looking for                                    
                                    <Select 
                                        options={options} 
                                        defaultValue={options[0]}
                                        isSearchable = {false}
                                        //menuIsOpen = {true}
                                        
                                        className="custom-react-select ms-2"
                                    />
                                   
                                    Get in consult with us at {" "}
                                    <input name="dzEmail" required type="text"  className="form-control" placeholder="Your Email ID Here"/> {" "}
                                    !
                                </p>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />{" "}
                                    <label className="form-check-label" for="flexCheckDefault">I here by accept all terms and conditions.</label>
                                </div>
                                <button name="submit" type="submit" value="Submit" className="btn btn-primary btn-lg btn-skew"><span>Appointment</span></button>
                            </form>
                        </div>
                    </section>
                </div>
                <footer className="site-footer style-1 bg-img-fix footer-action" id="footer">
                    <div className="footer-bottom">
                        <div className="text-center"> 
                            <span className="copyright-text">Copyright © 2023 <Link to="https://dexignzone.com/" target="_blank" rel="noreferrer" >DexignZone</Link>. All rights reserved.</span> 
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Appointment;