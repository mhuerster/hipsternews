angular.module('hipsterNews', ['ui.router', 'templates'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      })
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: '/posts.html',
        controller: 'PostsCtrl'
      });
    $urlRouterProvider.otherwise('home');
  }
  ])
.factory('posts', [function(){
  // change this variable name to something more semantic
  var o = {
    posts: [
      {
        title: 'post1',
        upvotes: 5,
        comments: [
            {author: 'Joe', body: 'Sriracha YOLO flannel paleo, yr typewriter shabby chic four dollar toast blog PBR dreamcatcher cred master cleanse Thundercats crucifix.', upvotes: 0},
            {author: 'Bob', body: 'Cardigan gastropub health goth, normcore gentrify you probably haven\'t heard of them DIY Portland typewriter squid twee keytar.', upvotes: 0}
          ]
        },
      {
        title: 'post2',
        upvotes: 2,
        comments: [
            {author: 'Joe', body: 'Sriracha YOLO flannel paleo, yr typewriter shabby chic four dollar toast blog PBR dreamcatcher cred master cleanse Thundercats crucifix.', upvotes: 0},
            {author: 'Bob', body: 'Cardigan gastropub health goth, normcore gentrify you probably haven\'t heard of them DIY Portland typewriter squid twee keytar.', upvotes: 0}
          ]
        },
      {
        title: 'post3',
        upvotes: 15,
        comments: [
            {author: 'Joe', body: 'Sriracha YOLO flannel paleo, yr typewriter shabby chic four dollar toast blog PBR dreamcatcher cred master cleanse Thundercats crucifix.', upvotes: 0},
            {author: 'Bob', body: 'Cardigan gastropub health goth, normcore gentrify you probably haven\'t heard of them DIY Portland typewriter squid twee keytar.', upvotes: 0}
          ]
        },
      {
        title: 'post4',
        upvotes: 9,
        comments: [
            {author: 'Joe', body: 'Sriracha YOLO flannel paleo, yr typewriter shabby chic four dollar toast blog PBR dreamcatcher cred master cleanse Thundercats crucifix.', upvotes: 0},
            {author: 'Bob', body: 'Cardigan gastropub health goth, normcore gentrify you probably haven\'t heard of them DIY Portland typewriter squid twee keytar.', upvotes: 0}
          ]
        },
      {
        title: 'post5',
        upvotes: 4,
        comments: [
            {author: 'Joe', body: 'Sriracha YOLO flannel paleo, yr typewriter shabby chic four dollar toast blog PBR dreamcatcher cred master cleanse Thundercats crucifix.', upvotes: 0},
            {author: 'Bob', body: 'Cardigan gastropub health goth, normcore gentrify you probably haven\'t heard of them DIY Portland typewriter squid twee keytar.', upvotes: 0}
          ]
        }
    ]
  };
  return o;
}])
.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
    $scope.test = 'Hello world!';
    $scope.posts = posts.posts;
    $scope.addPost = function() {
      if (!$scope.title || $scope.title == '') { return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    };
    $scope.incrementUpvotes = function(post) {
      post.upvotes++;
    };
  }])
.controller('PostsCtrl', [
  '$scope',
  '$stateParams',
  'posts',
  function($scope, $stateParams, posts){
    $scope.post = posts.posts[$stateParams.id];
    $scope.addComment = function() {
      if ($scope.body == '') { return; }
      $scope.post.comments.push({
        body: $scope.body,
        author: 'user',
        upvotes: 0
      });
      $scope.body = '';
    };
  }]);