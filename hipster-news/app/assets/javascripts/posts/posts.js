angular.module('hipsterNews')
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