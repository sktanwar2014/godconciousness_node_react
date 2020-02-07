import React, { Component } from 'react';

export default class Home extends Component {

    render() {
            return(

                <div>
                <div className="wrap">
                  <div className="block-45">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12 text-md-right">
                          <ul className="block-45-icons">
                            <li><a href={3}><span className="fa fa-facebook" /></a></li>
                            <li><a href={3}><span className="fa fa-twitter" /></a></li>
                            <li><a href={3}><span className="fa fa-linkedin" /></a></li>
                            <li><a href={3}><span className="fa fa-instagram" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <header role="banner">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <div className="container">
                        <a className="navbar-brand absolute" href="index.html" ><img src="images\pic.png" width="42" height="42"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse navbar-light" id="navbarsExample05">
                          <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                              <a className="nav-link" href="index.html">HOME</a>
                            </li>
                            <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="ministry.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ABOUT</a>
                              <div className="dropdown-menu" aria-labelledby="dropdown04">
                                <a className="dropdown-item" href="ministry.html">Outreach Ministry</a>
                                <a className="dropdown-item" href="ministry.html">Men's Ministry</a>
                                <a className="dropdown-item" href="ministry.html">Women's Ministry</a>
                                <a className="dropdown-item" href="ministry.html">Children's Ministry</a>
                                <a className="dropdown-item" href="ministry.html">Youth Ministry</a>
                              </div>
                            </li>
                            <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="sermon.html" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PRAYERS</a>
                              <div className="dropdown-menu" aria-labelledby="dropdown05">
                                <a className="dropdown-item" href="sermon.html">Daily Sermon</a>
                                <a className="dropdown-item" href="sermon.html">Music</a>
                                <a className="dropdown-item" href="sermon.html">Audio</a>
                                <a className="dropdown-item" href="sermon.html">Video</a>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="events.html">MIRACLES</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="about.html">BLOGS</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="contact.html">CONTACT US</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </header>
                  {/* END header */}
                  <section className="site-hero overlay" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url(images/big_image_2.jpg)'}}>
                    <div className="container">
                      <div className="row align-items-center justify-content-center site-hero-inner">
                        <div className="col-md-8 text-center">
                          <div className="mb-5 element-animate">
                            <div className="block-17">
                              <h1 className="heading mb-4">Let your light so shine before men.</h1>
                              <p><a href="#" className="btn btn-primary-white py-3 px-5">About Us</a> <a href="#" className="text-white ml-4"> <span className="ion-ios-location mr-2" /> Visit Our Church</a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* END section */}
                  <section className="block-42 overlap">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12 d-lg-flex">
                          <div className="block-42-text">
                            <div className="block-42-label">Latest Sermon:</div>
                            <div className="block-42-title mx-2"><a href="#"><strong>Rebuilding The Walls</strong></a></div>
                            <div className="block-42-meta">Posted on June 28, 2018, <strong>Pastor John Smith</strong> </div>
                          </div>
                          <div className="block-42-icons ml-auto">
                            <a href="#" className="fa fa-video-camera pl-0" />
                            <a href="#" className="fa fa-headphones" />
                            <a href="#" className="fa fa-cloud-download" />
                            <a href="#" className="fa fa-book" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="site-section">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-md-6 order-md-2">
                          <div className="block-16">
                            <figure>
                              <img src="images/img_1.jpg" alt="Image placeholder" className="img-fluid img-shadow" />
                              <a href="https://vimeo.com/45830194" className="play-button popup-vimeo"><span className="ion-ios-play" /></a>
                            </figure>
                          </div>
                        </div>
                        <div className="col-md-6 order-md-1">
                          <div className="block-15">
                            <div className="heading">
                              <h2>Welcome To Brotherly Love</h2>
                            </div>
                            <div className="text mb-5">
                              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam nisi eos accusantium eligendi velit deleniti nihil ad deserunt rerum incidunt nulla nemo eius molestiae architecto beatae asperiores doloribus animi.</p>
                              <p className="text-black">Church Pastor <strong>Gregg Smith</strong></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* END section */}
                  <section className="site-section pt-0">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6 col-lg-4 mb-5">
                          <div className="block-43">
                            <div className="block-43-icon">
                              <span className="icon-wrapper">
                                <span className="icon fa fa-book text-primary" />  
                              </span>
                            </div>
                            <div className="block-43-text">
                              <h3 className="block-43-heading">Connect With God</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam nisi eos accusantium eligendi velit deleniti nihil ad deserunt rerum.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                          <div className="block-43">
                            <div className="block-43-icon">
                              <span className="icon-wrapper">
                                <span className="icon fa fa-user text-primary" />  
                              </span>
                            </div>
                            <div className="block-43-text">
                              <h3 className="block-43-heading">Come As You Are</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam nisi eos accusantium eligendi velit deleniti nihil ad deserunt rerum.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                          <div className="block-43">
                            <div className="block-43-icon">
                              <span className="icon-wrapper">
                                <span className="icon fa fa-heart text-primary" />  
                              </span>
                            </div>
                            <div className="block-43-text">
                              <h3 className="block-43-heading">Brotherly Love</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam nisi eos accusantium eligendi velit deleniti nihil ad deserunt rerum.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="site-section bg-light">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="section-heading">
                            <h2 className="heading">Church Services</h2>
                          </div>
                        </div>
                      </div>
                      {/* <div class="row">
                  <div class="col-md-6 col-lg-4 mb-5">
                    <div class="block-20">
                      <figure>
                        <a href="#"><img src="images/image_1.jpg" alt="Image placeholder" class="img-fluid"></a>
                      </figure>
                      <div class="text text-center">
                        <h3 class="heading"><a href="#">Bible studies like Bereans did</a></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus asperiores exercitationem cupiditate!</p>
                        <p><a href="#">Read More</a></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 mb-5">
                    <div class="block-20">
                      <figure>
                        <a href="#"><img src="images/image_2.jpg" alt="Image placeholder" class="img-fluid"></a>
                      </figure>
                      <div class="text text-center">
                        <h3 class="heading"><a href="#">Piano Lesson for Children</a></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus asperiores exercitationem cupiditate!</p>
                        <p><a href="#">Read More</a></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 mb-5">
                    <div class="block-20">
                      <figure>
                        <a href="#"><img src="images/image_3.jpg" alt="Image placeholder" class="img-fluid"></a>
                      </figure>
                      <div class="text text-center">
                        <h3 class="heading"><a href="#">The Truth will set us free</a></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus asperiores exercitationem cupiditate!</p>
                        <p><a href="#">Read More</a></p>
                      </div>
                    </div>
                  </div>
                </div> */}
                    </div>
                    <div className="block-13">
                      <div className="nonloop-block-13 owl-carousel">
                        <div className="item">
                          <div className="block-20">
                            <figure>
                              <a href="#"><img src="images/image_3.jpg" alt="Image placeholder" className="img-fluid" /></a>
                            </figure>
                            <div className="text text-center">
                              <h3 className="heading"><a href="#">The Truth will set us free</a></h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus asperiores exercitationem cupiditate!</p>
                              <p><a href="#">Read More</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="block-20">
                            <figure>
                              <a href="#"><img src="images/image_2.jpg" alt="Image placeholder" className="img-fluid" /></a>
                            </figure>
                            <div className="text text-center">
                              <h3 className="heading"><a href="#">Piano Lesson for Children</a></h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus asperiores exercitationem cupiditate!</p>
                              <p><a href="#">Read More</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="block-20">
                            <figure>
                              <a href="#"><img src="images/image_1.jpg" alt="Image placeholder" className="img-fluid" /></a>
                            </figure>
                            <div className="text text-center">
                              <h3 className="heading"><a href="#">Bible studies like Bereans did</a></h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus asperiores exercitationem cupiditate!</p>
                              <p><a href="#">Read More</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="block-20">
                            <figure>
                              <a href="#"><img src="images/image_3.jpg" alt="Image placeholder" className="img-fluid" /></a>
                            </figure>
                            <div className="text text-center">
                              <h3 className="heading"><a href="#">The Truth will set us free</a></h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus asperiores exercitationem cupiditate!</p>
                              <p><a href="#">Read More</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="block-20">
                            <figure>
                              <a href="#"><img src="images/image_2.jpg" alt="Image placeholder" className="img-fluid" /></a>
                            </figure>
                            <div className="text text-center">
                              <h3 className="heading"><a href="#">Piano Lesson for Children</a></h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus asperiores exercitationem cupiditate!</p>
                              <p><a href="#">Read More</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="block-20">
                            <figure>
                              <a href="#"><img src="images/image_1.jpg" alt="Image placeholder" className="img-fluid" /></a>
                            </figure>
                            <div className="text text-center">
                              <h3 className="heading"><a href="#">Bible studies like Bereans did</a></h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus asperiores exercitationem cupiditate!</p>
                              <p><a href="#">Read More</a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="site-section">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6 mb-5">
                          <div className="section-heading mb-5">
                            <h2 className="heading">Latest Sermons</h2>
                          </div>
                          <div className="block-44 d-flex mb-3">
                            <div className="block-44-image"><img src="images/image_tall_1.jpg" alt="Image placeholder" /></div>
                            <div className="block-44-text">
                              <h3 className="block-44-heading"><a href="#">Rebuilding The Walls</a></h3>
                              <div className="block-44-meta">Posted on June 28, 2018, Pastor Gregg Smith</div>
                              <div className="block-44-icons">
                                <a href="#" className><span className="fa fa-video-camera" /></a>
                                <a href="#" className><span className="fa fa-headphones" /></a>
                                <a href="#" className><span className="fa fa-cloud-download" /></a>
                                <a href="#" className><span className="fa fa-book" /></a>
                              </div>
                            </div>
                          </div>
                          <div className="block-44 d-flex mb-3">
                            <div className="block-44-image"><img src="images/image_tall_2.jpg" alt="Image placeholder" /></div>
                            <div className="block-44-text">
                              <h3 className="block-44-heading"><a href="#">Jonah's Message To Neniveh</a></h3>
                              <div className="block-44-meta">June 28, 2018, Pastor Gregg Smith</div>
                              <div className="block-44-icons">
                                <a href="#" className><span className="fa fa-video-camera" /></a>
                                <a href="#" className><span className="fa fa-headphones" /></a>
                                <a href="#" className><span className="fa fa-cloud-download" /></a>
                                <a href="#" className><span className="fa fa-book" /></a>
                              </div>
                            </div>
                          </div>
                          <div className="block-44 d-flex mb-3">
                            <div className="block-44-image"><img src="images/image_tall_3.jpg" alt="Image placeholder" /></div>
                            <div className="block-44-text">
                              <h3 className="block-44-heading"><a href="#">New Jerusalem</a></h3>
                              <div className="block-44-meta">June 28, 2018, Pastor Gregg Smith</div>
                              <div className="block-44-icons">
                                <a href="#" className><span className="fa fa-video-camera" /></a>
                                <a href="#" className><span className="fa fa-headphones" /></a>
                                <a href="#" className><span className="fa fa-cloud-download" /></a>
                                <a href="#" className><span className="fa fa-book" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-5">
                          <div className="section-heading mb-5">
                            <h2 className="heading">Latest Events</h2>
                          </div>
                          <div className="block-44 d-flex mb-3">
                            <div className="block-44-image"><img src="images/image_tall_4_large.jpg" alt="Image placeholder" /></div>
                            <div className="block-44-text">
                              <h3 className="block-44-heading"><a href="#">Weekend Outreach</a></h3>
                              <div className="block-44-meta mb-2">Posted on June 28, 2018, Pastor Gregg Smith</div>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita alias dolore voluptate.</p>
                              <p><a href="#">Read More</a></p>
                            </div>
                          </div>
                          <div className="block-44 d-flex mb-3">
                            <div className="block-44-image"><img src="images/image_tall_5_large.jpg" alt="Image placeholder" /></div>
                            <div className="block-44-text">
                              <h3 className="block-44-heading"><a href="#">No Longer Slave To Sin</a></h3>
                              <div className="block-44-meta mb-2">Posted on June 28, 2018, Pastor Gregg Smith</div>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita alias dolore voluptate.</p>
                              <p><a href="#">Read More</a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className="site-section bg-light">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="section-heading mb-5">
                            <h2 className="heading">Change Lives</h2>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-lg-4 mb-5">
                          <div className="block-33">
                            <div className="text mb-5">
                              <blockquote>
                                <p>” Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt. “</p>
                              </blockquote>
                            </div>
                            <div className="vcard d-flex">
                              <div className="image align-self-center ml-auto order-2 ml-3"><img src="images/person_3.jpg" alt="Person here" /></div>
                              <div className="name-text align-self-center ml-auto order-1 text-right">
                                <h2 className="heading">Martin Newmansfield</h2>
                                <span className="meta">New York</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                          <div className="block-33">
                            <div className="text mb-5">
                              <blockquote>
                                <p>” Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt. “</p>
                              </blockquote>
                            </div>
                            <div className="vcard d-flex">
                              <div className="image align-self-center ml-auto order-2 ml-3"><img src="images/person_2.jpg" alt="Person here" /></div>
                              <div className="name-text align-self-center ml-auto order-1 text-right">
                                <h2 className="heading">Evan Roosbelt</h2>
                                <span className="meta">London</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                          <div className="block-33">
                            <div className="text mb-5">
                              <blockquote>
                                <p>” Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt. “</p>
                              </blockquote>
                            </div>
                            <div className="vcard d-flex">
                              <div className="image align-self-center ml-auto order-2 ml-3"><img src="images/person_1.jpg" alt="Person here" /></div>
                              <div className="name-text align-self-center ml-auto order-1 text-right">
                                <h2 className="heading">Marilyn Smith</h2>
                                <span className="meta">London</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <footer className="site-footer">
                    <div className="container">
                      <div className="row mb-5">
                        {/*   <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <p>Perferendis eum illum voluptatibus dolore tempora consequatur minus asperiores temporibus.</p>
                  </div> */}
                        <div className="col-md-6 col-lg-6 mb-5 mb-lg-0">
                          <h3 className="heading">Church Quick Links</h3>
                          <div className="row">
                            <div className="col-md-4">
                              <ul className="list-unstyled">
                                <li><a href="#">Men's Ministry</a></li>
                                <li><a href="#">Women's Ministry</a></li>
                                <li><a href="#">Children's Ministry</a></li>
                                <li><a href="#">Youth Ministry</a></li>
                              </ul>
                            </div>
                            <div className="col-md-4">
                              <ul className="list-unstyled">
                                <li><a href="#">Senior Adult Ministry</a></li>
                                <li><a href="#">Marriage Ministries</a></li>
                                <li><a href="#">Missions &amp; Outreach</a></li>
                                <li><a href="#">Prayer Ministry</a></li>
                              </ul>
                            </div>
                            <div className="col-md-4">
                              <ul className="list-unstyled">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Location</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Privacy &amp; Policy</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                          <h3 className="heading">Events</h3>
                          <div className="block-21 d-flex mb-4">
                            <div className="text">
                              <h3 className="heading mb-0"><a href="#">Consectetur Adipisicing Elit</a></h3>
                              <div className="meta">
                                <div><a href="#"><span className="ion-android-calendar" /> May 29, 2018</a></div>
                                <div><a href="#"><span className="ion-android-person" /> Admin</a></div>
                                <div><a href="#"><span className="ion-chatbubble" /> 19</a></div>
                              </div>
                            </div>
                          </div>  
                          <div className="block-21 d-flex mb-4">
                            <div className="text">
                              <h3 className="heading mb-0"><a href="#">Dolore Tempora Consequatur</a></h3>
                              <div className="meta">
                                <div><a href="#"><span className="ion-android-calendar" /> May 29, 2018</a></div>
                                <div><a href="#"><span className="ion-android-person" /> Admin</a></div>
                                <div><a href="#"><span className="ion-chatbubble" /> 19</a></div>
                              </div>
                            </div>
                          </div>  
                          <div className="block-21 d-flex mb-4">
                            <div className="text">
                              <h3 className="heading mb-0"><a href="#">Perferendis eum illum</a></h3>
                              <div className="meta">
                                <div><a href="#"><span className="ion-android-calendar" /> May 29, 2018</a></div>
                                <div><a href="#"><span className="ion-android-person" /> Admin</a></div>
                                <div><a href="#"><span className="ion-chatbubble" /> 19</a></div>
                              </div>
                            </div>
                          </div>  
                        </div>
                        <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                          <h3 className="heading">Contact Information</h3>
                          <div className="block-23">
                            <ul>
                              <li><span className="icon ion-android-pin" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                              <li><a href="#"><span className="icon ion-ios-telephone" /><span className="text">+2 392 3929 210</span></a></li>
                              <li><a href="#"><span className="icon ion-android-mail" /><span className="text">info@yourdomain.com</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-5">
                        <div className="col-md-12 text-center copyright">
                          <p className="float-md-left">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank" className="text-primary">Colorlib</a>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                          <p className="float-md-right">
                            <a href="#" className="fa fa-facebook p-2" />
                            <a href="#" className="fa fa-twitter p-2" />
                            <a href="#" className="fa fa-linkedin p-2" />
                            <a href="#" className="fa fa-instagram p-2" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </footer>
                  {/* END footer */}
                </div>
                {/* loader */}
              </div>
                     )
    }
}