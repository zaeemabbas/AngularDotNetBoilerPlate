/// <reference path="../angular.min.js" />
/// <reference path="../angular-route.min.js" />


/*********** Angular Routing ***********/

// configure our routes
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider

        // route for the employee page
        .when('/', {
            templateUrl: 'Pages/home.html',
            controller: 'homeController',
        })

        .otherwise({
            redirectTo: '/'
        });

    /*******For Clean URLs********/
    $locationProvider.html5Mode(true);

});

