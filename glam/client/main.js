import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/App.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../i18n/en.i18n.json';
import '../i18n/es.i18n.json';


Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});