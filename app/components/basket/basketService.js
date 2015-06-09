angular.module('myApp.basket', [])

    .service('Basket', function () {
        var basketData = {
                count: 0,
                items: [],
                amount: 0
            },
            basketItem = function () {
                this.item = {};
                this.counts = 0;

                this.getItem = function () {
                    return this.item;
                };

                this.setItem = function (item) {
                    this.item = item;
                }
                this.getPrice = function () {
                    return this.item.price;
                };

                this.getName = function () {
                    return this.item.name;
                };

                this.getTotalPrice = function () {
                    return (this.item.price * this.counts);
                };
            };


        this.basketData = basketData;
        this.addItem = function (item) {
            var isNew = true,
                currentItem = new basketItem();
            for (var i in basketData.items) {
                // check is item already in basket
                currentItem = basketData.items[i];
                if (currentItem.getItem() === item) {
                    //if element already in basket increase counts
                    currentItem.counts++;
                    isNew = false;
                    break;
                }
            }
            if (isNew) {
                // if item new add it to basket
                var newItem = new basketItem();
                newItem.setItem(item);
                newItem.counts = 1;
                basketData.items.push(newItem);
                basketData.count = basketData.items.length;
            }
            // destory temp variables
            this.updateAmount();
            delete currentItem;
            delete isNew;
        };

        this.deleteItem = function (basketItem) {
            basketData.items.splice(basketData.items.indexOf(basketItem),1);
            this.updateAmount();
        }

        this.updateAmount = function () {
            var amount = 0,
                items = this.getItemsList();
            for (var item in items) {
                amount += +items[item].getTotalPrice();
            }
            basketData.amount = amount;
        };

        this.getItemsList = function () {
            return basketData.items;
        }

    });