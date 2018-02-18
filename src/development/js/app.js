(function() {
    'use strict'

    var BookCart = angular.module('BookCart', []);

    BookCart.controller('HeaderCtrl', function($scope) {
        $scope.appDetails = {
            brandName: 'BookCart',
            heading: 'Welcome to Book Cart!',
            tagline: 'We have 1 million books for you.'
        }
    });

    BookCart.controller('BookListCtrl', function($scope) {
        $scope.books = [
            {
                imgUrl: "adultery.jpg",
                name: "Adultery",
                price: 205,
                rating: 4,
                binding: "Paperback",
                publisher: "HarperTorch",
                releaseDate: "1988",
                details: "The Alchemist by Paulo Coelho Veronika Decides to Die by Paulo Coelho Eleven Minutes by Paulo Coelho Brida by Paulo Coelho By the River Piedra I Sat Down and Wept by Paulo Coelho."
            },
            {
                imgUrl: "geronimo.jpg",
                name: "Geronimo Stilton Spacemice#2 : You're Mine, Captain!",
                price: 168,
                rating: 5,
                binding: "Paperback",
                publisher: "Scholastic",
                releaseDate: "2014",
                details: "Geronimo Stilton meets outer space in this cosmically fun spin-off series! Meet Geronimo Stiltonix."
            }
        ];

        $scope.addToCart = function(book){
            console.log(book.name + " has been added to card.")
        }
    });
})();
