import axios from 'axios';
import * as c from './config/Constants';
import checkError from './config/HttpClient';
import {authHeader} from './config/AuthHeader.js';

const PARAMS = ({ methodType = 'GET' }) => ({
  method: methodType,
 
  headers: authHeader(),
});

export default {

  getContactInfo:async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/api/getContactInfo`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {
        data: payload,
      }),
    );
      return data;
    } catch (error) {
      //checkError(error);
      throw error;
    }
  },

  getTabRelatedList:async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/api/getTabRelatedList`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), 
     
      {
        data: payload,
      }),
    ); 
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }
  },



  getAboutInfo:async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/api/getAboutInfo`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {
        data: payload,
      }),
    );
      return data;
    } catch (error) {
      //checkError(error);
      throw error;
    }
  },

 getprayersList:async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/api/getprayersList`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
        data: payload,
      }),
    );
      return data;
    } catch (error) {
      //checkError(error);
      throw error;
    }
  },

  sendMail:async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/api/sendMail`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
        data: payload,
      }),
    );
      return data;
    } catch (error) {      
      //checkError(error);
      throw error;
    }
  },

}; 

