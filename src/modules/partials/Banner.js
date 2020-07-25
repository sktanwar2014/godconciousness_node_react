import React, { Fragment, useEffect, useState } from 'react';

// API
import FetchAPI from '../../api/APIs.js';


//Components
import {FTP_URL} from '../../api/config/Constants.js';

export default function Banner() {
    
    const [imageURL, setImageURL] = useState(FTP_URL);
    const [page, setPage] = useState('');

    let type = ''; 
    
    
    useEffect(() => {
        switch((window.location.pathname).toString().toLowerCase()){
            case '/' : type = 'bannerHome'; setPage('Home'); break;
            case '/about' : type = 'bannerAbout'; setPage('About Us'); break;
            case '/contact' : type = 'bannerContact'; setPage('Contact'); break;
            case '/miracle' : type = 'bannerMiracle'; setPage('Miracles'); break;
            case '/direction' : type = 'bannerDirection'; setPage('Directions'); break;
            case '/obe' : type = 'bannerOBE'; setPage(`OBE's`); break;
            case '/blog' : type = 'bannerBlog'; setPage(`Blogs`); break;
            case '/event' : type = 'bannerEvent'; setPage(`Events`); break;
            case '/prayer' : type = 'bannerPrayer'; setPage(`Prayers`); break;
            case '/dailyprayer' : type = 'bannerPrayer'; setPage(`Daily Prayer`); break;
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
            <section className="site-hero overlay"  style={{backgroundImage: `url(${imageURL})`}}>
                <div class="container">
                    <div class="row align-items-center justify-content-center site-hero-inner">
                        <div class="col-md-8 text-center">
                            <div class="mb-5 element-animate fadeInUp element-animated">
                                <div class="block-17">
                                    {/* <h1 class="heading mb-4">{page}</h1> */}
                                    {/* <p><a href="#" class="btn btn-primary-white py-3 px-5">About Us</a> <a href="#" class="text-white ml-4"> <span class="ion-ios-location mr-2"></span> Visit Our Church</a></p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment> 
    )
}