app.config(function ($stateProvider) {
    $stateProvider.state('singleAlbum', {
        url: '/albums/:id',
        templateUrl: "/templates/singlealbumtemplate.html",
       	controller: 'AlbumCtrl'
 		
    });
});