import React from 'react';
import {Link} from 'react-router-dom';
import { IMAGES,SVGICON } from '../constants/theme';


const Footer = () => {
    let update = new Date();
    return (
        <>
            <footer className="site-footer style-1 bg-img-fix footer-action" style={{backgroundImage: "url("+ IMAGES.footerbg +")"}} id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-md-12">
                                <div className="widget widget_about">
                                    <div className="footer-logo logo-dark">
                                        <Link to={"/"}><img className='select_logo_dark' src={IMAGES.logo} alt="" /></Link> 
                                    </div>
                                    <p>A Wonderful Serenity Has Taken Possession Of My Entire Soul, Like These.</p>
                                    <h6 className="m-b15">Our Socials</h6>
                                    <div className="dz-social-icon style-1">
                                        <ul>									
                                            <li>
                                                <Link target="_blank" to="https://www.facebook.com/" rel="noreferrer">
                                                    <i className="fab fa-facebook-f"></i>
                                                </Link>
                                            </li>{" "}
                                            <li>
                                                <Link target="_blank" to="https://twitter.com/?lang=en" rel="noreferrer">
                                                    <i className="fab fa-twitter"></i>
                                                </Link>
                                            </li>{" "}
                                            <li>
                                                <Link target="_blank" to="https://www.instagram.com/?hl=en" rel="noreferrer">
                                                    <i className="fab fa-instagram"></i>
                                                </Link>
                                            </li>{" "}
                                            <li>
                                                <Link target="_blank" to="https://www.whatsapp.com/" rel="noreferrer">
                                                    <i className="fa-brands fa-whatsapp"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="widget recent-posts-entry">
                                    <h4 className="footer-title">Blog Posts</h4>
                                    <div className="widget-post-bx">
                                        <div className="widget-post clearfix">
                                            <div className="dz-info">
                                                <h6 className="title"><Link to={"/blog-details"}>The Philosophy Of Best Fitness.</Link></h6>
                                                <span className="post-date"> JUNE 18, 2023</span>
                                            </div>
                                        </div>
                                        <div className="post-separator"></div>
                                        <div className="widget-post clearfix">
                                            <div className="dz-info">
                                                <h6 className="title"><Link to={"/blog-details"}>Best 50 Tips For Heavy Fitness.</Link></h6>
                                                <span className="post-date"> AUGUST 22, 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="widget widget_locations">
                                    <h4 className="footer-title">Locations</h4>
                                    <div className="clearfix">
                                        <h6>Washington</h6>
                                        <p>1559 Alabama Ave SE, DC 20032, Washington, USA</p>
                                        {SVGICON.map}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 wow fadeInUp" data-wow-delay="0.8s">
                                <div className="widget widget_working">
                                    <h4 className="footer-title">Working Hours</h4>
                                    <ul>
                                        <li>
                                            <span className="days">Monday – Friday:</span>
                                            <span className="time"><Link to={"/schedule"}>07:00 – 21:00</Link></span>
                                        </li>
                                        <li>
                                            <span className="days">Saturday:</span>
                                            <span className="time"><Link to={"/schedule"}>07:00 – 16:00</Link></span>
                                        </li>
                                        <li>
                                            <span className="days">Sunday Closed:</span>
                                        </li>
                                    </ul>
                                    <Link to={"/schedule"} className="btn-link" >More Here <i className="fa-solid fa-arrow-right m-l10"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Footer Bottom Part --> */}
                <div className="container">
                    <div className="footer-bottom">
                        <div className="text-center"> 
                            <span className="copyright-text">Copyright © {update.getFullYear()} <Link to="https://dexignzone.com/" rel="noreferrer" target="_blank" >DexignZone</Link>. All rights reserved.</span> 
                        </div>
                    </div>
                </div>
                <img className="girl-img" src={IMAGES.footergril1} alt="" />
                <img className="svg-shape-1 rotate-360" src={IMAGES.footercircle} alt="" />
                <img className="svg-shape-2 rotate-360" src={IMAGES.footercircle} alt="" />
            </footer>
        </>
    );
};

export default Footer;