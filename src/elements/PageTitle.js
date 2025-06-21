import React from 'react';
import {Link} from 'react-router-dom';
import { IMAGES } from '../constants/theme';

const PageTitle = ({parentTitle, activePage}) => {
    return (
        <>
            <div className="dz-bnr-inr style-1 text-center" data-text="FITNESS" style={{backgroundImage: "url("+IMAGES.BgBanner2 +")"}}>
                <div className="container">
                    <div className="dz-bnr-inr-entry">
                        <h1>{activePage}</h1>
                        <nav aria-label="breadcrumb" className="breadcrumb-row">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to={"/"}>{parentTitle}</Link></li>{" "}
                                <li className="breadcrumb-item active" aria-current="page">{activePage}</li>
                            </ul>
                        </nav>
                        
                    </div>
                </div>
            </div>
          
        </>
    );
};

export default PageTitle;