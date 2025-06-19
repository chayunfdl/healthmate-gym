import React from 'react'
import { Link } from 'react-router-dom'

const VideoBox = ({open}) => {
    return (
        <>

            <div className="row">
                <div className="col-xl-6 col-lg-7 col-md-8 wow fadeInUp" data-wow-delay="0.2s">
                    <h2 className="text-white title mb-4">It's Not <br /> <span className="text-primary">Fitness</span> it's Life</h2>
                    <Link to="/contact-us" className="btn btn-primary btn-skew"><span>Join Now</span></Link>
                </div>
                <div className="col-xl-6 col-lg-5 col-md-4 d-flex justify-content-center align-items-center wow fadeInUp" data-wow-delay="0.4s">
                    <Link 
                    onClick={()=>{open(true)}}
                    className="popup-youtube" to="#" 
                    >
                        <span className="video-btn style-2 position-static popup-youtube">
                            <i className="fa fa-play"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default VideoBox