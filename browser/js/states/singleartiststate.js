app.config(function ($stateProvider) {
    $stateProvider.state('singleArtist', {
        url: '/artists/:id',
        templateUrl: "/templates/singleartisttemplate.html",
       	controller: 'ArtistCtrl'
 		
    });
});