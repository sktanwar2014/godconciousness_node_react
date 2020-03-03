import React, { Component, useState } from 'react';
import Header from './SubComponent/Header.js';
import Footer from './SubComponent/Footer.js';
import FullContentViewDialog from './SubComponent/FullContentViewDialog.js';

let contentArray = [
  {id: 1, content : "I come from a joint family and got married into a joint family. In my new family, I saw that each one loved to play politics with one another. Saying bad behind someone's back and be sweet in front of them, I couldn't cope with all this and started getting migraines. I always felt I was clear and doing what was right for me!After coming into prayers I realised, that my claim of being clear-hearted was filled with ego and feeling of superiority. I became aware of my thoughts and my knowledge of my own self eventually healed my migraine.Thank you Di for the prayers.I was sowing ego and one up-manship and reaping migraine.Thank you for this awakening.Dimple Anil: All Gratitude to THEM, dear.Treat reading your Sharing.Your fine tuning with THE DIVINE and understanding of THEIR ways is remarkable.Bow to THEM."},
  {id: 2, content : "Life seems to be sorted fully.Thank you Dimple MA.Love you.I wanted a clean, spacious home.I have.I wanted to wear sarees to my workplace.I have started.I wanted loads of plants in my home.I have I wanted enough resources for the education of my children and their marriages.Both married and settled.I wanted to be Naani Daadi.I am both I wanted my son and daughter in law to have good relationship.They have.I wanted my children to travel.They do.I wanted good health for my husband and myself.We are healthy.Bow, Namaskar, love, respect, regards to you Dimple Ma.Jeenay ka mazaa Jeenay ka tareeka"},
  {id: 3, content : "Please share I conceived after four years of marriage, loads and loads of efforts. I was happy but insecure and very anxious. Was sowing mixed bag of emotions.Insecurities and anxieties out did happiness. I would thank profusely for this conception but at the same time constantly sowed anxiety, fear, doubt, insecurity.Then miscarriage,My world fell apart but it was an amazingly enriching experience. I knew what wrong I had sown. Strange confidence came in me to sow more and more of goodies, good feelings. This miscarriage is my teacher. I understood what Dimple Auntyji says. I knew where I was wrong, what I had sown I started meditations.I started shifting my focus. I started feeling better. This my miscarriage is my teacher, it helped me in all my living. Didn't conceive for next three years, but working on myself continued.Just day before my pregnancy is confirmed. I am at a much better place today. I know this baby will be born healthy and happy. I am so sure. Thank you Dimple Auntyji. Journey of knowing what we want and what we sow. I get results of my sowing instantly.I sow low feel for whatever reason, I get more of it and it comes from anywhere. I sow good feelings and I get the same from anywhere.Sow bad, receive badder, says Auntyji, friends I am living this.Please be alert. I am a living example. I sowed thank you, happiness and anxiety in first conception. Anxiety was more and miscarriage happened, now happiness and gratitude is more and I know I have in my womb healthy and happy Soul. I am confident.Anxiety when it comes, instead of letting it multiply, I wash my face, put on music, start meditation, go for a walk. All directions of Auntyji I follow to the T.Thank you dear Aunty ji for making me the Creator of my life.ðŸ™‡ Bow Bow Bow Bow to you.Dimple Anil: Your learning through a rough process shows how Blessed you are dear. Divine Wisdom, your Trust and Faith is immense. Anyone would have buckled.Not easy, not at all from where you started and where your realization has brought you today is worth emulating. My happiness for you is gushing out, infact I am smiling with teary eyes. You truly are an example of being a Creator of your destiny. Thank you so much dear for your sharing.All Blessings dear. THEY have no option but to shower and keep on showering Blessings."},
  {id: 4, content : "Drink Dine & Dance Last night my husband was very sad and tensed.We had plans of going for Drinks, Dance & Dinner yesterday but since he was so tensed he came back & refused. “Tina not today. Let’s just go to the temple.No party on my mind. I am not at ease.”, he said.I agreed and pointed at Neetu maa's pic to him, “Look at HER ! Tell HER your worries & things will be fine. He went off to sleep at 8 when he woke up at 9 pm, he saw me all ready and decked up. “Where are you going?,” he asked.I replied, “This is the last Saturday of 2019 so you relax I'm going to celebrate alone.”Then I see him getting ready.As we both were about to leave, he told me that he didn’t have money.I quipped, “ Well, that’s a smart way of asking me 🤭!” I kept around ₹5k but I knew that bills at such pubs go beyond ₹8kto 9kI left with my husband, my brother in law and 2 more friends. When we reached our destination we got to know that one of the biggest chains of Delhi named Lord of the Drinks has opened in Lucknow and that night was its inaugural party where entry was strictly through invitation.I politely asked the bouncer outside the gate, “Can I just go in and have a look around? “ pleasantly he said, “YES.”I went in. My husband and others followed me.Then to our surprise drinks were offered, music dance, masti.! We stayed there till 1.00 am, till it all got over.Everyone including my husband was zapped,My brother in law in utter disbelief kept chanting “Ye kya tha ? What was this? Free entry and free drinks worth over ₹ 11 k and No bill??? How and why did we we were get treated like privileged important guests???? “We had a BLAST!I said, “This was a Divine Party gifted by the Angels. Before leaving the house I told Neetu maa, I have ₹5k rest is up to you.”See what SHE & THEY weaved for not only ne but my companions.... man.. VVIP TREATMENT, MUSIC, DANCE, FREE DRINKS ... a truly MIRACULOUS MAGICAL NIGHT.” They all are still in Shock!!!! and I more empowered and ever more grateful to THEM for raising my FAITH in THEM, THE DIVINE, ANGELS, GOD to this level. I am so proud of my faith in THEM. THEY give beyond our expectations and how!!!! WOW is my new mantra. I am in tears while sharing this with u all. It was so MAGICAL.NOT a penny spent and extravagant extraordinary magical fun filled evening was gifted by the Divine.Thank you Divine Thank you Neetu maa Thank you for everything 🤲🏻🙌🏼👏🏻"},
];
let imageArray = [
  {id: 1, name: "pic3.jpeg"},
  {id: 2, name: "believe.jpeg"},
  {id: 3, name: "baby.jpeg"},
  {id: 4, name: "dine.jpg"},
];

export default function Miracle(){ 
  const [showContentDialog, setShowContentDialog] = useState(false);
   const [dialogContent, setDialogContent]  = useState(false);

   const handleDialogeOpen = (objectIndex) => {
    setDialogContent(contentArray[objectIndex].content);
    setShowContentDialog(true);
   }
         return(
          <div className="wrap">
        
            <Header />
            <section class="site-hero overlay" style= {{backgroundImage: 'URL(images/miracle.jpeg)'}}>
            <div class="container">
              <div class="row align-items-center justify-content-center site-hero-inner">
                <div class="col-md-8 text-center">
                  <div class="mb-5 element-animate fadeInUp element-animated">
                    {/* <div class="block-17">
                      <h1 class="heading mb-4" style="margin-top: 80px; color: white; font-size: 70px;">God Consciousness</h1>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="site-section">
                <div class="container">
                  <div class="row">
                    { contentArray.map((data, index) => {
                        return(
                          <div class="col-md-6 col-lg-4 mb-5">
                            <div class="block-20">
                            
                              <figure style={{width:'100%'}}>
                                  <a href="blog-single.html"><img src={"images/" + imageArray[index].name} alt="Image placeholder" class="img-fluid" /></a>
                              </figure>
                              <div class="text text-center">
                                <h3 class="heading"><a href="#">I come from and got married into a joint family.</a></h3>
                                  <div class="meta mb-3">
                                    <div><a href="#"><span class="fa fa-calendar"></span> May 29, 2018</a></div>
                                    <div><a href="#"><span class="fa fa-user"></span> Admin</a></div>
                                    <div><a href="#"><span class="fa fa-comment"></span> 19</a></div>
                                  </div>
                                  <p style={{textAlign:'justify'}}>{(data.content).substring(0,110) + '...'}</p>
                          <p><a href="" onClick = {(e)=>{ handleDialogeOpen(index)}} data-toggle="modal" data-target="#exampleModalLong">Read More</a></p>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }  
                      </div>
                  </div>
           </section>  
           {showContentDialog ? <FullContentViewDialog title={"Content"} content={dialogContent} /> : null }        
            <Footer/>
            {/* <StoryDialog /> */}
          </div>
      )
    }
  