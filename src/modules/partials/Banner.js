import React, { Fragment, useEffect, useState } from 'react';

// API
import FetchAPI from '../../api/APIs.js';


//Components
import {FTP_URL} from '../../api/config/Constants.js';

export default function Banner() {
    
    const [imageURL, setImageURL] = useState(FTP_URL);
    let type = ''; 
    
    useEffect(() => {
        switch((window.location.pathname).toString().toLowerCase()){
            case '/' : type = 'bannerHome'; break;
            case '/about' : type = 'bannerAbout'; break;
            case '/contact' : type = 'bannerContact'; break;
            // case 'Miracle'       :   type: ; break;
            // case 'Direction'     :   type: ; break;
            // case 'OBE'           :   type: ; break;
            // case 'Prayer'        :   type: ; break;
            // case 'Contact'       :   type: ; break;        
    
            // case 'DimpleAnil'    :   type: ; break;
            // case 'AboutGC'       :   type: ; break;
            // case 'Introduction'  :   type: ; break;
            // case 'about'         :   type: ; break;
       }
        fetchBannerImage();
    },[]);

    const fetchBannerImage = async () => {
        try{
            const result = await FetchAPI.fetchBannerImage({type: type});
            let fullPath = FTP_URL + "/api/images?path=bannerImages/" + result.image_name;
            setImageURL(fullPath);
        }catch(e){
            console.log('Error...',e);
        }
    }

    return(
        <Fragment>
            <section className="site-hero overlay min-max-height" data-stellar-background-ratio='1'  style={{backgroundImage: `url(${imageURL})`}}>
                <div class="container">
                    <div class="row align-items-center justify-content-center site-hero-inner">
                        <div class="col-md-8 text-center">
                            {/* <div class="mb-5 element-animate">
                                <div class="block-17">
                                    <h1 class="heading mb-4">Let your light so shine before men.</h1>
                                    <p><a href="#" class="btn btn-primary-white py-3 px-5">About Us</a> <a href="#" class="text-white ml-4"> <span class="ion-ios-location mr-2"></span> Visit Our Church</a></p>
                                </div>
                            </div> */}
                            {/* <div class="mb-5 element-animate fadeInUp element-animated">
                                <div class="block-17">
                                    <h1 class="heading mb-4" style={{marginTop:'80px', color:'white', fontSize:'70px'}}>God Consciousness</h1>
                                    <div class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde doloremque necessitatibus quidem itaque illum nulla dolores, tempora corporis eius, fuga natus esse rem animi. Doloribus animi, reiciendis voluptatum eum ullam.</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment> 
    )
}