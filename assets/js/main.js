document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll("a[href]");

    links.forEach(link => {

        link.addEventListener("click", function () {

            const href = this.getAttribute("href");

            if (
                href &&
                href !== "#" &&
                !href.startsWith("#") &&
                !href.startsWith("mailto:")
            ) {
                document.body.classList.add("page-loading");
            }

        });

    });


    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link => {

        const linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

});