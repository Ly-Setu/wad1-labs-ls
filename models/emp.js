'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const emp = {

  store: new JsonStore('./models/emp.json', { employees: [] }),
  collection: 'employees',
  array: 'employees',

  getAppInfo() {
    return this.store.findAll(this.collection);
  },

};

export default emp;