import React, { Component ,useEffect, useState} from 'react';

import FetchAPI from '../../api/APIs';


export default function Introduction(props){

  const [Introduction, setIntroduction] = useState([]);
  
  const fetchIntroduction = async () => {
    try{    
      const result = await FetchAPI.getTabRelatedList({type: 'Introduction'});
      setIntroduction(result.resultList);
      
    }catch(e){
      console.log('Error...',e);
    }
  }

  useEffect(() => {
   fetchIntroduction();
  },[]);


  
        return(
        <div class="col-md-8 pl-md-5">
           
             <center>
               <h2 style={{paddingtop:'10px' ,fontsize: '2.8em'}}>Introduction</h2>
              </center> 



              {(Introduction.length > 0 ? Introduction : []).map((data) => {
    return(
<div>
    <p><b class="pl-5" style={{fontWeight:'normal', color:'gray',fontWeight:'bold'}}> {data.title}</b></p>
               <ul class="text-dark" style= {{paddingleft: '4rem',marginLeft:'50px'}}>
                 
<p class="pl-5 text-dark">
{data.content}
</p>



      </ul>
      
              </div>
 )
})}


            
</div>

      )
    }
