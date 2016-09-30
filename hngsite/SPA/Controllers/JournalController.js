
var JournalController = function ($scope) {
    $scope.menu = {
        items: [
            { name: "All", IsSelected: true },
            { name: "Java", IsSelected: false },
            { name: "C#", IsSelected: false },
            { name: "Web", IsSelected: false },
            { name: "Mobile", IsSelected: false },
            { name: "Other", IsSelected: false },
        ]
    };

    // TO REBIND SUB MENU ITEM WITH JQUERY FUNCTION
    $('.menu__list__sub').on("mouseover", ".menu__link", function (e) {
        [].slice.call(document.querySelectorAll('.menu')).forEach(function (menu) {
            var menuItems = menu.querySelectorAll('.menu__link'),
                setCurrent = function (ev) {
                    ev.preventDefault();

                    var item = ev.target.parentNode; // li

                    // return if already current
                    if (classie.has(item, 'menu__item--current')) {
                        return false;
                    }
                    // remove current
                    classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
                    // set current
                    classie.add(item, 'menu__item--current');
                };

            [].slice.call(menuItems).forEach(function (el) {
                el.addEventListener('click', setCurrent);
            });
        });
    });

};

JournalController.$inject = ['$scope'];


