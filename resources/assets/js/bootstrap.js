window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = require('jquery');
require('../../../node_modules/materialize-css/dist/js/materialize.min');

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require('vue');
var VueResource  = require('vue-resource');
var VueAsyncData = require('vue-async-data');

Vue.use(VueResource);
Vue.use(VueAsyncData);

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

Vue.http.interceptors.push(
    (request, next) =>
    {
        request.headers['X-CSRF-TOKEN'] = Laravel.csrfToken;

        next();
    }
);

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

/**
 * Other
 */
window.app = {
    debug: true // Enable debug mode.
};


/**
 * Other parameters of Vue.js.
 */
Vue.config.async = true;
Vue.config.devtools         = app.debug; // DevTools mode is only available in development build. In production set FALSE !
Vue.config.debug            = app.debug; // Debug mode is only available in development build. In production set FALSE !
Vue.config.silent           = !app.debug; //Suppress all Vue.js logs and warnings.
Vue.config.unsafeDelimiters = ['{!!', '!!}']; // Change the raw HTML interpolation delimiters.