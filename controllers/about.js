'use strict';
import logger from "../utils/logger.js";
import stevie from "../models/emp.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");
   const viewData = {
      employee: stevie.getAppInfo(),
      title: "About the Playlist App"
    };
    
    logger.info(viewData.employee)
    response.render('about', viewData);
  },
};

export default about;