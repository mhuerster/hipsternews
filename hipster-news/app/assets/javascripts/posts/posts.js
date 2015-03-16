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
    });
  };
  o.create = function(post) {
    return $http.post('/posts.json', post).success(function(data){
      o.posts.push(data);
    });
  };
  return o;
}])