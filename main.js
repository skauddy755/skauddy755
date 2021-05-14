window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

    var togg = document.getElementById("nav-toggler");
    var menu = document.getElementById("menu-container");

    console.log(togg);
    togg.addEventListener("click", (e) => {
        console.log(togg);
        menu.classList.toggle("hide");
    });

    var navs = document.getElementsByClassName("menu-nav-item");
    for(let i=0; i<navs.length; i++)
    {
        navs[i].addEventListener("click", (e) => {
            menu.classList.toggle("hide");
        });
    }

});