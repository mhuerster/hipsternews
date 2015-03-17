angular.module('hipsterNews')
  .factory('posts', [
    '$http',
    function($http) {
      // change this variable name to something more semantic
      var o = {
        posts: []
      };
      o.getAll = function() {
        return $http.get('/posts.json').success(function(data) {
          angular.copy(data, o.posts);
        });
      };
      o.get = function(id) {
        return $http.get('/posts' + id).then(function(response){
          return response.data;
        });
      };
      o.create = function(post) {
        return $http.post('/posts.json', post).success(function(data) {
          o.posts.push(data);
        });
      };
      o.upvote = function(post) {
        return $http.put('/posts/' + post.id + '/upvote.json')
          .success(function(data) {
            post.upvotes += 1;
          });
      };
      return o;
    }
  ])