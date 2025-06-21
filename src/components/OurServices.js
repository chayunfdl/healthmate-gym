import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGES } from '../constants/theme'



const serviceCards = [
    { icon: 'flaticon-exercise', title: 'Cardio' },
    { icon: 'flaticon-exercise-2', title: 'Chest' },
];
const serviceCards2 = [
    { icon: 'flaticon-man', title: 'Muscles' },
    { icon: 'flaticon-lifting', title: 'Shoulder' },
    { icon: 'flaticon-athletics', title: 'Full Body' },
];
const OurServices = () => {
    return (
        <>

            <div className="col-xl-4 left-grid">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="section-head style-1">
                            <h5 className="sub-title">Our Services</h5>
                            <h2 className="title">Virtual <span> Training </span></h2>
                            <p className="p-r50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                    {serviceCards.map((item, ind) => (
                        <div className="col-xl-12 col-md-6 wow fadeInUp" key={ind}>
                            <div className="icon-bx-wraper style-4 bg-white m-b30">
                                <div className="icon-bx icon-bg-white m-b20 align-items-center">
                                    <div className="icon-cell text-primary rounded-circle m-r10">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h4 className="dz-title m-b10"><Link to="/pricing">{item.title}</Link></h4>
                                </div>
                                <div className="icon-content">
                                    <p className="m-b15">Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum has</p>
                                    <Link to="/pricing" className="read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 m-b30 order-md-1 order-2">
                <div className="trainer wow fadeInUp" data-wow-delay="0.8s">
                    <img src={IMAGES.aboutPic} alt="" className="anm" data-speed-x="-2" data-speed-scale="-2" />
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 right-grid order-md-2 order-1">
                <div className="row">
                    {serviceCards2.map((item, index) => (
                        <div className="col-xl-12 col-lg-12 wow fadeInUp" key={index}>
                            <div className="icon-bx-wraper style-4 bg-white m-b30">
                                <div className="icon-bx icon-bg-white m-b20 align-items-center">
                                    <div className="icon-cell text-primary rounded-circle m-r10">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h4 className="dz-title m-b10"><Link to="/pricing">{item.title}</Link></h4>
                                </div>
                                <div className="icon-content">
                                    <p className="m-b15">Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum has</p>
                                    <Link to="/pricing" className="read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default OurServices