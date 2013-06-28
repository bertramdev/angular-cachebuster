#Angular-CacheBuster

###What it needs
* The only requirement is angular 1.1.5 or higher (included in the bower dependency file)

###How it works
* Include the file in your page and add the 'cacheBuster' module to your angular.module definition

```javascript
angular.module('yourModule,['cacheBuster']);
```

* (the cacheBuster module takes care of the rest)

###Behind the scenes
* The cache buster is an interceptor that appends a query param (cachebuster) with a random number to the end of the url just before the http request goes out.
* Before it updates its checks the $templateCache to see if the url key exists there. If there is a template in the $templateCache the query param is not added.
  * This means if you use angular-ui's templated code the templates will still get loaded
