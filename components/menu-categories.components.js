(function () {
    'use strict';

    angular.module('MenuApp')
        .component('menuCategories', {
            templateUrl: 'components/menu-categories.template.html',
            controller: MenuCategoriesController
        });

    MenuCategoriesController.$inject = ['MenuDataService'];
    function MenuCategoriesController(MenuDataService) {
        var $ctrl = this;
        $ctrl.categories = [];

        $ctrl.$onInit = function () {
            MenuDataService.getAllCategories().then(function (data) {
                $ctrl.categories = data;
            });
        };
    }
})();
