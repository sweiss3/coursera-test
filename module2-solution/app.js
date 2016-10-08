(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyController = this;

    toBuyController.items = ShoppingListCheckOffService.getItemsToBuy();
    toBuyController.buyItem = function(itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBoughtController = this;

    alreadyBoughtController.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [{
      name: "cookies",
      quantity: 10
    },
    {
      name: "bottles",
      quantity: 20
    },
    {
      name: "smartphones",
      quantity: 2
    }];
    var boughtItems = [];

    service.buyItem = function (itemIndex) {
      var item = itemsToBuy[itemIndex];
      itemsToBuy.splice(itemIndex, 1);
      boughtItems.push(item);
    };

    service.getItemsToBuy = function() {
      return itemsToBuy;
    };

    service.getBoughtItems = function() {
      return boughtItems;
    }
  }

})();
