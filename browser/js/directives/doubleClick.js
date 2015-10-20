app.directive('doubleClick', function(PlayerFactory){
  return {
    restrict: 'A',
    scope: {
      doubleClick: "&"

    },
    link: function(scope, element) {
      var isPlaying = false
      element.on('click', function(){
        console.log(PlayerFactory.getCurrentSong())
        if(isPlaying) {
          isPlaying = false;
          PlayerFactory.pause()
        } else {
          scope.doubleClick(); 
          isPlaying = true;
        }
      });
    }
  };
});