angular.module("gcApp")
	.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'http://localhost/angular/greencard-holders/includes/**'
    ]);
});