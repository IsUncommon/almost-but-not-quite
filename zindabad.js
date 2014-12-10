var app = angular.module('estimator', []);

app.controller('EstimatorController', function($scope) {
	$scope.estimate = 3;
	$scope.features = [
		{feature: 'User login', description:'', weeks: 1},
		{feature: 'Social login (Facebook, Twitter, etc.)', description:'', weeks: 2},
		{feature: 'Social sharing integration (Facebook, Twitter, etc.)', description:'', weeks: 2},
		{feature: 'Maps/geolocation', weeks: 2},
		{feature: 'Network offline support', weeks: 2},
		{feature: 'Network offline support with sync', weeks: 4},
		{feature: 'Analytics (Google, Flurry etc.) integration', weeks: 1},
		{feature: 'GCM (Push notifications)', weeks: 2},
		{feature: 'Camera integration', weeks: 3},
		{feature: 'Android Wear support', weeks: 2},
		{feature: 'Integration with existing backend system', description:'Requires effort on our part to understand your system and the APIs it provides. Might also involve changes on the backend itself to suit the requirements of the app.', multiplier: 1.5},
		{feature: 'Custom UI design', weeks: 10, description:'A bespoke design matches your brand identity and makes your app stand out from the crowd on the Play Store. This includes 4-6 weeks of design time.'},
		{feature: 'Support for tablets', multiplier: 1.2, description: 'This involves only some extra design and development effort but keeps your tablet users very happy!'},
		{feature: 'Pre Android 4.0 (ICS) support', multiplier: 1.7, description:'Less than 10% of the Android devices worldwide run versions older than 4.0. However adding support for these devices increases development and testing time by a huge margin. Consider this carefully!'},
	];
	
	$scope.$watch('features', function() {
		var estimate = 3;
		angular.forEach($scope.features, function(feature) {
			if (feature.selected === true) {
				if (angular.isDefined(feature.weeks)) {
					estimate  = estimate + feature.weeks;
				} else if (angular.isDefined(feature.multiplier)) {
					estimate = Math.ceil(estimate * feature.multiplier);
				}
			}
		});
		$scope.estimate = estimate;
	}, true);
	
	$scope.reset = function() {
		angular.forEach($scope.features, function(feature) {
			feature.selected = false;
		});
	};
});
