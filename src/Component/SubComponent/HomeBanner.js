import React, { Component,Fragment } from 'react';


export default class HomeBanner extends Component {
    render() {
        return(
            <Fragment>
            <section className="site-hero overlay"  style={{backgroundImage: 'url(images/GC/Auntypic2.jpg)'}}>
            <div class="container">
<div class="row align-items-center justify-content-center site-hero-inner">
<div class="col-md-8 text-center">
<div class="mb-5 element-animate fadeInUp element-animated">
<div class="block-17">
   
 <h1 class="heading mb-4" style={{marginTop:'80px', color:'white', fontSize:'70px'}}>God Conciousness</h1>
{/* <div class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde doloremque necessitatibus quidem itaque illum nulla dolores, tempora corporis eius, fuga natus esse rem animi. Doloribus animi, reiciendis voluptatum eum ullam.</div>  */}
</div>
</div>
</div>
</div>
</div>
            </section>
            </Fragment> 
        )
    }
}