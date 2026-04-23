'use strict';
import accounts from './accounts.js';

import logger from "../utils/logger.js";
import emp from "../models/emp.js";

const about = {
  
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info("About page loading!");
    if (loggedInUser) {
   const viewData = {


      
      title: "About the Playlist App",
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      employee: emp.getAppInfo(),
    };
    
    response.render('about', viewData);
  };

}

};

export default about;