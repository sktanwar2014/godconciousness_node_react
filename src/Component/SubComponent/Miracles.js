import React, { useState,Fragment } from 'react';
import FullContentViewDialog from './FullContentViewDialog.js';
let contentArray = [
  { 
    id: 'miracle-1',
    title: 'The Truth will set us free',
    content : "I come from a joint family and got married into a joint family. In my new family, I saw that each one loved to play politics with one another. Saying bad behind someone's back and be sweet in front of them, I couldn't cope with all this and started getting migraines. I always felt I was clear and doing what was right for me!After coming into prayers I realised, that my claim of being clear-hearted was filled with ego and feeling of superiority. I became aware of my thoughts and my knowledge of my own self eventually healed my migraine.Thank you Di for the prayers.I was sowing ego and one up-manship and reaping migraine.Thank you for this awakening.Dimple Anil: All Gratitude to THEM, dear.Treat reading your Sharing.Your fine tuning with THE DIVINE and understanding of THEIR ways is remarkable.Bow to THEM.",
    imageName: 'pic3.jpeg'
  },
  { 
    id: 'miracle-2',
    title: 'Piano Lesson for Children',
    content : "Life seems to be sorted fully.Thank you Dimple MA.Love you.I wanted a clean, spacious home.I have.I wanted to wear sarees to my workplace.I have started.I wanted loads of plants in my home.I have I wanted enough resources for the education of my children and their marriages.Both married and settled.I wanted to be Naani Daadi.I am both I wanted my son and daughter in law to have good relationship.They have.I wanted my children to travel.They do.I wanted good health for my husband and myself.We are healthy.Bow, Namaskar, love, respect, regards to you Dimple Ma.Jeenay ka mazaa Jeenay ka tareeka",
    imageName: 'believe.jpeg'
  },
  { 
    id: 'miracle-3',
    title: 'Bible studies like Bereans did',
    content : "Please share I conceived after four years of marriage, loads and loads of efforts. I was happy but insecure and very anxious. Was sowing mixed bag of emotions.Insecurities and anxieties out did happiness. I would thank profusely for this conception but at the same time constantly sowed anxiety, fear, doubt, insecurity.Then miscarriage,My world fell apart but it was an amazingly enriching experience. I knew what wrong I had sown. Strange confidence came in me to sow more and more of goodies, good feelings. This miscarriage is my teacher. I understood what Dimple Auntyji says. I knew where I was wrong, what I had sown I started meditations.I started shifting my focus. I started feeling better. This my miscarriage is my teacher, it helped me in all my living. Didn't conceive for next three years, but working on myself continued.Just day before my pregnancy is confirmed. I am at a much better place today. I know this baby will be born healthy and happy. I am so sure. Thank you Dimple Auntyji. Journey of knowing what we want and what we sow. I get results of my sowing instantly.I sow low feel for whatever reason, I get more of it and it comes from anywhere. I sow good feelings and I get the same from anywhere.Sow bad, receive badder, says Auntyji, friends I am living this.Please be alert. I am a living example. I sowed thank you, happiness and anxiety in first conception. Anxiety was more and miscarriage happened, now happiness and gratitude is more and I know I have in my womb healthy and happy Soul. I am confident.Anxiety when it comes, instead of letting it multiply, I wash my face, put on music, start meditation, go for a walk. All directions of Auntyji I follow to the T.Thank you dear Aunty ji for making me the Creator of my life.ðŸ™‡ Bow Bow Bow Bow to you.Dimple Anil: Your learning through a rough process shows how Blessed you are dear. Divine Wisdom, your Trust and Faith is immense. Anyone would have buckled.Not easy, not at all from where you started and where your realization has brought you today is worth emulating. My happiness for you is gushing out, infact I am smiling with teary eyes. You truly are an example of being a Creator of your destiny. Thank you so much dear for your sharing.All Blessings dear. THEY have no option but to shower and keep on showering Blessings.",
    imageName: 'baby.jpeg',
  },  
];
export default function Miracles (){ 
   const [showContentDialog, setShowContentDialog] = useState(false);
   const [dialogContent, setDialogContent]  = useState(false);

   const handleDialogeOpen = (objectIndex) => {
    setDialogContent(contentArray[objectIndex].content);
    setShowContentDialog(true);
   }
  return(
      <div>
        <section className="site-section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2 className="heading">Miracles</h2>
                </div>
              </div>
            </div>      
          </div>
               <div className="block-13" style={{marginLeft:'90px'}}>
                 <div className="nonloop-block-13 owl-carousel owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <section class="site-section"><div class="container"><div class="row">
                        <div class="col-md-6 col-lg-4 mb-5">1
                          <div class="block-20">
                            <figure style={{width: '100%'}}>
                              <a href="blog-single.html">
                                 <img src="images/pic3.jpeg" alt="Image placeholder" class="img-fluid"/>
                              </a>
                            </figure>
                         <div class="text text-center">
                            <h3 class="heading">
                              <a href="#">I come from and got married into a joint family.</a>
                            </h3>
                             <div class="meta mb-3">
                                <div>
                                   <a href="#">
                                     <span class="fa fa-calendar"></span> May 29, 2018</a>
                                </div>
                                 <div>
                                   <a href="#">
                                     <span class="fa fa-user"></span> Admin</a>
                                  </div>
                                   <div>
                                     <a href="#">
                                      <span class="fa fa-comment"></span> 19</a>
                                      </div>
                                      </div>
                                      <p style={{textalign: 'justify'}}>I come from a joint family and got married into a joint family. In my new family, I saw that each one loved to...</p>
                                      <p>
                                        <a href="" data-toggle="modal" data-target="#exampleModalLong">Read More</a>
                                        </p>
                                        </div>
                                        </div>
                                        </div>
                                        <div class="col-md-6 col-lg-4 mb-5">
                                          <div class="block-20">
                                            <figure style={{width: '100%'}}>
                                              <a href="blog-single.html">
                                                <img src="images/believe.jpeg" alt="Image placeholder" class="img-fluid"/>
                                                </a>
                                                </figure>
                                                <div class="text text-center">
                                                  <h3 class="heading">
                                                    <a href="#">I come from and got married into a joint family.</a>
                                                    </h3>
                                                    <div class="meta mb-3">
                                                      <div>
                                                        <a href="#">
                                                          <span class="fa fa-calendar"></span> May 29, 2018</a>
                                                          </div>
                                                          <div>
                                                            <a href="#">
                                                              <span class="fa fa-user"></span> Admin</a>
                                                              </div>
                                                              <div>
                                                                <a href="#">
                                                                  <span class="fa fa-comment"></span> 19</a>
                                                                  </div>
                                                                  </div>
                                                                  <p style={{textalign: 'justify'}}>Life seems to be sorted fully.Thank you Dimple MA.Love you.I wanted a clean, spacious home.I have.I wanted to ...</p>
                                                                  <p>
                                                                    <a href="" data-toggle="modal" data-target="#exampleModalLong">Read More</a>
                                                                    </p>
                                                                    </div>
                                                                    </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-lg-4 mb-5">
                                                                      <div class="block-20">
                                                                        <figure style={{width: '100%'}}>
                                                                          <a href="blog-single.html">
                                                                            <img src="images/baby.jpeg" alt="Image placeholder" class="img-fluid"/>
                                                                            </a>
                                                                            </figure>
                                                                            <div class="text text-center">
                                                                              <h3 class="heading">
                                                                                <a href="#">I come from and got married into a joint family.</a>
                                                                                </h3>
                                                                                <div class="meta mb-3">
                                                                                  <div>
                                                                                    <a href="#">
                                                                                      <span class="fa fa-calendar"></span> May 29, 2018</a>
                                                                                      </div>
                                                                                      <div>
                                                                                        <a href="#">
                                                                                          <span class="fa fa-user"></span> Admin</a>
                                                                                          </div>
                                                                                          <div>
                                                                                            <a href="#"><span class="fa fa-comment"></span> 19</a>
                                                                                            </div>
                                                                                            </div>
                                                                                            <p style={{textalign: 'justify'}}>Please share I conceived after four years of marriage, loads and loads of efforts. I was happy but insecure an...</p>
                                                                                            <p>
                                                                                              <a href="" data-toggle="modal" data-target="#exampleModalLong">Read More</a>
                                                                                              </p>
                                                                                              </div>
                                                                                              </div>
                                                                                              </div>
                                                                                              
                                                                                               
                                                                                               
                                                                                                    
                                                                                                      
                                                                                                     
            </div>
            </div>
            </section>
            {/* <div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '2540px', paddingLeft: '150px', paddingRight: '150px'}}>
              {contentArray.map((data, index) => {
                return(
                  <div className="owl-item active" style={{width: '353.333px', marginRight: '20px'}}>
                    <div className="item">
                      <div className="block-20">
                        <figure>
                          <a href="#"><img src={"images/" + data.imageName} alt="Image placeholder" className="img-fluid" /></a>
                        </figure>
                        <div className="text text-center">
                          <h3 className="heading"><a href="">{data.title}</a></h3>
                          <p style={{textAlign:'justify'}}>{(data.content).substring(0,110) + '...'}</p>
                          <p><a href="" onClick = {(e)=>{ handleDialogeOpen(index)}} data-toggle="modal" data-target="#exampleModalLong">Read More</a></p>
                        </div>
                      </div>
                    </div>
                  </div>  
                )
              })}
                            
            </div> */}
          </div>  
        </div>
      </div>
    </section> 
    {showContentDialog ? <FullContentViewDialog title={"Content"} content={dialogContent} /> : null }
    </div>
        )
    }
