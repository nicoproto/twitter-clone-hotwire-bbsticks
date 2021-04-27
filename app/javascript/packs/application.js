// // This file is automatically compiled by Webpack, along with any other files
// // present in this directory. You're encouraged to place your actual application logic in
// // a relevant structure within app/javascript and only use these pack files to reference
// // that code so it'll be compiled.

require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels") // TODO: Do we need this still?

import "@hotwired/turbo-rails"
import "controllers"

// Tailwind import
import "../stylesheets/application"

// // Internal imports, e.g:
// // import { initSelect2 } from '../components/init_select2';
// import initAlerts from '../components/initAlerts';

// document.addEventListener('turbolinks:load', () => {
//   // Call your functions here, e.g:
//   // initSelect2();
//   initAlerts();
// });
