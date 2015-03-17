angular.module('hipsterNews')
  .controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'posts',
    'post',
    function($scope, $stateParams, posts, post) {
      $scope.post = post;
      $scope.addComment = function() {
        if ($scope.body == '') {
          return;
        }
        posts.addComment(post.id, {
          body: $scope.body,
          author: 'user',
        }).success(function(comment) {
          $scope.post.comments.push(comment);
        })
        $scope.post.comments.push({
          upvotes: 0
        });
        $scope.body = '';
      };
      $scope.incrementUpvotes = function(comment) {
        posts.upvoteComment(post, comment);
      };
    }
  ]);