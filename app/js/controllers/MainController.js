app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Computer Parts';
  $scope.promo = "Popular Computer Parts"
  $scope.products = [
    {
      name: 'AMD Ryzen 7 CPU',
      price: 200,
      cover: 'img/ryzen-7.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'MSI GTX 1080 TI GPU',
      price: 200,
      cover: 'img/gtx-1080-ti.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Corsair Mid-Tower Computer Case',
      price: 100,
      cover: 'img/corsair-mid-tower-case.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'MSI AMD Motherboard',
      price: 100,
      cover: 'img/amd-motherboard.jpg',
      likes: 0,
      dislikes: 0
    },
  ];
  $scope.plusOne = function(index) {
  $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
  $scope.products[index].dislikes += 1;
  };
}]);
