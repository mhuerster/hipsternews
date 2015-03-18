angular.module('hipsterNews')
.controller('MainCtrl', [
  '$scope',
  'posts',
  'FileUploader',
  function($scope, posts, FileUploader){
    $scope.uploader = new FileUploader('/posts.json');
    $scope.uploader.onBeforeUploadItem(function(item) {
      console.log(item);
    });
    $scope.posts = posts.posts;
    $scope.addPost = function() {
      if ($scope.uploader.queue[0]) {
        console.log($scope.uploader.queue[0].file.name);
        // $scope.uploader.queue[0].upload();
      }
      if (!$scope.title || $scope.title == '') { return; }
      posts.create({
        title: $scope.title,
        link: $scope.link,

        post_photo: $scope.uploader,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    };
    $scope.incrementUpvotes = function(post) {
      posts.upvote(post);
    };
  }])