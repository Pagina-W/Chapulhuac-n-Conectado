document.addEventListener('DOMContentLoaded', function() {
    var openSubMenus = document.querySelectorAll('.open_submenu');

    openSubMenus.forEach(function(openSubMenu) {
        var subMenu = openSubMenu.querySelector('.submenu'); 

        openSubMenu.addEventListener('click', function(e) {
            e.preventDefault();  
            subMenu.classList.toggle('show');
        });
    });

    document.addEventListener('click', function(e) {
        openSubMenus.forEach(function(openSubMenu) {
            var subMenu = openSubMenu.querySelector('.submenu');
            if (subMenu.classList.contains('show') && !subMenu.contains(e.target) && !openSubMenu.contains(e.target)) {
                subMenu.classList.remove('show');
            }
        });
    });
});
