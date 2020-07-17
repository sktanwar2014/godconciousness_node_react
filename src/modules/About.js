import React, {Fragment, useEffect, useState} from 'react';



//API
import FetchAPI from '../api/APIs.js';
import { FTP_URL } from '../api/config/Constants.js';

export default function About(props) {

  const [about, setAbout] = useState({id:'', content: '', image_name: '', link: ''});

  useEffect(() => {
    fetchPageData();
  },[]);

  const fetchPageData = async () => {
    try{
      const result = await FetchAPI.fetchPageData({page: 'About'});
      setAbout(result.about[0]);
    }catch(e){
      console.log('Error...', e);
    }
  }


  return(
    <Fragment>
      <section class="site-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 order-md-2">
              <div class="block-16">
                <figure>
                  <img src={FTP_URL + '/api/images?path=AboutWelcomeMessage/' + about.image_name}  alt="Image placeholder" class="img-fluid img-shadow" />
                  <a href={about.link} target="_blank"  class="play-button popup-vimeo"><span class="ion-ios-play"></span></a>
                </figure>
              </div>
            </div>
            <div class="col-md-6 order-md-1">
              <div class="block-15">
                <div class="heading">
                  <h2>Welcome To God Consciousness </h2>
                </div>
                <div class="text mb-6">
                  <p class="mb-4 text-justify"> { about.content} </p> 
                  {/* <p class="text-black">By:  <strong>Gregg Smith</strong></p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="site-section bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-heading">
                <h2 class="heading">Introduction</h2>
              </div>
            </div>
          </div>
         <div class="row">
            <div class="col-md-12 col-lg-12 mb-5">
              <div class="block-43">
                {/* <div class="block-43-icon">
                  <span class="icon-wrapper">
                    <span class="icon fa fa-book text-primary"></span>  
                  </span>
                </div> */}
                <div class="block-43-text">
                  <h3 class="block-43-heading">What is Consciousness ?</h3>
                  <ul>
                    <li>
                      The state of being conscious; awareness of one’s own existence, sensations, thoughts, needs, behaviour, attitude, surroundings, etc.
                    </li>
                    <li>
                      Full activity of the mind (or the mental faculties) and senses, as in waking life
                    </li>
                    <li>
                      A person's perception of something.
                    </li>
                  </ul>
                  <p>
                    The Wikipedia summarises it as “sentience or awareness of internal or external existence”.
                    Thesaurus gives its synonyms as ‘Awareness’ , ‘Wakefulness’ ‘Alertness’, ‘Responsiveness’, ‘Realization’, ‘Care’, ‘Carefulness’.
                    God – the Creator and the Ruler of the Universe and all moral authority ; the one Supreme Being.
                    So then what is God’s Consciousness?
                  </p>
                </div>
                <div class="block-43-text">
                  <h3 class="block-43-heading">God’s Consciousness is- </h3>
                  <p>
                    Living, Feeling, Thinking, Speaking, Acting, Doing, Walking, Sitting, Eating, Laying, Sleeping, Resting, Dancing, Singing, Working, Instructing, Listening and All that in the COMPLETE KNOW of the fact that since WE are from the CREATOR, WE BELONG to GOD.
                    So we have all the VIRTUES and POWER that vests with the CREATOR and LIVING with that knowledge cautiously, consciously, conscientiously
                    We can MANIFEST all that WE wish.
                  </p>
                  <p>
                    God's Consciousness is a group initiated by DIMPLE ANIL where all the co travellers read, write, feel the DAILY PRAYERS that are given to DIMPLE ANIL by THEM (DIVINE/ANGELS/) between 2- 3 am everyday for the last two decades and she shares THEIR Instructions, Directions, PRAYERS daily with every one.
                  </p>
                  <p>
                    Prayers are SIMPLE and DOABLE and have all those lead a more peaceful, successful, glorious, magnificent, healthy, prosperous and abundant life. 
                  </p>
                </div>
              </div>
            </div>  
        </div> 
      </div>
    </section>
    <section class="site-section">
        <div class="container">
          <div class="row">
              <div class="col-md-12">
                <div class="section-heading">
                  <h2 class="heading">MS. DIMPLE ANIL </h2>
                </div>
              </div>
            </div>
            <div class="row align-items-center">            
              <div class="col-md-6 order-md-1">
                <div class="block-15">               
                  <div class="text mb-6">
                    <p class="mb-4 text-justify">
                      Dimple Anil is a Jammu (India) born Educationist, Radio Broadcaster, Theatre Artist with Masters in English Literature, Education, Ecology and Environment. She is also a mother, Life Coach, Counsellor, Mentor and Clairvoyant Psychic Medium.
                    </p>
                    <p class="mb-4 text-justify">
                      Founder of "God's Consciousness", Dimple Anil has over three decades of career as an Educationist heading various schools as Principal in Jammu and Delhi NCR.
                    </p>
                    <p class="mb-4 text-justify">
                      She has been an exemplary trainer with TeacherSITY (an empanelled agency of the CBSE and also as a freelancer) where she has conducted many workshops for teachers and principals.
                    </p>
                    <p class="mb-4 text-justify">
                      Her extensive body of work apart from an educationist has won her awards in Education (Yashorajya Laxmi Gold Medal for the best Student of University in Year 1980) Radio and TV plays as an anchor, actor and director.
                    </p>  
                    <p class="mb-4 text-justify">
                      In her notable career spanning over three decades, Dimple Anil has garnered particular acclaim and organised many a workshops on Youth Leadership, Personality Development, Parents – Teacher Associations, Counselling Single Parents, Stress Management, Personal Development, Personal Effectiveness, Life Skills, Attitudes and Values, Literary Creative and Scientific Skills, Art,
                    </p>
                    <p class="mb-4 text-justify">
                      Music and Performing Arts, Organisational Behaviour, Recording, Organising and Interpreting Data, Goals of Misbehaviour, Happiness Quotient, Dimensions of Learning, Teaching Learners with Learning Difficulties and Learning Disabilities, Micro Teaching, Accelerated Learning, Curriculum Planning and Implementation, Creative Problem Solving Techniques, Diverse/ Minority Community Relations, Aiding Solutions for Children afflicted with substance abuse are some of her highly celebrated workshops.
                    </p>
                    <p class="mb-4 text-justify">
                      Working with India's top notch CEOS, CFOs, Educationists, Healers et el who seek her guidance in dealing with issues in their personal and professional life, Dimple Anil is currently has travelled the world extensively and one of the very few true Guide & Teacher who is clearly and truthfully working only to build a society of Conscious Beings which each of us is born to evolve into.
                    </p>
                    <p class="mb-4 text-justify">
                      To live for our HIGHER PURPOSE by being HAPPY at all times and being of SERVICE to the world by being KIND and RIGHT. Her Humanitarian and Philanthropist approach is helping many CREATE a Life by manifesting MIRACLES.
                    </p>
                    <p class="mb-4 text-justify">
                      In 1972 at the tender age of 12, Dimple Anil had a Clairvoyant Experience which changed her life. She has a unique power to connect with our loved ones (those who have crossed over and no longer live in physical body).
                    </p>
                    <p class="mb-4 text-justify">
                      She is a Higher evolved human, working tirelessly to help the world break the shackles of old, un serving, negative beliefs, training, them hand holding them to Breathe, Speak, Think and Act Consciously as per the DIRECTIONS and GUIDELINES from THEM. She is not an oracle or an astrologer but a GIFTED being who is voraciously at God speed sharing her experiences and THEIR MESSAGES for the benefit of this world.
                    </p>
                    <p class="mb-4 text-justify">
                      Gods Consciousness is about 5 years old and is a group of people (men, women, youngsters, elders ) who take ownership of everything good, bad, ugly that has transpired in their lives. They follow consciously the PRAYERS and DIRECTIONS that are SIMPLE and DOABLE creating MIRACLES after MIRACLES healing themselves physically, mentally, emotionally, academically, professionally, financially and spiritually.
                    </p>
                    <p class="mb-4 text-justify">
                      God's Consciousness family has grown manifold across borders and is GLOBAL. Dimple Anil continues to serve and help people from her hometown Jammu where people from across faiths, cultures and countries make appointment with her and seek guidance. The philanthropist serves the world gratis. SHE DOES NOT CHARGE FOR THE SERVICES THROUGH HER.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 order-md-2">
                <div class="block-16">                  
                  <figure>
                    <img src="static/images/auntyPicForAbout3.jpg"  alt="Image placeholder" class="img-fluid img-shadow" />
                  </figure>
                  <figure>
                    <img src="static/images/auntyPicForAbout1.jpg"  alt="Image placeholder" class="img-fluid img-shadow" />
                  </figure>
                  <figure>
                    <img src="static/images/auntyPicForAbout2.jpg"  alt="Image placeholder" class="img-fluid img-shadow" />
                  </figure>
                  <figure>
                    <img src="static/images/auntyPicForAbout4.jpg"  alt="Image placeholder" class="img-fluid img-shadow" />
                  </figure>
                  <figure>
                    <img src="static/images/auntyPicForAbout3.jpg"  alt="Image placeholder" class="img-fluid img-shadow" />
                  </figure>
                </div>
              </div>
            </div>
        </div>
      </section>
    </Fragment>
  )
}