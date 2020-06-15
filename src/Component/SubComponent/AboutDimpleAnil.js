import React, { Component ,useEffect, useState} from 'react';

import FetchAPI from '../../api/APIs';

export default function DimpleAnil(props){

  const [DimpleAnil, setDimpleAnil] = useState([]);
  
  const fetchDimpleAnil = async () => {
    try{    
      const result = await FetchAPI.getTabRelatedList({type: 'DimpleAnil'});
      setDimpleAnil(result.resultList);
      
    }catch(e){
      console.log('Error...',e);
    }
  }

  useEffect(() => {
   fetchDimpleAnil();
  },[]);

  return(    
 
        <div class="col-md-8 pl-md-5">
              <div class="container">
              {(DimpleAnil.length > 0 ? DimpleAnil : []).map((data) => {
    return(
                  <div class="row">
              
              <p class=" text-justify" style={{color: 'black',fontsize: '18px' ,margin: '0px',margintop: '-8px'}}>
  {data.title}
</p>
              
            <img src="http://godsconsciousness.com/images/auntyportrait.jpg"  class="img-fluid img-shadow  mr-3"/> 


       <p class="mt-3 text-justify" style={{color: 'black',fontsize: '14px',marginleft: '-26px',marginright: '-30px'}}>
     {data.content}
    </p>
             



         </div> 
          )
        })}
       </div>
      </div>
      )
    }



