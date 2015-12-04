app.config(function ($stateProvider) {
    $stateProvider.state('artistList', {
        url: '/artists',
        templateUrl: "/templates/artiststemplate.html",
       	controller: 'ArtistsCtrl'
 		
    });
});
