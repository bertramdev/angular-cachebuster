angular.module('cacheBuster',[]).config(['$provide', '$httpProvider', function($provide, $httpProvider) {
	$provide.factory('cacheBuster', ['$templateCache', function($templateCache) {
		function getBuster(){
			return Math.random() * 100000000000000000;
		}
		return {
			'request': function(config) {
				//templateCache safe cache busting (doesnt stomp on angularui's bootstrap)
				if ($templateCache.get(config.url)){
					return config;
				}
				var prefix = '?';
				
				if (config.url.search('\\?') !== -1){
					prefix = '&';
				}

				config.url += prefix += 'cachebuster=' + getBuster();
			
				return config;
			}
		}
	}]);
	 
	$httpProvider.interceptors.push('cacheBuster');
}]);