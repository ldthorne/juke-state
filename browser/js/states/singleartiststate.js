app.config(function ($stateProvider) {
    
    $stateProvider
    .state('singleArtist', {
        url: '/artists/:id',
        templateUrl: "/templates/singleartisttemplate.html",
        controller: 'ArtistCtrl'
    })
    .state('singleArtist.albums', {
    	url: '/albums',
    	templateUrl: "/templates/singleartistalbumstemplate.html"
    	
    })
    .state('singleArtist.songs', {
    	url: '/songs',
    	templateUrl: "/templates/singleartistsongstemplate.html"
    	
    	
    })    
       
    
 		
   
});