

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {

    if (window.pageYOffset > 250) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", function () {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

