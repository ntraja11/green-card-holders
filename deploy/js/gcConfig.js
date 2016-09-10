angular.module("gcApp")
	.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'http://localhost/angular/greencard-holders/**', 'http://localhost/angular/greencard-holders/deploy/**' 
    ]);
}, function($httpProvider){
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
});