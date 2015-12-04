app.config(function ($stateProvider) {
    $stateProvider.state('albumList', {
        url: '/albums',
        templateUrl: "/templates/albumstemplate.html",
       	controller: 'AlbumsCtrl'
 		
    });
});
