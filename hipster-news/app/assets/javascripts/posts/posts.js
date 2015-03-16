angular.module('hipsterNews')
.factory('posts', [
  '$http',
  function($http){
  // change this variable name to something more semantic
  var o = {
    posts: []
  };
  o.getAll = function() {
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, o.posts);
    })
  }
  return o;
}])